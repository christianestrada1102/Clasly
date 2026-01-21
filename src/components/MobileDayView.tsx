import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ScheduleData } from '../types/schedule.types';
import { ClassCard } from './ClassCard';
import { getCurrentDayOfWeek } from '../utils/timeHelpers';

interface MobileDayViewProps {
    schedule: ScheduleData;
    currentClassId: string | undefined;
}

export const MobileDayView: React.FC<MobileDayViewProps> = ({ schedule, currentClassId }) => {
    const [selectedDay, setSelectedDay] = useState<number>(1);
    const days = [
        { id: 1, label: 'Lun' },
        { id: 2, label: 'Mar' },
        { id: 3, label: 'Mié' },
        { id: 4, label: 'Jue' },
        { id: 5, label: 'Vie' }
    ];

    useEffect(() => {
        const today = getCurrentDayOfWeek(new Date());
        if (today >= 1 && today <= 5) {
            setSelectedDay(today);
        }
    }, []);

    const dayClasses = schedule.classes
        .filter(c => c.day === selectedDay)
        .sort((a, b) => {
            const aStart = a.startTime.hour * 60 + a.startTime.minute;
            const bStart = b.startTime.hour * 60 + b.startTime.minute;
            return aStart - bStart;
        });

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex justify-between mb-6 bg-bg-secondary p-1 rounded-2xl border border-white/5 relative">
                {days.map((day) => (
                    <button
                        key={day.id}
                        onClick={() => setSelectedDay(day.id)}
                        className={`
              relative z-10 flex-1 py-3 text-sm font-bold rounded-xl transition-colors
              ${selectedDay === day.id ? 'text-primary' : 'text-gray-400 hover:text-white'}
            `}
                    >
                        {day.label}
                        {selectedDay === day.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white rounded-xl -z-10 shadow-lg"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="space-y-4 min-h-[400px]">
                <AnimatePresence mode="popLayout">
                    {dayClasses.map((classItem, index) => (
                        <motion.div
                            key={classItem.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <ClassCard
                                class={classItem}
                                isCurrentClass={currentClassId === classItem.id}
                            />
                        </motion.div>
                    ))}

                    {dayClasses.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12 text-text-tertiary"
                        >
                            <p>No hay clases este día</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
