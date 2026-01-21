import React from 'react';
import type { Class } from '../types/schedule.types';
import { formatTime } from '../utils/timeHelpers';
import { Clock, MapPin, MoreVertical } from 'lucide-react';

interface ClassCardProps {
    class: Class;
    isCurrentClass: boolean;
    isPast: boolean;
}

export const ClassCard: React.FC<ClassCardProps> = ({ class: classData, isPast, isCurrentClass }) => {
    // Determine color theme based on type 'Teoría' | 'Laboratorio' | 'Taller'
    // Using the colors from tailwind config: primary (blue), secondary (green), tertiary (orange)
    let themeColor = 'bg-primary';
    let themeText = 'text-primary';
    let themeBorder = 'border-primary/20';
    let themeBg = 'bg-primary/10'; // for badge

    // Priority 1: Past Class -> Green (secondary)
    if (isPast) {
        themeColor = 'bg-secondary';
        themeText = 'text-secondary';
        themeBorder = 'border-secondary/20';
        themeBg = 'bg-secondary/10';
    }
    // Priority 2: Lab Class (LS11 excluding "Aplicaciones Web") -> Purple (lab-purple)
    else if (classData.location === 'LS11' && !classData.name.includes('Aplicaciones Web')) {
        themeColor = 'bg-lab-purple';
        themeText = 'text-lab-purple';
        themeBorder = 'border-lab-purple/20';
        themeBg = 'bg-lab-purple/10';
    }
    // Priority 3: Default/Theory/Base -> Blue (primary) - Already set as initial values

    // Legacy/Fallback overrides (kept but lower priority than isPast)
    else if (!isPast) {
        if (classData.type === 'Práctica' || classData.type.includes('Lab') || classData.name.includes("Lab") || (classData.location.includes("LAB") && classData.location !== 'LS11')) {
            // Keep green for other labs if not LS11 specific logic? 
            // User asked "todas las clases sean azules... conforme pasan se pintan verde".
            // "Laboratorio son todas las que dicen LS11... de otro color".
            // So general "Lab" logic might need to be blue if not LS11?
            // "hagamos que toas las clases sean azules como estan ahora... pero conforme van pasando... verde"
            // So default is BLUE.
            // Execpt LS11 (not web apps) -> Purple.

            // So we strictly follow: 
            // 1. Past -> Green
            // 2. LS11 (!WebApps) -> Purple
            // 3. Else -> Blue

            // I will reset the legacy overrides to ensure everything else defaults to blue unless past.

            if (classData.type === 'Tutoría' || classData.type === 'Receso') {
                themeColor = 'bg-tertiary';
                themeText = 'text-tertiary';
                themeBorder = 'border-tertiary/20';
                themeBg = 'bg-tertiary/10';
            }
        }
    }

    return (
        <div className="glass-card rounded-lg p-4 relative group cursor-pointer h-full flex flex-col justify-between">
            {/* Bottom Border Accent or Full Progress Background */}
            {classData.progress !== undefined && isCurrentClass ? (
                <div
                    className="absolute inset-0 rounded-lg opacity-20 transition-all duration-1000 ease-linear pointer-events-none"
                    style={{
                        background: `linear-gradient(to right, #135bec ${classData.progress}%, transparent ${classData.progress}%)`
                        // A simple gradient might be hard to make "mix" colors. 
                        // User wants "barra que va cambiando de color". 
                        // In CurrentClassCard we did a mix. 
                        // Maybe we just do the bottom border as progress? 
                        // User said "la clase en si osea el card como una barra".
                        // Let's try filling the background with a gradient that moves? 
                        // Or just the same color mix logic for the border/background?

                        // Let's use the requested "filling" effect. 
                        // "se vaya pintando de verde... la clase en si osea el card"
                        // This sounds like a background fill from left to right.
                        // And the color of that fill changes from blue to green.
                    }}
                >
                    <div
                        className="absolute inset-0 transition-colors duration-1000"
                        style={{
                            width: `${classData.progress}%`,
                            backgroundColor: `color-mix(in srgb, #135bec ${100 - (classData.progress || 0)}%, #10b981 ${classData.progress || 0}%)`,
                            opacity: 0.2 // Make it subtle so text is readable
                        }}
                    ></div>
                </div>
            ) : (
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-lg opacity-80 group-hover:opacity-100 transition-opacity ${themeColor}`}></div>
            )}

            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded border ${themeText} ${themeBg} ${themeBorder}`}>
                    {isPast ? 'Completado' : classData.type}
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
