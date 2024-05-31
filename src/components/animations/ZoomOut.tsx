import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ZoomOut = ({ children }: { children: React.ReactNode }) => {
  
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 2.0,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="square"
    >
      {children}
    </motion.div>
  );
};

export default ZoomOut;
