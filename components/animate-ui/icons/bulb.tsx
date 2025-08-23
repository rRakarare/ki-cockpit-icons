"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from "@/components/animate-ui/icons/icon";

type BulbProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    group1: {
      initial: {
        scaleY: 1,
        scaleX: 1,
      },
      animate: {
        scaleY: [1, 0.85, 1],
        scaleX: [1, 0.9, 1],
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
      },
    },
    // Individual shine lines with staggered animation
    shine1: {
      initial: { scale: 0 },
      animate: {
        scale: [0, 1, 0],
        transition: {
          duration: 0.8,
          delay: 0,
          ease: "easeInOut",
        },
      },
    },
    shine2: {
      initial: { scale: 0 },
      animate: {
        scale: [0, 1, 0],
        transition: {
          duration: 0.8,
          delay: 0.1,
          ease: "easeInOut",
        },
      },
    },
    shine3: {
      initial: { scale: 0 },
      animate: {
        scale: [0, 1, 0],
        transition: {
          duration: 0.8,
          delay: 0.2,
          ease: "easeInOut",
        },
      },
    },
    shine4: {
      initial: { scale: 0 },
      animate: {
        scale: [0, 1, 0],
        transition: {
          duration: 0.8,
          delay: 0.3,
          ease: "easeInOut",
        },
      },
    },
    shine5: {
      initial: { scale: 0 },
      animate: {
        scale: [0, 1, 0],
        transition: {
          duration: 0.8,
          delay: 0.4,
          ease: "easeInOut",
        },
      },
    },
    shine6: {
      initial: { scale: 0 },
      animate: {
        scale: [0, 1, 0],
        transition: {
          duration: 0.8,
          delay: 0.5,
          ease: "easeInOut",
        },
      },
    },
    shine7: {
      initial: { scale: 0 },
      animate: {
        scale: [0, 1, 0],
        transition: {
          duration: 0.8,
          delay: 0.6,
          ease: "easeInOut",
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: BulbProps) {
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
      <motion.g variants={variants.group1} initial="initial" animate={controls}>
        <motion.path d="M14 15C14.1333 14.3333 14.4667 13.8667 15 13.3333C15.6667 12.7333 16 11.8667 16 11C16 9.93913 15.5786 8.92172 14.8284 8.17157C14.0783 7.42143 13.0609 7 12 7C10.9391 7 9.92172 7.42143 9.17157 8.17157C8.42143 8.92172 8 9.93913 8 11C8 11.6667 8.13333 12.4667 9 13.3333C9.46667 13.8 9.86667 14.3333 10 15" />
        <motion.path d="M10 18H14" />
        <motion.path d="M11 21H13" />
      </motion.g>
      <motion.g>
        <motion.path
          d="M3 13.6159L4.4899 13.1588"
          variants={variants.shine1}
          initial="initial"
          animate={controls}
        />
        <motion.path
          d="M3 8.13159L4.4899 8.58861"
          variants={variants.shine2}
          initial="initial"
          animate={controls}
        />
        <motion.path
          d="M6.41461 3.69473L7.33542 4.89123"
          variants={variants.shine3}
          initial="initial"
          animate={controls}
        />
        <motion.path
          d="M11.9395 2V3.47895"
          variants={variants.shine4}
          initial="initial"
          animate={controls}
        />
        <motion.path
          d="M17.4643 3.69473L16.5435 4.89123"
          variants={variants.shine5}
          initial="initial"
          animate={controls}
        />
        <motion.path
          d="M20.8789 8.13159L19.389 8.58861"
          variants={variants.shine6}
          initial="initial"
          animate={controls}
        />
        <motion.path
          d="M20.8789 13.6159L19.389 13.1588"
          variants={variants.shine7}
          initial="initial"
          animate={controls}
        />
      </motion.g>
    </motion.svg>
  );
}

function Bulb(props: BulbProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Bulb,
  Bulb as BulbIcon,
  type BulbProps,
  type BulbProps as BulbIconProps,
};
