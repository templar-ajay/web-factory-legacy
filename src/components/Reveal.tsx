"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  distance?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay,
  distance = 75,
  ...restProps
}: Props | any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: width,
        overflow: "visible",
      }}
      {...restProps}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay || 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
