import React from 'react';
import claslyLogo from '../assets/clasly.png';

interface HeaderProps {
    currentView: 'schedule' | 'notes';
    onNavigate: (view: 'schedule' | 'notes') => void;
    group: string;
    semester: string;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, group, semester }) => {
    return (
        <header className="flex items-center justify-between px-4 md:px-8 py-5 border-b border-white/5 backdrop-blur-sm bg-black/20 z-20 sticky top-0">
            <div className="flex items-center gap-4">
                <img src={claslyLogo} alt="Clasly Logo" className="h-14 object-contain" />
            </div>

            <nav className="flex items-center gap-2 bg-black/20 p-1 rounded-full border border-white/5 backdrop-blur-md overflow-x-auto max-w-[200px] md:max-w-none no-scrollbar">
                <button
                    onClick={() => onNavigate('schedule')}
                    className={`text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${currentView === 'schedule' ? 'bg-primary/20 text-white shadow-[0_0_10px_rgba(19,91,236,0.3)]' : 'text-gray-400 hover:text-white'}`}
                >
                    Horario
                </button>
                <button
                    onClick={() => onNavigate('notes')}
                    className={`text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${currentView === 'notes' ? 'bg-primary/20 text-white shadow-[0_0_10px_rgba(19,91,236,0.3)]' : 'text-gray-400 hover:text-white'}`}
                >
                    Notas
                </button>
            </nav>

            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-300/80 font-mono tracking-wider">
                <span>{group} {semester}</span>
            </div>
        </header>
    );
};
