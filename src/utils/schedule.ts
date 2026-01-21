import type { ScheduleData } from '../types/schedule.types';

export const SCHEDULE_DATA: ScheduleData = {
    semester: "2026",
    group: "DS41M",
    classes: [
        // LUNES (day: 1)
        {
            id: "lun-1",
            name: "Desarrollo de Aplicaciones Móviles",
            day: 1,
            startTime: { hour: 7, minute: 0 },
            endTime: { hour: 9, minute: 0 },
            color: "#8b5cf6",
            type: "Teoría",
            location: "LS11",
            professor: "Villagrán Vizcarra"
        },
        {
            id: "lun-break",
            name: "Receso",
            day: 1,
            startTime: { hour: 9, minute: 0 },
            endTime: { hour: 9, minute: 10 },
            color: "#fbbf24",
            type: "Receso",
            location: "Campus"
        },
        {
            id: "lun-2",
            name: "Aplicaciones Web",
            day: 1,
            startTime: { hour: 9, minute: 10 },
            endTime: { hour: 11, minute: 0 },
            color: "#3b82f6",
            type: "Práctica",
            location: "LAB_MOVIL",
            professor: "Guerrero Quiñonez"
        },
        {
            id: "lun-3",
            name: "Tutoría",
            day: 1,
            startTime: { hour: 11, minute: 0 },
            endTime: { hour: 12, minute: 0 },
            color: "#f59e0b",
            type: "Tutoría",
            location: "I16",
            professor: "Villagrán Vizcarra"
        },
        {
            id: "lun-4",
            name: "Estructura de Datos",
            day: 1,
            startTime: { hour: 12, minute: 0 },
            endTime: { hour: 13, minute: 0 },
            color: "#10b981",
            type: "Teoría",
            location: "LS11",
            professor: "Mireles Vasquez"
        },
        {
            id: "lun-5",
            name: "Inglés IV",
            day: 1,
            startTime: { hour: 13, minute: 0 },
            endTime: { hour: 15, minute: 0 },
            color: "#a78bfa",
            type: "Teoría",
            location: "I16",
            professor: "Espinoza Murillo"
        },

        // MARTES (day: 2)
        {
            id: "mar-1",
            name: "Análisis y Diseño de Software",
            day: 2,
            startTime: { hour: 7, minute: 0 },
            endTime: { hour: 9, minute: 0 },
            color: "#6366f1",
            type: "Teoría",
            location: "I16",
            professor: "Vacante 3"
        },
        {
            id: "mar-break",
            name: "Receso",
            day: 2,
            startTime: { hour: 9, minute: 0 },
            endTime: { hour: 9, minute: 10 },
            color: "#fbbf24",
            type: "Receso",
            location: "Campus"
        },
        {
            id: "mar-2",
            name: "Desarrollo de Aplicaciones Móviles",
            day: 2,
            startTime: { hour: 9, minute: 10 },
            endTime: { hour: 10, minute: 0 },
            color: "#8b5cf6",
            type: "Teoría",
            location: "I16",
            professor: "Villagrán Vizcarra"
        },
        {
            id: "mar-3",
            name: "Aplicaciones Web",
            day: 2,
            startTime: { hour: 10, minute: 0 },
            endTime: { hour: 11, minute: 0 },
            color: "#3b82f6",
            type: "Teoría",
            location: "I16",
            professor: "Guerrero Quiñonez"
        },
        {
            id: "mar-4",
            name: "Ética Profesional",
            day: 2,
            startTime: { hour: 11, minute: 0 },
            endTime: { hour: 13, minute: 0 },
            color: "#ec4899",
            type: "Teoría",
            location: "I16",
            professor: "Loya Piña"
        },

        // MIÉRCOLES (day: 3)
        {
            id: "mie-1",
            name: "Cálculo de Varias Variables",
            day: 3,
            startTime: { hour: 7, minute: 0 },
            endTime: { hour: 9, minute: 0 },
            color: "#f59e0b",
            type: "Teoría",
            location: "I16",
            professor: "Mendez Cardozo"
        },
        {
            id: "mie-break",
            name: "Receso",
            day: 3,
            startTime: { hour: 9, minute: 0 },
            endTime: { hour: 9, minute: 10 },
            color: "#fbbf24",
            type: "Receso",
            location: "Campus"
        },
        {
            id: "mie-2",
            name: "Estructura de Datos",
            day: 3,
            startTime: { hour: 9, minute: 10 },
            endTime: { hour: 11, minute: 0 },
            color: "#10b981",
            type: "Teoría",
            location: "LS11",
            professor: "Mireles Vasquez"
        },
        {
            id: "mie-3",
            name: "Desarrollo de Aplicaciones Móviles",
            day: 3,
            startTime: { hour: 11, minute: 0 },
            endTime: { hour: 12, minute: 0 },
            color: "#8b5cf6",
            type: "Teoría",
            location: "I16",
            professor: "Villagrán Vizcarra"
        },
        {
            id: "mie-4",
            name: "Aplicaciones Web",
            day: 3,
            startTime: { hour: 12, minute: 0 },
            endTime: { hour: 14, minute: 0 },
            color: "#3b82f6",
            type: "Práctica",
            location: "LAB_MOVIL",
            professor: "Guerrero Quiñonez"
        },

        // JUEVES (day: 4)
        {
            id: "jue-1",
            name: "Cálculo de Varias Variables",
            day: 4,
            startTime: { hour: 7, minute: 0 },
            endTime: { hour: 9, minute: 0 },
            color: "#f59e0b",
            type: "Teoría",
            location: "I16",
            professor: "Mendez Cardozo"
        },
        {
            id: "jue-break",
            name: "Receso",
            day: 4,
            startTime: { hour: 9, minute: 0 },
            endTime: { hour: 9, minute: 10 },
            color: "#fbbf24",
            type: "Receso",
            location: "Campus"
        },
        {
            id: "jue-2",
            name: "Estructura de Datos",
            day: 4,
            startTime: { hour: 9, minute: 10 },
            endTime: { hour: 11, minute: 0 },
            color: "#10b981",
            type: "Teoría",
            location: "LS11",
            professor: "Mireles Vasquez"
        },
        {
            id: "jue-3",
            name: "Análisis y Diseño de Software",
            day: 4,
            startTime: { hour: 11, minute: 0 },
            endTime: { hour: 12, minute: 0 },
            color: "#6366f1",
            type: "Teoría",
            location: "I16",
            professor: "Vacante 3"
        },
        {
            id: "jue-4",
            name: "Ética Profesional",
            day: 4,
            startTime: { hour: 12, minute: 0 },
            endTime: { hour: 14, minute: 0 },
            color: "#ec4899",
            type: "Teoría",
            location: "I16",
            professor: "Loya Piña"
        },
        {
            id: "jue-5",
            name: "Inglés IV",
            day: 4,
            startTime: { hour: 14, minute: 0 },
            endTime: { hour: 15, minute: 0 },
            color: "#a78bfa",
            type: "Teoría",
            location: "I16",
            professor: "Espinoza Murillo"
        },

        // VIERNES (day: 5)
        {
            id: "vie-1",
            name: "Desarrollo de Aplicaciones Móviles",
            day: 5,
            startTime: { hour: 7, minute: 0 },
            endTime: { hour: 9, minute: 0 },
            color: "#8b5cf6",
            type: "Teoría",
            location: "LS11",
            professor: "Villagrán Vizcarra"
        },
        {
            id: "vie-break",
            name: "Receso",
            day: 5,
            startTime: { hour: 9, minute: 0 },
            endTime: { hour: 9, minute: 10 },
            color: "#fbbf24",
            type: "Receso",
            location: "Campus"
        },
        {
            id: "vie-2",
            name: "Análisis y Diseño de Software",
            day: 5,
            startTime: { hour: 9, minute: 10 },
            endTime: { hour: 11, minute: 0 },
            color: "#6366f1",
            type: "Teoría",
            location: "I16",
            professor: "Vacante 3"
        },
        {
            id: "vie-3",
            name: "Cálculo de Varias Variables",
            day: 5,
            startTime: { hour: 11, minute: 0 },
            endTime: { hour: 12, minute: 0 },
            color: "#f59e0b",
            type: "Teoría",
            location: "I16",
            professor: "Mendez Cardozo"
        },
        {
            id: "vie-4",
            name: "Inglés IV",
            day: 5,
            startTime: { hour: 12, minute: 0 },
            endTime: { hour: 14, minute: 0 },
            color: "#a78bfa",
            type: "Teoría",
            location: "I16",
            professor: "Espinoza Murillo"
        },
    ]
};
