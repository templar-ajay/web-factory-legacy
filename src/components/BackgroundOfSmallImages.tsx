"use client";

import SmallBackgroundImage from "@/slices/SmallBackgroundImage";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackgroundOfSmallImages = ({ data }: any) => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      console.log("imageRef", triggerRef.current);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // markers: true,
        },
      });
      gsap.set(".bg-img", {
        filter: "blur(5px)",
      });

      tl.fromTo(
        ".bg-img",
        { y: "400px", filter: "blur(5px)" },
        {
          y: "0px",
          filter: "blur(0px)",
          ease: "power4.in",
        }
      );
    }, containerRef);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-full">
      {data.slices.map((slice: any, i: number) => (
        <div key={"i_" + i} className="w-fit h-fit">
          <SmallBackgroundImage
            context={null}
            index={i}
            slices={data.slices}
            key={"small-image-" + i}
            slice={slice}
          />
        </div>
      ))}
      <div style={{ display: "absolute", top: "50%" }} ref={triggerRef}></div>
    </section>
  );
};

export default BackgroundOfSmallImages;
