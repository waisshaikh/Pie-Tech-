export const menuSlide = {
  initial: { x: '100%' },

  enter: {
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1], // smooth & fast
    },
  },

  exit: {
    x: '100%',
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const slide = {
  initial: { x: 30, opacity: 0 },

  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.05,
    },
  }),
};

export const scale = {
  open: {
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },

  closed: {
    scale: 0,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
};