import React from 'react';
import type { CurrentClassStatus } from '../types/schedule.types';
import { formatTime } from '../utils/timeHelpers';
import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CurrentClassCardProps {
    status: CurrentClassStatus;
}

export const CurrentClassCard: React.FC<CurrentClassCardProps> = ({ status }) => {
    const { state, class: currentClass, minutesLeft, progress, nextClass, minutesUntil } = status;

    if (state === 'none' && !nextClass) {
        return (
            <div className="glass-card rounded-xl p-6 mb-8 border-l-4 border-gray-500">
                <h2 className="text-xl font-bold text-white mb-1 font-display">¡Día libre!</h2>
                <p className="text-gray-400 text-sm">No tienes más clases programadas para hoy.</p>
            </div>
        );
    }

    // Active Class State
    if (state === 'current' && currentClass) {
        return (
            <div className="glass-card rounded-xl p-6 mb-8 border-l-4 border-primary relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/20 animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                En Curso
                            </span>
                            <span className="text-gray-400 text-xs font-mono">{formatTime(currentClass.startTime.hour, currentClass.startTime.minute)} - {formatTime(currentClass.endTime.hour, currentClass.endTime.minute)}</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display tracking-tight">{currentClass.name}</h2>

                        <div className="flex items-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-1.5">
                                <MapPin size={16} className="text-primary" />
                                <span>{currentClass.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Time Status */}
                    <div className="w-full md:w-64 flex flex-col gap-2">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Transcurrido</span>
                            <span className="text-white font-medium">
                                {(minutesLeft ?? 0) > 60
                                    ? `${Math.floor((minutesLeft ?? 0) / 60)}h ${(minutesLeft ?? 0) % 60}m restantes`
                                    : `${minutesLeft ?? 0} min restantes`
                                }
                            </span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                className="h-full shadow-[0_0_10px_rgba(19,91,236,0.5)]"
                                initial={{ width: 0, backgroundColor: "#135bec" }}
                                animate={{
                                    width: `${progress}%`,
                                    backgroundColor: ["#135bec", "#10b981"]
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    backgroundColor: { duration: 1, times: [0, 1], ease: "linear", delay: 0 } // Just animate to current progress color? slightly complex with framer motion simplistic array.
                                    // Better approach: Calculate color or just let it interpolate based on progress?
                                    // Since 'progress' is a state that updates, simply binding backgroundColor to a value derived from progress is better if we want strict "progress = color".
                                    // But Framer Motion `animate` with values will transition. 
                                    // If we simply set `backgroundColor` to a computed hex, it will animate to it.
                                }}
                                style={{
                                    // Let's use a simpler approach: inline style with CSS var or just a motion value? 
                                    // We can just rely on the 'animate' prop if we pass the target color.
                                    // Wait, if progress is 50%, we want the color to be 50% mix. 
                                    // We can't easily do that with `animate={{ backgroundColor: ... }}` unless we compute the mix manually.
                                    // Let's compute the mix manually.
                                    backgroundColor: `color-mix(in srgb, #135bec ${100 - (progress || 0)}%, #10b981 ${progress || 0}%)`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Break or Upcoming State
    const targetClass = nextClass || currentClass;
    const isBreak = state === 'break';

    return (
        <div className={`glass-card rounded-xl p-6 mb-8 border-l-4 ${isBreak ? 'border-tertiary' : 'border-gray-500'} relative overflow-hidden`}>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-center">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        {isBreak ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary/20 text-tertiary border border-tertiary/20">
                                <Clock size={12} />
                                Receso
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/50 text-gray-300 border border-white/10">
                                <Calendar size={12} />
                                Próxima Clase
                            </span>
                        )}
                    </div>
                    <h2 className="text-xl font-bold text-white mb-1 font-display">
                        {isBreak ? `Siguiente: ${targetClass?.name}` : targetClass?.name}
                    </h2>
                    {targetClass && (
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            <span className="flex items-center gap-1"><Clock size={14} /> {formatTime(targetClass.startTime.hour, targetClass.startTime.minute)}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span className="flex items-center gap-1"><MapPin size={14} /> {targetClass.location}</span>
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-4 bg-black/20 px-4 py-3 rounded-lg border border-white/5">
                    <div className="text-right">
                        <p className="text-xs text-gray-400">Comienza en</p>
                        <p className="text-xl font-bold text-white font-mono">
                            {minutesUntil !== undefined && minutesUntil > 60
                                ? <>{Math.floor(minutesUntil / 60)}<span className="text-sm font-normal text-gray-500">h</span> {minutesUntil % 60}<span className="text-sm font-normal text-gray-500">m</span></>
                                : <>{minutesUntil} <span className="text-sm font-normal text-gray-500">min</span></>
                            }
                        </p>
                    </div>
                    <div className="h-8 w-px bg-white/10"></div>
                    <ArrowRight className="text-gray-500" />
                </div>
            </div>
        </div>
    );
};
