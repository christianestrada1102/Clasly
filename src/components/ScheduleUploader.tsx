import React, { useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Loader2, AlertCircle, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { parseScheduleImage } from '../utils/parseScheduleImage';
import type { ScheduleData } from '../types/schedule.types';

interface ScheduleUploaderProps {
    onClose: () => void;
    onScheduleParsed: (data: ScheduleData) => void;
}

type State = 'idle' | 'loading' | 'success' | 'error';

export const ScheduleUploader: React.FC<ScheduleUploaderProps> = ({ onClose, onScheduleParsed }) => {
    const [state, setState] = useState<State>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const processFile = useCallback(async (file: File) => {
        if (!file.type.startsWith('image/')) {
            setErrorMsg('Solo se aceptan imágenes (PNG, JPG, WEBP).');
            setState('error');
            return;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            const dataUrl = e.target?.result as string;
            setPreview(dataUrl);

            const base64 = dataUrl.split(',')[1];
            const mediaType = file.type as 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif';

            setState('loading');
            try {
                const data = await parseScheduleImage(base64, mediaType);
                setState('success');
                setTimeout(() => {
                    onScheduleParsed(data);
                    onClose();
                }, 800);
            } catch (err) {
                setErrorMsg(err instanceof Error ? err.message : 'Error al procesar la imagen');
                setState('error');
            }
        };
        reader.readAsDataURL(file);
    }, [onScheduleParsed, onClose]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) processFile(file);
    }, [processFile]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) processFile(file);
    }, [processFile]);

    const reset = () => {
        setState('idle');
        setPreview(null);
        setErrorMsg('');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="glass-panel rounded-2xl p-8 w-full max-w-md relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white font-display">Sube tu horario</h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Sube la foto de tu horario y lo detectamos automáticamente
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    {/* Idle / drag zone */}
                    {(state === 'idle' || state === 'error') && !preview && (
                        <motion.div
                            key="drop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div
                                onDrop={handleDrop}
                                onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                                onDragLeave={() => setIsDragging(false)}
                                onClick={() => inputRef.current?.click()}
                                className={`
                                    border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all
                                    ${isDragging
                                        ? 'border-primary bg-primary/10'
                                        : 'border-white/15 hover:border-white/30 hover:bg-white/5'
                                    }
                                `}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Upload size={22} className="text-primary" />
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-medium text-sm">Arrastra aquí o haz clic</p>
                                    <p className="text-gray-500 text-xs mt-1">PNG, JPG, WEBP</p>
                                </div>
                            </div>
                            <input
                                ref={inputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleChange}
                            />

                            {state === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 flex items-start gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2"
                                >
                                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                                    <p className="text-xs">{errorMsg}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {/* Preview + loading/error */}
                    {preview && state !== 'success' && (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4"
                        >
                            <div className="relative rounded-xl overflow-hidden border border-white/10">
                                <img src={preview} alt="Horario" className="w-full object-contain max-h-56" />
                                {state === 'loading' && (
                                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3">
                                        <Loader2 size={28} className="text-primary animate-spin" />
                                        <p className="text-white text-sm font-medium">Analizando horario…</p>
                                    </div>
                                )}
                            </div>

                            {state === 'error' && (
                                <>
                                    <div className="flex items-start gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                                        <AlertCircle size={16} className="mt-0.5 shrink-0" />
                                        <p className="text-xs">{errorMsg}</p>
                                    </div>
                                    <button
                                        onClick={reset}
                                        className="w-full text-sm text-primary hover:underline"
                                    >
                                        Intentar con otra imagen
                                    </button>
                                </>
                            )}
                        </motion.div>
                    )}

                    {/* Success */}
                    {state === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-3 py-6"
                        >
                            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                                <CheckCircle2 size={30} className="text-secondary" />
                            </div>
                            <p className="text-white font-semibold">¡Horario detectado!</p>
                            <p className="text-gray-400 text-sm">Cargando tu horario…</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tip */}
                {state === 'idle' && (
                    <p className="mt-4 text-center text-gray-600 text-xs flex items-center justify-center gap-1">
                        <ImageIcon size={12} />
                        Funciona con la imagen oficial de UTCH u otros formatos de tabla
                    </p>
                )}
            </motion.div>
        </motion.div>
    );
};
