export const transition = {
  duration: 0.8,
  ease: [0.25, 1, 0.5, 1] as const,
}

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}
