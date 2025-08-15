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
    path1: {
      initial: {
        scale: 1,
      },
      animate: {
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Horizontal line - slide in from sides
    path2: {},
    // Left meridian - multiple path morphs: curved → straight → wavy
    path3: {
      initial: {
        d: "M12.0001 1.99973C12.0001 1.99973 8 3 8 11.9997C8 20.9995 12.0001 21.9997 12.0001 21.9997",
      },
      animate: {
        d: [
          "M12.0001 1.99973C12.0001 1.99973 8 3 8 11.9997C8 20.9995 12.0001 21.9997 12.0001 21.9997",
          "M12.0001 1.99973C12.0001 1.99973 22 3 22 11.9997C22 20.9995 12.0001 21.9997 12.0001 21.9997",
          "M12.0001 1.99973C12.0001 1.99973 2 3 2 11.9997C2 20.9995 12.0001 21.9997 12.0001 21.9997",
          "M12.0001 1.99973C12.0001 1.99973 8 3 8 11.9997C8 20.9995 12.0001 21.9997 12.0001 21.9997",
        ],
        transition: {
          duration: 0.9,
          ease: "linear",
          times: [0, 0.3, 0.8, 1], // Control timing of each morph
        },
      },
    },
    // Right meridian - multiple path morphs: curved → straight → wavy (opposite)
    path4: {
      initial: {
        d: "M12 1.99973C12 1.99973 16 3.00027 16 12C16 20.9997 12 21.9997 12 21.9997",
      },
      animate: {
        d: [
          "M12 1.99973C12 1.99973 16 3.00027 16 12C16 20.9997 12 21.9997 12 21.9997",
          "M12 1.99973C12 1.99973 22 3.00027 22 12C22 20.9997 12 21.9997 12 21.9997",
          "M12 2C12 2 2 3.00055 2 12.0003C2 21 12 22 12 22",
          "M12 1.99973C12 1.99973 16 3.00027 16 12C16 20.9997 12 21.9997 12 21.9997",
        ],
        transition: {
          duration: 0.9,
          ease: "linear",
          times: [0, 0.1, 0.4, 1], // Control timing of each morph
        },
      },
    },
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
        d="M2 12H22"
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
