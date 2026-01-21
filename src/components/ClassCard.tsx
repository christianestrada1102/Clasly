import React from 'react';
import type { Class } from '../types/schedule.types';
import { formatTime } from '../utils/timeHelpers';
import { Clock, MapPin, MoreVertical } from 'lucide-react';

interface ClassCardProps {
    class: Class;
    isCurrentClass: boolean; // Kept for logic, but adapting visual style
}

export const ClassCard: React.FC<ClassCardProps> = ({ class: classData }) => {
    // Determine color theme based on type 'Teoría' | 'Laboratorio' | 'Taller'
    // Using the colors from tailwind config: primary (blue), secondary (green), tertiary (orange)
    let themeColor = 'bg-primary';
    let themeText = 'text-primary';
    let themeBorder = 'border-primary/20';
    let themeBg = 'bg-primary/10'; // for badge

    if (classData.type === 'Práctica' || classData.type.includes('Lab') || classData.color === '#10b981' || classData.color === '#3b82f6') {
        // Checking color code for 'Práctica' / 'LAB_MOVIL' which was blue in data but maybe green in theme?
        // Let's stick to the visual cues from the HTML:
        // "Lab" -> Green (secondary)
        // "Teoría" -> Blue (primary)
        // "Tutoría"/"Taller" -> Orange (tertiary)

        if (classData.name.includes("Lab") || classData.location.includes("LAB") || classData.type === 'Práctica') {
            themeColor = 'bg-secondary';
            themeText = 'text-secondary';
            themeBorder = 'border-secondary/20';
            themeBg = 'bg-secondary/10';
        } else if (classData.type === 'Tutoría' || classData.type === 'Receso') {
            themeColor = 'bg-tertiary';
            themeText = 'text-tertiary';
            themeBorder = 'border-tertiary/20';
            themeBg = 'bg-tertiary/10';
        }
    }

    // Override logic: if type says "Teoría" explicitly use primary
    if (classData.type === 'Teoría') {
        themeColor = 'bg-primary';
        themeText = 'text-primary';
        themeBorder = 'border-primary/20';
        themeBg = 'bg-primary/10';
    }

    return (
        <div className="glass-card rounded-lg p-4 relative group cursor-pointer h-full flex flex-col justify-between">
            {/* Bottom Border Accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-lg opacity-80 group-hover:opacity-100 transition-opacity ${themeColor}`}></div>

            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded border ${themeText} ${themeBg} ${themeBorder}`}>
                    {classData.type}
                </span>
                <span className="text-gray-500 hover:text-white transition-colors">
                    <MoreVertical size={16} />
                </span>
            </div>

            {/* Content */}
            <div className="mb-2">
                <h4 className="text-base font-bold text-white leading-tight font-display mb-2 line-clamp-2">
                    {classData.name}
                </h4>
            </div>

            {/* Footer */}
            <div className="mt-auto space-y-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Clock size={14} />
                    <span>{formatTime(classData.startTime.hour, classData.startTime.minute)} - {formatTime(classData.endTime.hour, classData.endTime.minute)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <MapPin size={14} />
                    <span>{classData.location}</span>
                </div>
            </div>
        </div>
    );
};
