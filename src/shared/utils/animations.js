export const menuSlide = {
  initial: { x: '100%' },

  enter: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    x: '100%',
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const slide = {
  initial: { x: 40, opacity: 0 },

  enter: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.06,
    },
  }),

  exit: {
    x: 40,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const scale = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  closed: {
    scale: 0.95,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};