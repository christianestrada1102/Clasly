export type DayOfWeek = 1 | 2 | 3 | 4 | 5; // Lunes a Viernes
export type ClassType = 'Teoría' | 'Práctica' | 'Tutoría' | 'Receso';

export interface TimeSlot {
    hour: number;    // 7, 9, 10, etc.
    minute: number;  // 0, 10, etc.
}

export interface Class {
    id: string;
    name: string;
    day: DayOfWeek;
    startTime: TimeSlot;
    endTime: TimeSlot;
    color: string;           // Hex color
    type: ClassType;
    location: string;        // Salón (LS11, I16, etc.)
    professor?: string;      // Profesor
    progress?: number;       // 0-100 para indicar progreso si es actual
}

export interface CurrentClassStatus {
    state: 'current' | 'upcoming' | 'break' | 'none';
    class: Class | null;
    nextClass?: Class | null;
    progress?: number;       // 0-100 para clase actual
    minutesUntil?: number;   // Para próxima clase
    minutesLeft?: number;    // Para clase actual
}

export interface ScheduleData {
    classes: Class[];
    semester: string;        // "2026"
    group: string;           // "DS41M"
}
