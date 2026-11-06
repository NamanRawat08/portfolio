import { motion, useReducedMotion } from 'framer-motion';

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'down' | 'none'
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const yOffset = direction === 'up' ? 24 : direction === 'down' ? -24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
