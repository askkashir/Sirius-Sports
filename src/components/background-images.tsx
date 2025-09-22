'use client';

import {motion, useScroll, useTransform} from 'framer-motion';
import {FC, ReactNode} from 'react';

const Shape: FC<{
  children: ReactNode;
  className?: string;
  scrollYProgress: any;
  range: [number, number];
}> = ({children, className, scrollYProgress, range}) => {
  const y = useTransform(scrollYProgress, [0, 1], range);
  return (
    <motion.div style={{y}} className={className}>
      {children}
    </motion.div>
  );
};

export function BackgroundImages() {
  const {scrollYProgress} = useScroll();
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <Shape
        className="absolute top-1/4 left-1/4"
        scrollYProgress={scrollYProgress}
        range={[-200, 200]}
      >
        <div className="h-32 w-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
      </Shape>
      <Shape
        className="absolute hidden md:block top-1/2 right-1/4"
        scrollYProgress={scrollYProgress}
        range={[200, -200]}
      >
        <div className="h-48 w-48 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
      </Shape>
      <Shape
        className="absolute bottom-1/4 left-1/3"
        scrollYProgress={scrollYProgress}
        range={[-100, 100]}
      >
        <div className="h-24 w-48 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </Shape>
    </div>
  );
}
