"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from "@/components/animate-ui/icons/icon";

type ScrollProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    path1: {
      initial: {
        d: "M21 16.5V6C21 5.44772 20.5523 5 20 5H16C13.7909 5 12 6.79086 12 9V20C12 18.6193 13.1193 17.5 14.5 17.5H20C20.5523 17.5 21 17.0523 21 16.5Z",
      },
      animate: {
        d: [
          "M21 16.5V6C21 5.44772 20.5523 5 20 5H16C13.7909 5 12 6.79086 12 9V20C12 18.6193 13.1193 17.5 14.5 17.5H20C20.5523 17.5 21 17.0523 21 16.5Z",
          "M16 15.8V3.2C16 2.53726 15.801 2 15.5556 2H13.7778C12.7959 2 12 4.14903 12 6.8V20C12 18.3431 12.4975 17 13.1111 17H15.5556C15.801 17 16 16.4627 16 15.8Z",
          "M8 15.8V3.2C8 2.53726 8.19898 2 8.44444 2H10.2222C11.2041 2 12 4.14903 12 6.8V20C12 18.3431 11.5025 17 10.8889 17H8.44444C8.19898 17 8 16.4627 8 15.8Z",
          "M3 16.5V6C3 5.44772 3.44772 5 4 5H8C10.2091 5 12 6.79086 12 9V20C12 18.6193 10.8807 17.5 9.5 17.5H4C3.44772 17.5 3 17.0523 3 16.5Z",
        ],
        transition: {
          duration: 0.8,
          ease: "linear",
          times: [0, 0.3, 0.5, 1],
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: ScrollProps) {
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
      <motion.path d="M3 16.5V6C3 5.44772 3.44772 5 4 5H8C10.2091 5 12 6.79086 12 9V20C12 18.6193 10.8807 17.5 9.5 17.5H4C3.44772 17.5 3 17.0523 3 16.5Z" />
      <motion.path d="M21 16.5V6C21 5.44772 20.5523 5 20 5H16C13.7909 5 12 6.79086 12 9V20C12 18.6193 13.1193 17.5 14.5 17.5H20C20.5523 17.5 21 17.0523 21 16.5Z" />
      <motion.path
        d="M21 16.5V6C21 5.44772 20.5523 5 20 5H16C13.7909 5 12 6.79086 12 9V20C12 18.6193 13.1193 17.5 14.5 17.5H20C20.5523 17.5 21 17.0523 21 16.5Z"
        fill={"white"}
        variants={variants.path1}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Scroll(props: ScrollProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Scroll,
  Scroll as ScrollIcon,
  type ScrollProps,
  type ScrollProps as ScrollIconProps,
};
