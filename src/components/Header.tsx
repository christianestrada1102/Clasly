import React from 'react';

interface HeaderProps {
    currentView: 'schedule' | 'notes';
    onNavigate: (view: 'schedule' | 'notes') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
    return (
        <header className="flex items-center justify-between px-4 md:px-8 py-5 border-b border-white/5 backdrop-blur-sm bg-black/20 z-20 sticky top-0">
            <div className="flex items-center gap-4">
                {/* Removed School Icon and "Portal Universitario" text as requested */}
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-display tracking-tight">
                    Clasly
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-2 bg-black/20 p-1 rounded-full border border-white/5 backdrop-blur-md">
                <button
                    onClick={() => onNavigate('schedule')}
                    className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${currentView === 'schedule' ? 'bg-primary/20 text-white shadow-[0_0_10px_rgba(19,91,236,0.3)]' : 'text-gray-400 hover:text-white'}`}
                >
                    Horario
                </button>
                <button
                    onClick={() => onNavigate('notes')}
                    className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${currentView === 'notes' ? 'bg-primary/20 text-white shadow-[0_0_10px_rgba(19,91,236,0.3)]' : 'text-gray-400 hover:text-white'}`}
                >
                    Notas y Tareas
                </button>
            </nav>

            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-300/80 font-mono tracking-wider">
                <span>DS41M 2026</span>
            </div>
        </header>
    );
};
