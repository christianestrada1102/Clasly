import type { ScheduleData } from '../types/schedule.types';

const COLORS = [
    '#a78bfa', '#6366f1', '#ec4899', '#ef4444',
    '#10b981', '#3b82f6', '#f59e0b', '#8b5cf6',
    '#14b8a6', '#f97316', '#e879f9', '#34d399',
];

function assignColors(classes: ScheduleData['classes']): ScheduleData['classes'] {
    const colorMap: Record<string, string> = {};
    let idx = 0;
    return classes.map(c => {
        if (!colorMap[c.name]) {
            colorMap[c.name] = COLORS[idx % COLORS.length];
            idx++;
        }
        return { ...c, color: colorMap[c.name] };
    });
}

const PROMPT = `Analiza esta imagen de horario escolar (tabla semanal) y extrae TODA la información.

INSTRUCCIONES CRÍTICAS:
1. La tabla tiene filas de tiempo (ej. 7:00-8:00, 8:00-8:50) y columnas de días (Lu, Ma, Mi, Ju, Vi).
2. Una celda puede abarcar MÚLTIPLES FILAS — eso significa que esa materia dura ese rango completo de tiempo. Detecta correctamente el inicio y fin real.
3. El RECESO (normalmente 8:50-9:10) es un bloque especial, inclúyelo.
4. Cada día es una columna separada — una materia que aparece en múltiples días crea una entrada por día.
5. Lee el nombre del grupo (ej. DS41M) del encabezado.
6. Lee el salón/laboratorio de cada celda si aparece (ej. LS05, LS11, I21).
7. Lee el nombre del profesor si aparece en la celda.

Devuelve ÚNICAMENTE este JSON (sin markdown, sin texto extra):

{
  "semester": "2026",
  "group": "<grupo del encabezado>",
  "classes": [
    {
      "id": "<lun-1, lun-2, mar-1, etc>",
      "name": "<nombre exacto de la materia>",
      "day": <1=Lunes 2=Martes 3=Miércoles 4=Jueves 5=Viernes>,
      "startTime": {"hour": <0-23>, "minute": <0-59>},
      "endTime": {"hour": <0-23>, "minute": <0-59>},
      "color": "#000000",
      "location": "<salón o Campus si es receso>",
      "professor": "<profesor o string vacío>",
      "type": "<Teoría|Práctica|Tutoría|Receso>"
    }
  ]
}`;

export async function parseScheduleImage(
    imageBase64: string,
    mediaType: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif',
): Promise<ScheduleData> {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    if (!apiKey) throw new Error('Falta VITE_OPENROUTER_API_KEY en el archivo .env');

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'google/gemini-3.8-flash',
            max_tokens: 4096,
            messages: [{
                role: 'user',
                content: [
                    {
                        type: 'image_url',
                        image_url: { url: `data:${mediaType};base64,${imageBase64}` },
                    },
                    { type: 'text', text: PROMPT },
                ],
            }],
        }),
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`OpenRouter error ${res.status}: ${err}`);
    }

    const json = await res.json();
    let raw: string = json.choices?.[0]?.message?.content ?? '';
    raw = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');

    const data: ScheduleData = JSON.parse(raw);
    data.classes = assignColors(data.classes);
    return data;
}
