"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from "@/components/animate-ui/icons/icon";

type GlobeProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    // Outer circle - stays stable
    path1: {},
    // Inner meridian - rotate to simulate 3D globe rotation
    path2: {
      initial: {
        scaleX: 1,
        rotate: 0,
      },
      animate: {
        scaleX: 0.3,
        rotate: 90,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Horizontal line - stays stable
    path3: {},
  } satisfies Record<string, Variants>,
  "default-loop": {
    // Outer circle - stays stable
    path1: {},
    // Inner meridian - continuous rotation with scale to simulate 3D
    path2: {
      initial: {
        scaleX: 1,
        rotate: 0,
      },
      animate: {
        scaleX: [1, 0.3, 1],
        rotate: [0, 90, 180],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    // Horizontal line - stays stable
    path3: {},
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: GlobeProps) {
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
        d="M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z"
        variants={variants.path2}
        initial="initial"
        animate={controls}
        style={{ transformOrigin: "12px 12px" }}
      />
      <motion.path
        d="M2 12H22"
        variants={variants.path3}
        initial="initial"
        animate={controls}
        style={{ transformOrigin: "12px 12px" }}
      />
    </motion.svg>
  );
}

function Globe(props: GlobeProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Globe,
  Globe as GlobeIcon,
  type GlobeProps,
  type GlobeProps as GlobeIconProps,
};
