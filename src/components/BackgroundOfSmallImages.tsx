"use client";

import SmallBackgroundImage from "@/slices/SmallBackgroundImage";
import { motion, useInView, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BackgroundOfSmallImages = ({ data }: any) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="w-full h-full">
      {data.slices.map((slice: any, i: number) => (
        <motion.div key={"i_" + i}>
          <SmallBackgroundImage
            context={null}
            index={i}
            slices={data.slices}
            key={"small-image-" + i}
            slice={slice}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundOfSmallImages;
