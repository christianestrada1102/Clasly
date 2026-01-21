import type { Variants } from 'framer-motion';

// 1. ENTRADA INICIAL DEL GRID
export const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

export const gridItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.9,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 14,
            mass: 1
        }
    }
};

// 2. CLASE ACTUAL - PULSE CONTINUO
export const currentClassPulse: Variants = {
    animate: {
        boxShadow: [
            "0 0 0px rgba(139, 92, 246, 0)",
            "0 0 25px rgba(139, 92, 246, 0.3)",
            "0 0 0px rgba(139, 92, 246, 0)"
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

// 3. HOVER EN CARDS
export const cardHoverVariants: Variants = {
    rest: {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: {
        scale: 1.03,
        y: -6,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 15
        }
    }
};

// 4. STATUS CARD (Modal/Card de clase actual)
export const statusCardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -30,
        scale: 0.9,
        filter: "blur(8px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring" as const,
            stiffness: 250,
            damping: 20
        }
    },
    exit: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        filter: "blur(5px)",
        transition: {
            duration: 0.3
        }
    }
};

// 5. PROGRESS BAR ANIMADA
export const progressBarVariants = {
    initial: {
        pathLength: 0,
        opacity: 0
    },
    animate: (progress: number) => ({
        width: `${progress}%`,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "circOut" as const
        }
    })
};

// 6. ANIMACIONES DE FONDO (Blobs)
export const floatingBlobVariants: Variants = {
    animate: {
        y: [0, -40, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
        rotate: [0, 10, -5, 0],
        transition: {
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
        }
    }
};

// 7. FADE IN para texto
export const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
};
