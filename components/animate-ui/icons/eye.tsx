"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from "@/components/animate-ui/icons/icon";

type EyeProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    path1: {
      initial: {
        scale: 1,
        opacity: 1,
      },
      animate: {
        scale: [1, 1.15, 1],
        opacity: [1, 0.7, 1],
        transition: { duration: 0.6, ease: "easeInOut" },
      },
    },
    path2: {
      initial: {
        y: 0,
      },
      animate: {
        y: [0, 1, 5, 0],
        transition: { duration: 0.6, ease: "linear" },
      },
    },
    path3: {
      initial: {
        y: 0,
      },
      animate: {
        y: [0, 1, 5, 0],
        transition: { duration: 0.6, ease: "linear" },
      },
    },
    path4: {
      initial: {
        y: 0,
      },
      animate: {
        y: [0, 1, 5, 0],
        transition: { duration: 0.6, ease: "linear" },
      },
    },
    path5: {
      initial: {
        y: 0,
        x: 0,
      },
      animate: {
        y: [0, 0.5, 1.5, 0.5, 0],
        x: [0, 2.4, 0, -2.4, 0],
        transition: { duration: 1.2, ease: "easeInOut" },
      },
    },
    path6: {},
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: EyeProps) {
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
        variants={variants.path1}
        d={
          "M3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H7"
        }
        initial="initial"
        animate={controls}
      />
      <motion.path
        variants={variants.path1}
        d={
          "M17 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V7"
        }
        initial="initial"
        animate={controls}
      />
      <motion.path
        variants={variants.path1}
        d={
          "M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17"
        }
        initial="initial"
        animate={controls}
      />
      <motion.path
        variants={variants.path1}
        d={
          "M7 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17"
        }
        initial="initial"
        animate={controls}
      />
      <motion.path
        variants={variants.path5}
        d={
          "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        }
        initial="initial"
        animate={controls}
      />
      <motion.path
        variants={variants.path6}
        d={
          "M18.944 12.33C19.0187 12.1163 19.0187 11.8837 18.944 11.67C18.381 10.2904 17.4198 9.10982 16.1831 8.27876C14.9463 7.44771 13.4901 7.00388 12 7.00388C10.51 7.00388 9.05372 7.44771 7.81696 8.27876C6.58021 9.10982 5.61903 10.2904 5.05602 11.67C4.98133 11.8837 4.98133 12.1163 5.05602 12.33C5.61903 13.7096 6.58021 14.8902 7.81696 15.7212C9.05372 16.5523 10.51 16.9961 12 16.9961C13.4901 16.9961 14.9463 16.5523 16.1831 15.7212C17.4198 14.8902 18.381 13.7096 18.944 12.33Z"
        }
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Eye(props: EyeProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Eye,
  Eye as KanbanIcon,
  type EyeProps,
  type EyeProps as EyeIconProps,
};
