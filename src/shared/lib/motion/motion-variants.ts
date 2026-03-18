import { type Variants } from 'framer-motion';

export const viewport = { once: true, margin: '0px 0px -80px 0px' } as const;

/** Мягкий overshooting-ease */
export const ease = [0.16, 1, 0.3, 1] as const;

/** Fade + подъём снизу (основная анимация) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

/** Fade + сдвиг слева */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease } },
};

/** Fade + сдвиг справа */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease } },
};

/** Только fade-in */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.95, ease } },
};

/** Scale + fade */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease } },
};

export const staggerContainer = (stagger = 0.1, delayStart = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delayStart },
  },
});
