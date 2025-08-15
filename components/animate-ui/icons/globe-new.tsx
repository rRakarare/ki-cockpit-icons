"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from "@/components/animate-ui/icons/icon";

type GlobeNewProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    // Outer circle - subtle scale animation
    path1: {},
    // Horizontal line - slide in from sides
    path2: {},
    // Left meridian - multiple path morphs: curved → straight → wavy
    path3: {
      initial: {
        d: "M12 22C6.47714 22 2 17.5228 2 12C2 6.47715 6.47714 2 12 2",
        opacity: 0,
      },
      animate: {
        d: "M12 22C12 22 7.5 17.5228 7.5 12C7.5 6.47715 12 2 12 2",
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      },
    },
    path4: {
      initial: {
        d: "M12 22C12 22 7.5 17.5228 7.5 12C7.5 6.47715 12 2 12 2",
      },
      animate: {
        d: "M12 22C12 22 16.5 17.5228 16.5 12C16.5 6.47715 12 2 12 2",
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      },
    },
    path5: {
      initial: {
        d: "M12 22C12 22 16.5 17.5228 16.5 12C16.5 6.47715 12 2 12 2",
        opacity: 1,
      },
      animate: {
        d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2",
        opacity: 0,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      },
    },
    // Right meridian - multiple path morphs: curved → straight → wavy (opposite)
  } satisfies Record<string, Variants>,
  "default-loop": {
    // Outer circle - breathing effect
    path1: {
      initial: {
        scale: 1,
      },
      animate: {
        scale: [1, 1.05, 1],
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      },
    },
    // Horizontal line - expand and contract
    path2: {
      initial: {
        scaleX: 1,
      },
      animate: {
        scaleX: [1, 0, 1],
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      },
    },
    // Left meridian - complex multi-stage path morph loop
    path3: {
      initial: {
        d: "M12 2C12 2 8 7 8 12C8 17.2061 12 22 12 22",
      },
      animate: {
        d: [
          "M12 2C12 2 8 7 8 12C8 17.2061 12 22 12 22", // Original curved
          "M12 2L8 12L12 22", // Straight angular
          "M12 2C12 2 6 8 6 12C6 16 12 22 12 22", // Wide curve
          "M12 2C12 2 10 6 10 12C10 18 12 22 12 22", // Narrow curve
          "M12 2C12 2 8 7 8 12C8 17.2061 12 22 12 22", // Back to original
        ],
        transition: {
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1], // Even timing for 5 stages
        },
      },
    },
    // Right meridian - complex multi-stage path morph loop (mirrored)
    path4: {
      initial: {
        d: "M12 2C12 2 16 7 16 12C16 17.2061 12 22 12 22",
      },
      animate: {
        d: [
          "M12 2C12 2 16 7 16 12C16 17.2061 12 22 12 22", // Original curved
          "M12 2L16 12L12 22", // Straight angular
          "M12 2C12 2 18 8 18 12C18 16 12 22 12 22", // Wide curve
          "M12 2C12 2 14 6 14 12C14 18 12 22 12 22", // Narrow curve
          "M12 2C12 2 16 7 16 12C16 17.2061 12 22 12 22", // Back to original
        ],
        transition: {
          duration: 1.2,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1], // Even timing for 5 stages
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: GlobeNewProps) {
  const { controls } = useAnimateIconContext();
  const variants = getVariants(animations);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        variants={variants.path1}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M2.5 12H21.5"
        variants={variants.path2}
        initial="initial"
        animate={controls}
      />
      <motion.path
        variants={variants.path3}
        initial="initial"
        animate={controls}
      />
      <motion.path
        variants={variants.path4}
        initial="initial"
        animate={controls}
      />
      <motion.path
        variants={variants.path5}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function GlobeNew(props: GlobeNewProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  GlobeNew,
  GlobeNew as GlobeNewIcon,
  type GlobeNewProps,
  type GlobeNewProps as GlobeNewIconProps,
};
