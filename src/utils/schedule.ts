import type { ScheduleData } from '../types/schedule.types';

export const SCHEDULE_DATA: ScheduleData = {
    semester: "2026",
    group: "DS41M",
    classes: [
        // LUNES (day: 1)
        { id: "lun-1", name: "Inglés IV", day: 1, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#a78bfa", type: "Teoría", location: "Aula", professor: "Nieto Chavira Miriam" },
        { id: "lun-break", name: "Receso", day: 1, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "lun-2", name: "Tutoría", day: 1, startTime: { hour: 9, minute: 10 }, endTime: { hour: 10, minute: 0 }, color: "#ef4444", type: "Tutoría", location: "Aula", professor: "Batres Márquez Milton Joel" },
        { id: "lun-3", name: "Ética Profesional I", day: 1, startTime: { hour: 10, minute: 0 }, endTime: { hour: 11, minute: 0 }, color: "#ec4899", type: "Teoría", location: "Aula", professor: "Loya Peña Luz Vanessa" },
        { id: "lun-4", name: "Estructura de Datos", day: 1, startTime: { hour: 11, minute: 0 }, endTime: { hour: 12, minute: 0 }, color: "#10b981", type: "Teoría", location: "Aula", professor: "Batres Márquez Milton Joel" },
        { id: "lun-5", name: "Análisis y Diseño de Software", day: 1, startTime: { hour: 12, minute: 0 }, endTime: { hour: 13, minute: 0 }, color: "#6366f1", type: "Teoría", location: "Aula", professor: "Hinojós Cepeda Evelyn Paulina" },

        // MARTES (day: 2)
        { id: "mar-1", name: "Análisis y Diseño de Software", day: 2, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#6366f1", type: "Teoría", location: "Aula", professor: "Hinojós Cepeda Evelyn Paulina" },
        { id: "mar-break", name: "Receso", day: 2, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "mar-2", name: "Estructura de Datos", day: 2, startTime: { hour: 9, minute: 10 }, endTime: { hour: 11, minute: 0 }, color: "#10b981", type: "Teoría", location: "LS05", professor: "Batres Márquez Milton Joel" },
        { id: "mar-3", name: "Cálculo de Varias Variables", day: 2, startTime: { hour: 11, minute: 0 }, endTime: { hour: 12, minute: 0 }, color: "#f59e0b", type: "Teoría", location: "Aula", professor: "Mendías Cardoza Paloma Ivette" },
        { id: "mar-4", name: "Aplicaciones Web", day: 2, startTime: { hour: 12, minute: 0 }, endTime: { hour: 15, minute: 0 }, color: "#8b5cf6", type: "Práctica", location: "LS05", professor: "Vacante Web Matutino" },

        // MIÉRCOLES (day: 3)
        { id: "mie-1", name: "Inglés IV", day: 3, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#a78bfa", type: "Teoría", location: "Aula", professor: "Nieto Chavira Miriam" },
        { id: "mie-break", name: "Receso", day: 3, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "mie-2", name: "Desarrollo de Aplicaciones Móviles", day: 3, startTime: { hour: 9, minute: 10 }, endTime: { hour: 11, minute: 0 }, color: "#3b82f6", type: "Práctica", location: "LS11", professor: "Bustamante Lozano Juan Carlos" },
        { id: "mie-3", name: "Estructura de Datos", day: 3, startTime: { hour: 11, minute: 0 }, endTime: { hour: 13, minute: 0 }, color: "#10b981", type: "Teoría", location: "LS05", professor: "Batres Márquez Milton Joel" },

        // JUEVES (day: 4)
        { id: "jue-1", name: "Análisis y Diseño de Software", day: 4, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#6366f1", type: "Teoría", location: "Aula", professor: "Hinojós Cepeda Evelyn Paulina" },
        { id: "jue-break", name: "Receso", day: 4, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "jue-2", name: "Cálculo de Varias Variables", day: 4, startTime: { hour: 9, minute: 10 }, endTime: { hour: 10, minute: 0 }, color: "#f59e0b", type: "Teoría", location: "Aula", professor: "Mendías Cardoza Paloma Ivette" },
        { id: "jue-3", name: "Ética Profesional I", day: 4, startTime: { hour: 10, minute: 0 }, endTime: { hour: 11, minute: 0 }, color: "#ec4899", type: "Teoría", location: "Aula", professor: "Loya Peña Luz Vanessa" },
        { id: "jue-4", name: "Aplicaciones Web", day: 4, startTime: { hour: 11, minute: 0 }, endTime: { hour: 13, minute: 0 }, color: "#8b5cf6", type: "Práctica", location: "LS05", professor: "Vacante Web Matutino" },
        { id: "jue-5", name: "Desarrollo de Aplicaciones Móviles", day: 4, startTime: { hour: 13, minute: 0 }, endTime: { hour: 15, minute: 0 }, color: "#3b82f6", type: "Práctica", location: "LS11", professor: "Bustamante Lozano Juan Carlos" },

        // VIERNES (day: 5)
        { id: "vie-1", name: "Ética Profesional I", day: 5, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#ec4899", type: "Teoría", location: "Aula", professor: "Loya Peña Luz Vanessa" },
        { id: "vie-break", name: "Receso", day: 5, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "vie-2", name: "Inglés IV", day: 5, startTime: { hour: 9, minute: 10 }, endTime: { hour: 10, minute: 0 }, color: "#a78bfa", type: "Teoría", location: "Aula", professor: "Nieto Chavira Miriam" },
        { id: "vie-3", name: "Aplicaciones Web", day: 5, startTime: { hour: 10, minute: 0 }, endTime: { hour: 11, minute: 0 }, color: "#8b5cf6", type: "Práctica", location: "LS05", professor: "Vacante Web Matutino" },
        { id: "vie-4", name: "Cálculo de Varias Variables", day: 5, startTime: { hour: 11, minute: 0 }, endTime: { hour: 13, minute: 0 }, color: "#f59e0b", type: "Teoría", location: "Aula", professor: "Mendías Cardoza Paloma Ivette" },
        { id: "vie-5", name: "Desarrollo de Aplicaciones Móviles", day: 5, startTime: { hour: 13, minute: 0 }, endTime: { hour: 15, minute: 0 }, color: "#3b82f6", type: "Práctica", location: "LS11", professor: "Bustamante Lozano Juan Carlos" },
    ]
};
