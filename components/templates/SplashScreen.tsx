import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

interface IAnimateVariables {
  top: Variants;
  bottom: Variants;
  wrapper: Variants;
  element1: Variants;
  element2: Variants;
  element3: Variants;
  element4: Variants;
  element5: Variants;
  element6: Variants;
  element7: Variants;
}

const animateVariables: IAnimateVariables = {
  top: {
    initial: {
      height: "50dvh",
    },
    animate: {
      height: ["50dvh", "0dvh"],
      transition: {
        duration: 0.4,
        delay: 4.65,
        ease: "easeInOut",
        times: [0.1, 1],
      },
    },
  },
  bottom: {
    initial: {
      height: "50dvh",
    },
    animate: {
      height: ["50dvh", "0dvh"],
      transition: {
        duration: 0.4,
        delay: 4.65,
        ease: "easeInOut",
        times: [0.1, 1],
      },
    },
  },
  wrapper: {
    initial: {
      transform: "scaleY(0)",
    },
    animate: {
      transform: [
        "scaleY(0)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(1)",
        "scaleY(0)",
      ],
      transition: {
        delay: 1,
        duration: 3.5,
        ease: "linear",
        times: [
          0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        // repeat: Infinity,
      },
    },
  },
  element1: {
    initial: {
      marginTop: "0px",
      opacity: 1,
    },
    animate: {
      marginTop: [
        "0px",
        "0px",
        "-60px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
      ],
      opacity: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 0.5, 0,
      ],
      transition: {
        delay: 1,
        duration: 2,
        ease: "linear",
        times: [
          0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        // repeat: Infinity,
      },
    },
  },
  element2: {
    initial: {
      marginTop: "0px",
    },
    animate: {
      marginTop: [
        "0px",
        "0px",
        "0px",
        "-60px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
      ],
      opacity: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 0.5, 0,
      ],
      transition: {
        delay: 1,
        duration: 2,
        ease: "linear",
        times: [
          0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        // repeat: Infinity,
      },
    },
  },
  element3: {
    initial: {
      marginTop: "0px",
    },
    animate: {
      marginTop: [
        "0px",
        "0px",
        "0px",
        "0px",
        "-60px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
      ],
      opacity: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 0.5, 0,
      ],
      transition: {
        delay: 1,
        duration: 2,
        ease: "linear",
        times: [
          0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        // repeat: Infinity,
      },
    },
  },
  element4: {
    initial: {
      marginTop: "0px",
    },
    animate: {
      marginTop: [
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "-60px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
      ],
      opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      transition: {
        delay: 1,
        duration: 2,
        ease: "linear",
        times: [
          0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        // repeat: Infinity,
      },
    },
  },
  element5: {
    initial: {
      marginTop: "0px",
    },
    animate: {
      marginTop: [
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "-60px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
      ],
      opacity: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 0.5, 0,
      ],
      transition: {
        delay: 1,
        duration: 2,
        ease: "linear",
        times: [
          0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        // repeat: Infinity,
      },
    },
  },
  element6: {
    initial: {
      marginTop: "0px",
    },
    animate: {
      marginTop: [
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "-60px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
      ],
      opacity: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 0.5, 0,
      ],
      transition: {
        delay: 1,
        duration: 2,
        ease: "linear",
        times: [
          0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        // repeat: Infinity,
      },
    },
  },
  element7: {
    initial: {
      marginTop: "0px",
    },
    animate: {
      marginTop: [
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "-60px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
        "0px",
      ],
      opacity: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 0.5, 0,
      ],
      transition: {
        delay: 1,
        duration: 2,
        ease: "linear",
        times: [
          0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        // repeat: Infinity,
      },
    },
  },
};

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      const elementSplashScreen =
        window.document.getElementById("splash-screen");
      elementSplashScreen?.remove();
    }, 5200);
  }, []);

  return (
    <>
      <div
        id="splash-screen"
        className="font-bold w-screen h-dvh fixed top-0 left-0 z-20 flex flex-col items-center justify-between bg-transparent"
      >
        <motion.div
          className="w-screen h-[50dvh] bg-black"
          variants={animateVariables.top}
          initial="initial"
          animate="animate"
        ></motion.div>
        <div className="absolute w-screen h-dvh flex flex-row items-center justify-center gap-0 mx-auto text-[220px] font-plaster text-white">
          <motion.div
            className="flex flex-row gap-[-20px] items-center justify-center overflow-hidden h-[198px] [transform-origin:center]"
            variants={animateVariables.wrapper}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="h-min m-[-6px]"
              variants={animateVariables.element1}
              initial="initial"
              animate="animate"
            >
              H
            </motion.h1>
            <motion.h1
              className="h-min m-[-6px]"
              variants={animateVariables.element2}
              initial="initial"
              animate="animate"
            >
              S
            </motion.h1>
            <motion.h1
              className="h-min m-[-6px]"
              variants={animateVariables.element3}
              initial="initial"
              animate="animate"
            >
              I
            </motion.h1>
            <motion.h1
              className="h-min m-[-6px]"
              variants={animateVariables.element4}
              initial="initial"
              animate="animate"
            >
              R
            </motion.h1>
            <motion.h1
              className="h-min m-[-6px]"
              variants={animateVariables.element5}
              initial="initial"
              animate="animate"
            >
              I
            </motion.h1>
            <motion.h1
              className="h-min m-[-6px]"
              variants={animateVariables.element6}
              initial="initial"
              animate="animate"
            >
              S
            </motion.h1>
            <motion.h1
              className="h-min m-[-6px]"
              variants={animateVariables.element7}
              initial="initial"
              animate="animate"
            >
              H
            </motion.h1>
          </motion.div>
        </div>
        <motion.div
          className="w-screen h-[50dvh] bg-black"
          variants={animateVariables.bottom}
          initial="initial"
          animate="animate"
        ></motion.div>
      </div>
    </>
  );
};

export default SplashScreen;
