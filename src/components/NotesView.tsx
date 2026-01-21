import React, { useState, useEffect } from 'react';
import { Plus, Trash2, CheckSquare, Square, Save, X } from 'lucide-react';

interface Note {
    id: string;
    content: string;
    category: string;
    date: string;
    timestamp: number;
}

interface Task {
    id: string;
    content: string;
    completed: boolean;
    timestamp: number;
}

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export const NotesView: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>(() => {
        const saved = localStorage.getItem('gravity_notes');
        if (!saved) return [];
        try {
            const parsed = JSON.parse(saved);
            return parsed.filter((n: Note) => Date.now() - (n.timestamp || 0) < WEEK_MS);
        } catch {
            return [];
        }
    });

    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem('gravity_tasks');
        if (!saved) return [];
        try {
            const parsed = JSON.parse(saved);
            return parsed.filter((t: Task) => Date.now() - (t.timestamp || 0) < WEEK_MS);
        } catch {
            return [];
        }
    });

    const [newNote, setNewNote] = useState('');
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('gravity_notes', JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        localStorage.setItem('gravity_tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addNote = () => {
        if (!newNote.trim()) return;
        const note: Note = {
            id: Date.now().toString(),
            content: newNote,
            category: 'General',
            date: new Date().toLocaleDateString(),
            timestamp: Date.now()
        };
        setNotes([note, ...notes]);
        setNewNote('');
    };

    const addTask = () => {
        if (!newTask.trim()) return;
        const task: Task = {
            id: Date.now().toString(),
            content: newTask,
            completed: false,
            timestamp: Date.now()
        };
        setTasks([task, ...tasks]);
        setNewTask('');
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteNote = (id: string) => {
        setNotes(notes.filter(n => n.id !== id));
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Notes Section */}
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white font-display">Notas de Clase</h3>

                {/* Input */}
                <div className="glass-card rounded-xl p-4 flex flex-col gap-2">
                    <textarea
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Escribe una nota nueva..."
                        className="bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 resize-none min-h-[80px]"
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={addNote}
                            disabled={!newNote.trim()}
                            className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 hover:bg-primary/30 text-primary text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
                        >
                            <Save size={16} />
                            Guardar Nota
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="flex flex-col gap-3 overflow-auto pr-2 scrollbar-hide max-h-[500px]">
                    {notes.map(note => (
                        <div key={note.id} className="glass-card rounded-xl p-4 group relative">
                            <button
                                onClick={() => deleteNote(note.id)}
                                className="absolute top-3 right-3 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>
                            <p className="text-gray-300 text-sm whitespace-pre-wrap mb-2">{note.content}</p>
                            <span className="text-xs text-gray-500">{note.date}</span>
                        </div>
                    ))}
                    {notes.length === 0 && (
                        <div className="text-center text-gray-500 py-8">No hay notas guardadas</div>
                    )}
                </div>
            </div>

            {/* Tasks Section */}
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white font-display">Tareas y Pendientes</h3>

                {/* Input */}
                <div className="glass-card rounded-xl p-2 pl-4 flex items-center gap-2">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTask()}
                        placeholder="Agregar una tarea..."
                        className="bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 flex-1 h-10"
                    />
                    <button
                        onClick={addTask}
                        disabled={!newTask.trim()}
                        className="w-10 h-10 flex items-center justify-center text-primary hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <Plus size={20} />
                    </button>
                </div>

                {/* List */}
                <div className="flex flex-col gap-2 overflow-auto pr-2 scrollbar-hide max-h-[500px]">
                    {tasks.map(task => (
                        <div
                            key={task.id}
                            className={`glass-card rounded-xl p-4 flex items-center gap-3 group transition-all duration-300 ${task.completed ? 'opacity-50' : ''}`}
                        >
                            <button
                                onClick={() => toggleTask(task.id)}
                                className={`transition-colors ${task.completed ? 'text-secondary' : 'text-gray-500 hover:text-white'}`}
                            >
                                {task.completed ? <CheckSquare size={20} /> : <Square size={20} />}
                            </button>
                            <span className={`flex-1 text-sm ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                                {task.content}
                            </span>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                    {tasks.length === 0 && (
                        <div className="text-center text-gray-500 py-8">¡Estás al día! No hay tareas pendientes.</div>
                    )}
                </div>
            </div>
        </div>
    );
};
