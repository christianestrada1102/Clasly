export const getCurrentDayOfWeek = (date: Date): number => {
    const day = date.getDay();
    return day === 0 ? 0 : day; // 0=Domingo, 1=Lunes, ..., 5=Viernes, 6=Sábado
};

export const getCurrentTimeInMinutes = (date: Date): number => {
    return date.getHours() * 60 + date.getMinutes();
};

export const isTimeBetween = (
    current: number,
    start: number,
    end: number
): boolean => {
    return current >= start && current < end;
};

export const getMinutesDifference = (
    from: number,
    to: number
): number => {
    return to - from;
};

export const formatTime = (hour: number, minute: number): string => {
    const h = hour.toString().padStart(2, '0');
    const m = minute.toString().padStart(2, '0');
    return `${h}:${m}`;
};

export const formatMinutesToReadable = (minutes: number): string => {
    if (minutes < 60) {
        return `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
};
