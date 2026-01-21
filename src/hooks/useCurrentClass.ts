import { useState, useEffect } from 'react';
import type { CurrentClassStatus } from '../types/schedule.types';
import { SCHEDULE_DATA } from '../utils/schedule';
import {
    getCurrentDayOfWeek,
    getCurrentTimeInMinutes,
    isTimeBetween
} from '../utils/timeHelpers';

export const useCurrentClass = () => {
    const [status, setStatus] = useState<CurrentClassStatus>({
        state: 'none',
        class: null,
        nextClass: null
    });

    const updateStatus = () => {
        const now = new Date();
        const currentDay = getCurrentDayOfWeek(now); // 1-5 (Lun-Vie)
        const currentMinutes = getCurrentTimeInMinutes(now);

        // Si es fin de semana o fuera de días laborales
        if (currentDay < 1 || currentDay > 5) {
            setStatus({
                state: 'none',
                class: null,
                nextClass: null
            });
            return;
        }

        // Obtener todas las clases del día ordenadas
        const todayClasses = SCHEDULE_DATA.classes
            .filter(c => c.day === currentDay)
            .sort((a, b) => {
                const aStart = a.startTime.hour * 60 + a.startTime.minute;
                const bStart = b.startTime.hour * 60 + b.startTime.minute;
                return aStart - bStart;
            });

        // 1. Buscar si estamos DENTRO de una clase (Active or Break)
        for (let i = 0; i < todayClasses.length; i++) {
            const classItem = todayClasses[i];
            const startMinutes = classItem.startTime.hour * 60 + classItem.startTime.minute;
            const endMinutes = classItem.endTime.hour * 60 + classItem.endTime.minute;

            if (isTimeBetween(currentMinutes, startMinutes, endMinutes)) {
                // Estamos EN CLASE
                const totalDuration = endMinutes - startMinutes;
                const elapsed = currentMinutes - startMinutes;
                const progress = (elapsed / totalDuration) * 100;
                const minutesLeft = endMinutes - currentMinutes;

                // Buscar siguiente clase (si existe)
                const nextClass = i < todayClasses.length - 1 ? todayClasses[i + 1] : null;

                setStatus({
                    state: classItem.type === 'Receso' ? 'break' : 'current',
                    class: classItem,
                    nextClass,
                    progress: Math.round(progress),
                    minutesLeft
                });
                return;
            }
        }

        // 2. Si no estamos en clase, buscar la PRÓXIMA clase
        const upcomingClass = todayClasses.find(c => {
            const startMinutes = c.startTime.hour * 60 + c.startTime.minute;
            return startMinutes > currentMinutes;
        });

        if (upcomingClass) {
            const startMinutes = upcomingClass.startTime.hour * 60 + upcomingClass.startTime.minute;
            const minutesUntil = startMinutes - currentMinutes;

            setStatus({
                state: 'upcoming',
                class: null,
                nextClass: upcomingClass,
                minutesUntil
            });
            return;
        }

        // 3. No hay más clases hoy
        setStatus({
            state: 'none',
            class: null,
            nextClass: null
        });
    };

    useEffect(() => {
        updateStatus(); // Ejecutar inmediatamente

        // Actualizar cada minuto
        const interval = setInterval(updateStatus, 60000);

        return () => clearInterval(interval);
    }, []);

    return status;
};
