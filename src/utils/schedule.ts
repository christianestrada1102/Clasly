import type { ScheduleData } from '../types/schedule.types';

export const SCHEDULE_DATA: ScheduleData = {
    semester: "2026",
    group: "DS32M",
    classes: [
        // LUNES (day: 1)
        { id: "lun-1", name: "Cálculo Integral", day: 1, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 0 }, color: "#f59e0b", type: "Teoría", location: "I21", professor: "Trejo Carrillo David" },
        { id: "lun-2", name: "Desarrollo del Pensamiento y Toma de Decisiones", day: 1, startTime: { hour: 8, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#ec4899", type: "Teoría", location: "I21", professor: "González Rubio Ángel Esteban" },
        { id: "lun-break", name: "Receso", day: 1, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "lun-3", name: "Inglés III", day: 1, startTime: { hour: 9, minute: 10 }, endTime: { hour: 10, minute: 0 }, color: "#a78bfa", type: "Teoría", location: "I21", professor: "Nieto Chavira Miriam" },
        { id: "lun-4", name: "Bases de Datos", day: 1, startTime: { hour: 10, minute: 0 }, endTime: { hour: 12, minute: 0 }, color: "#10b981", type: "Teoría", location: "LS11", professor: "Ramírez Ochoa Dynhora Danheyda" },
        { id: "lun-5", name: "Programación Orientada a Objetos", day: 1, startTime: { hour: 12, minute: 0 }, endTime: { hour: 13, minute: 0 }, color: "#8b5cf6", type: "Teoría", location: "I21", professor: "Batres Márquez Milton Joel" },

        // MARTES (day: 2)
        { id: "mar-1", name: "Tópicos de Calidad para el Diseño de Software", day: 2, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#6366f1", type: "Teoría", location: "LS11", professor: "Bustamante Lozano Juan Carlos" },
        { id: "mar-break", name: "Receso", day: 2, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "mar-2", name: "Inglés III", day: 2, startTime: { hour: 9, minute: 10 }, endTime: { hour: 11, minute: 0 }, color: "#a78bfa", type: "Teoría", location: "I21", professor: "Nieto Chavira Miriam" },
        { id: "mar-3", name: "Proyecto Integrador I", day: 2, startTime: { hour: 11, minute: 0 }, endTime: { hour: 13, minute: 0 }, color: "#3b82f6", type: "Práctica", location: "I21", professor: "Pérez Ortega Eva Claudia" },
        { id: "mar-4", name: "Tutoría", day: 2, startTime: { hour: 13, minute: 0 }, endTime: { hour: 14, minute: 0 }, color: "#ef4444", type: "Tutoría", location: "I21", professor: "Ramírez Ochoa Dynhora Danheyda" },

        // MIÉRCOLES (day: 3)
        { id: "mie-1", name: "Tópicos de Calidad para el Diseño de Software", day: 3, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#6366f1", type: "Teoría", location: "LS11", professor: "Bustamante Lozano Juan Carlos" },
        { id: "mie-break", name: "Receso", day: 3, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "mie-2", name: "Cálculo Integral", day: 3, startTime: { hour: 9, minute: 10 }, endTime: { hour: 10, minute: 0 }, color: "#f59e0b", type: "Teoría", location: "I21", professor: "Trejo Carrillo David" },
        { id: "mie-3", name: "Inglés III", day: 3, startTime: { hour: 10, minute: 0 }, endTime: { hour: 12, minute: 0 }, color: "#a78bfa", type: "Teoría", location: "I21", professor: "Nieto Chavira Miriam" },
        { id: "mie-4", name: "Programación Orientada a Objetos", day: 3, startTime: { hour: 12, minute: 0 }, endTime: { hour: 14, minute: 0 }, color: "#8b5cf6", type: "Teoría", location: "LS11", professor: "Batres Márquez Milton Joel" },

        // JUEVES (day: 4)
        { id: "jue-1", name: "Desarrollo del Pensamiento y Toma de Decisiones", day: 4, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#ec4899", type: "Teoría", location: "I21", professor: "González Rubio Ángel Esteban" },
        { id: "jue-break", name: "Receso", day: 4, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "jue-2", name: "Tópicos de Calidad para el Diseño de Software", day: 4, startTime: { hour: 9, minute: 10 }, endTime: { hour: 11, minute: 0 }, color: "#6366f1", type: "Teoría", location: "I21", professor: "Bustamante Lozano Juan Carlos" },
        { id: "jue-3", name: "Programación Orientada a Objetos", day: 4, startTime: { hour: 11, minute: 0 }, endTime: { hour: 13, minute: 0 }, color: "#8b5cf6", type: "Teoría", location: "LS11", professor: "Batres Márquez Milton Joel" },
        { id: "jue-4", name: "Bases de Datos", day: 4, startTime: { hour: 13, minute: 0 }, endTime: { hour: 15, minute: 0 }, color: "#10b981", type: "Teoría", location: "LS11", professor: "Ramírez Ochoa Dynhora Danheyda" },

        // VIERNES (day: 5)
        { id: "vie-1", name: "Cálculo Integral", day: 5, startTime: { hour: 7, minute: 0 }, endTime: { hour: 8, minute: 50 }, color: "#f59e0b", type: "Teoría", location: "I21", professor: "Trejo Carrillo David" },
        { id: "vie-break", name: "Receso", day: 5, startTime: { hour: 8, minute: 50 }, endTime: { hour: 9, minute: 10 }, color: "#fbbf24", type: "Receso", location: "Campus" },
        { id: "vie-2", name: "Desarrollo del Pensamiento y Toma de Decisiones", day: 5, startTime: { hour: 9, minute: 10 }, endTime: { hour: 10, minute: 0 }, color: "#ec4899", type: "Teoría", location: "I21", professor: "González Rubio Ángel Esteban" },
        { id: "vie-3", name: "Programación Orientada a Objetos", day: 5, startTime: { hour: 10, minute: 0 }, endTime: { hour: 12, minute: 0 }, color: "#8b5cf6", type: "Teoría", location: "LS11", professor: "Batres Márquez Milton Joel" },
        { id: "vie-4", name: "Bases de Datos", day: 5, startTime: { hour: 12, minute: 0 }, endTime: { hour: 13, minute: 0 }, color: "#10b981", type: "Teoría", location: "I21", professor: "Ramírez Ochoa Dynhora Danheyda" },
        { id: "vie-5", name: "Proyecto Integrador I", day: 5, startTime: { hour: 13, minute: 0 }, endTime: { hour: 15, minute: 0 }, color: "#3b82f6", type: "Práctica", location: "I21", professor: "Pérez Ortega Eva Claudia" },
    ]
};
