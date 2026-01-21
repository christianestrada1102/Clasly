import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScheduleGrid } from './components/ScheduleGrid';
import { MobileDayView } from './components/MobileDayView';
import { NotesView } from './components/NotesView';
import { useCurrentClass } from './hooks/useCurrentClass';
import { SCHEDULE_DATA } from './utils/schedule';
import { CurrentClassCard } from './components/CurrentClassCard';

const App: React.FC = () => {
  const currentClassStatus = useCurrentClass();
  const [currentView, setCurrentView] = useState<'schedule' | 'notes'>('schedule');

  return (
    <div className="font-display bg-background-dark text-white min-h-screen relative overflow-x-hidden flex flex-col">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-campus bg-cover bg-center bg-no-repeat blur-md scale-105 opacity-60"></div>
        <div className="absolute inset-0 bg-[#111318]/70"></div> {/* Dark overlay */}
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex h-full flex-col flex-1">
        <Header currentView={currentView} onNavigate={setCurrentView} />

        <main className="flex-1 flex flex-col p-4 md:p-8 lg:px-12 lg:py-8 max-w-[90rem] mx-auto w-full">

          {/* Status Banner */}
          <CurrentClassCard status={currentClassStatus} />

          {/* Glass Container */}
          <div className="glass-panel w-full flex-col flex-1 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up flex">

            {/* Dashboard Header */}
            <div className="flex items-end justify-between p-6 md:p-8 pb-4 border-b border-white/5">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold text-white tracking-tight font-display">
                  {currentView === 'schedule' ? 'Horario de Clases' : 'Notas y Tareas'}
                </h2>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto p-0 md:p-6 scrollbar-hide h-full min-h-[500px]">

              {currentView === 'schedule' ? (
                <>
                  {/* Mobile View */}
                  <div className="md:hidden px-6 pt-4">
                    <MobileDayView
                      schedule={SCHEDULE_DATA}
                      currentClassId={currentClassStatus.class?.id}
                    />
                  </div>

                  {/* Desktop Grid */}
                  <div className="hidden md:block h-full">
                    <ScheduleGrid
                      schedule={SCHEDULE_DATA}
                      currentClassId={currentClassStatus.class?.id}
                    />
                  </div>
                </>
              ) : (
                <div className="p-4 md:p-0 h-full">
                  <NotesView />
                </div>
              )}

            </div>

            {/* Footer Legend */}
            <div className="px-6 md:px-8 py-4 border-t border-white/5 bg-black/10 flex flex-wrap items-center gap-4 md:gap-6 text-sm">
              <span className="text-gray-400 font-medium">Categorías:</span>
              <div className="flex items-center gap-2">
                <span className="block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(19,91,236,0.5)]"></span>
                <span className="text-gray-300">Teoría</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="block w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                <span className="text-gray-300">Laboratorio</span>
              </div>

              {/* Download Button Removed */}
              <div className="flex-1 text-right">
                {/* Placeholder for alignment if needed, or just let it be empty */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
