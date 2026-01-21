import React from 'react';
import { motion } from 'framer-motion';
import type { ScheduleData } from '../types/schedule.types';
import { ClassCard } from './ClassCard';
import { gridContainerVariants, gridItemVariants } from '../animations/variants';
import { getCurrentDayOfWeek } from '../utils/timeHelpers';

interface ScheduleGridProps {
    schedule: ScheduleData;
    currentClassId: string | undefined;
}

export const ScheduleGrid: React.FC<ScheduleGridProps> = ({ schedule, currentClassId }) => {
    const days = [1, 2, 3, 4, 5]; // Lun-Vie
    const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const currentDay = getCurrentDayOfWeek(new Date());

    return (
        <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-5 gap-4 min-w-[1000px] h-full" // Ensure min-width for scrolling if needed
        >
            {days.map((day, index) => {
                const isToday = currentDay === day;
                const dayClasses = schedule.classes
                    .filter(c => c.day === day)
                    .sort((a, b) => {
                        const aStart = a.startTime.hour * 60 + a.startTime.minute;
                        const bStart = b.startTime.hour * 60 + b.startTime.minute;
                        return aStart - bStart;
                    });

                return (
                    <div key={day} className={`flex flex-col gap-4 rounded-xl transition-colors duration-300 ${isToday ? 'bg-white/5 p-3 -m-3 border border-white/5' : ''}`}>
                        {/* Column Header */}
                        <div className="text-center pb-2 border-b border-white/5">
                            <h3 className={`text-lg font-semibold ${isToday ? 'text-primary' : 'text-white'}`}>
                                {dayNames[index]}
                            </h3>
                            {/* <span className="text-xs text-gray-400">{dates[index]}</span> */}
                            {/* Dynamic dates would go here, kept static placeholder structure */}
                        </div>

                        <div className="flex flex-col gap-4 h-full">
                            {dayClasses.map((classItem) => (
                                <motion.div key={classItem.id} variants={gridItemVariants} className="flex-1">
                                    <ClassCard
                                        class={classItem}
                                        isCurrentClass={currentClassId === classItem.id}
                                    />
                                </motion.div>
                            ))}

                            {dayClasses.length === 0 && (
                                <div className="rounded-lg p-4 border border-dashed border-white/10 flex items-center justify-center h-24 opacity-50 mt-12 bg-white/5">
                                    <span className="text-xs text-gray-500 font-medium">Libre</span>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );
};
