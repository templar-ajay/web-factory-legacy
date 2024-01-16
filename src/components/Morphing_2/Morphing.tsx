"use client";
const actionItems = [
  {
    id: "a-177-n",
    actionTypeId: "TRANSFORM_ROTATE",
    config: {
      delay: 0,
      easing: "",
      duration: 500,
      target: {
        useEventTarget: "CHILDREN",
        selector: ".shape-3-2",
        selectorGuids: ["fa491f1d-6431-c820-a1f5-4644d7de683f"],
      },
      zValue: -180,
      xUnit: "DEG",
      yUnit: "DEG",
      zUnit: "deg",
    },
  },
  {
    id: "a-177-n-2",
    actionTypeId: "TRANSFORM_MOVE",
    config: {
      delay: 0,
      easing: "",
      duration: 500,
      target: {
        useEventTarget: "CHILDREN",
        selector: ".shape-3-2",
        selectorGuids: ["fa491f1d-6431-c820-a1f5-4644d7de683f"],
      },
      xValue: 0,
      xUnit: "vw",
      yUnit: "PX",
      zUnit: "PX",
    },
  },
  {
    id: "a-177-n-3",
    actionTypeId: "TRANSFORM_ROTATE",
    config: {
      delay: 0,
      easing: "",
      duration: 10000,
      target: {
        useEventTarget: "CHILDREN",
        selector: ".shape-3-2",
        selectorGuids: ["fa491f1d-6431-c820-a1f5-4644d7de683f"],
      },
      zValue: 0,
      xUnit: "DEG",
      yUnit: "DEG",
      zUnit: "deg",
    },
  },
  {
    id: "a-177-n-4",
    actionTypeId: "TRANSFORM_MOVE",
    config: {
      delay: 0,
      easing: "",
      duration: 10000,
      target: {
        useEventTarget: "CHILDREN",
        selector: ".shape-3-2",
        selectorGuids: ["fa491f1d-6431-c820-a1f5-4644d7de683f"],
      },
      xValue: 24,
      xUnit: "vw",
      yUnit: "PX",
      zUnit: "PX",
    },
  },
  {
    id: "a-177-n-5",
    actionTypeId: "TRANSFORM_ROTATE",
    config: {
      delay: 0,
      easing: "",
      duration: 10000,
      target: {
        useEventTarget: "CHILDREN",
        selector: ".shape-3-2",
        selectorGuids: ["fa491f1d-6431-c820-a1f5-4644d7de683f"],
      },
      zValue: 180,
      xUnit: "DEG",
      yUnit: "DEG",
      zUnit: "deg",
    },
  },
  {
    id: "a-177-n-6",
    actionTypeId: "TRANSFORM_MOVE",
    config: {
      delay: 0,
      easing: "",
      duration: 10000,
      target: {
        useEventTarget: "CHILDREN",
        selector: ".shape-3-2",
        selectorGuids: ["fa491f1d-6431-c820-a1f5-4644d7de683f"],
      },
      xValue: 0,
      xUnit: "vw",
      yUnit: "PX",
      zUnit: "PX",
    },
  },
  {
    id: "a-177-n-7",
    actionTypeId: "TRANSFORM_ROTATE",
    config: {
      delay: 0,
      easing: "",
      duration: 0,
      target: {
        useEventTarget: "CHILDREN",
        selector: ".shape-3-2",
        selectorGuids: ["fa491f1d-6431-c820-a1f5-4644d7de683f"],
      },
      zValue: -180,
      xUnit: "DEG",
      yUnit: "DEG",
      zUnit: "deg",
    },
  },
  {
    id: "a-177-n-8",
    actionTypeId: "TRANSFORM_MOVE",
    config: {
      delay: 0,
      easing: "",
      duration: 500,
      target: {
        useEventTarget: "CHILDREN",
        selector: ".shape-3-2",
        selectorGuids: ["fa491f1d-6431-c820-a1f5-4644d7de683f"],
      },
      xValue: 0,
      xUnit: "vw",
      yUnit: "PX",
      zUnit: "PX",
    },
  },
];
import clsx from "clsx";
import "./style.css";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Morphing = ({ className }: { className: string }) => {
  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);

  const elementRefs = [elementRef1, elementRef2, elementRef3];

  useEffect(() => {
    actionItems.forEach((action, index) => {
      const elementRef = elementRefs[index];

      // Check if the elementRef is defined
      if (elementRef && elementRef.current) {
        const element = elementRef.current;
        const { config } = action;

        // Helper function to apply actions
        function applyAction(actionConfig) {
          const { actionTypeId, config } = actionConfig;
          const { duration, easing } = config;

          // Use GSAP to create animations
          const tl = gsap.timeline();

          if (actionTypeId === "TRANSFORM_ROTATE") {
            const { zValue, xUnit, yUnit, zUnit } = config;
            tl.to(element, {
              duration: duration / 1000,
              rotate: zValue + zUnit,
              ease: easing,
            });
          } else if (actionTypeId === "TRANSFORM_MOVE") {
            const { xValue, xUnit, yUnit, zUnit } = config;
            tl.to(element, {
              duration: duration / 1000,
              x: xValue + xUnit,
              ease: easing,
            });
          }
        }

        // Check if config is an array before applying actions
        if (Array.isArray(config)) {
          config.forEach(applyAction);
        } else {
          // If config is not an array, apply the single action
          applyAction({ actionTypeId: action.actionTypeId, config });
        }
      }
    });
  }, [elementRefs, actionItems]);

  return (
    <>
      <div
        data-w-id="ed53199e-8a64-759a-cc73-902116254c3d"
        className={clsx("ultra-gradient-wrapper-3", className)}
      >
        <div className="main-shapes-wrapper-2">
          <div
            ref={elementRef2}
            style={{
              transform:
                "translate3d(0vw, -500px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(13.9171deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="shape-3-3"
          />
          <div className="shape-2-3" />
        </div>
        <div className="blending-group-wrapper-2">
          <div
            ref={elementRef3}
            style={{
              transform:
                "translate3d(290.295px, 60.962px, -4.64472px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1.74177deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="shape-4-3"
          />
          <div
            ref={elementRef1}
            style={{
              transform:
                "translate3d(149.792px, 140.503px, 121.924px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="shape-5-3"
          />
          <div className="shape-6-3" />
        </div>
      </div>
    </>
  );
};

export default Morphing;
