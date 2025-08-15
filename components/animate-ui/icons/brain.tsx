"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from "@/components/animate-ui/icons/icon";

type BrainProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    // Central stem - subtle pulse
    path1: {
      initial: {
        opacity: 1,
        scale: 1,
      },
      animate: {
        opacity: 0.8,
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Neural connections - expand outward
    path2: {
      initial: {
        scale: 1,
        opacity: 1,
      },
      animate: {
        scale: 1.1,
        opacity: 0.9,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Left brain hemisphere - subtle movement
    path3: {
      initial: {
        x: 0,
        scale: 1,
      },
      animate: {
        x: -1,
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Left brain connections
    path4: {
      initial: {
        opacity: 1,
      },
      animate: {
        opacity: 0.7,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Left brain lower section
    path5: {
      initial: {
        x: 0,
      },
      animate: {
        x: -0.5,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Left brain bottom
    path6: {
      initial: {
        scale: 1,
      },
      animate: {
        scale: 1.01,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Right brain hemisphere - subtle movement
    path7: {
      initial: {
        x: 0,
        scale: 1,
      },
      animate: {
        x: 1,
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Right brain connections
    path8: {
      initial: {
        opacity: 1,
      },
      animate: {
        opacity: 0.7,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
  } satisfies Record<string, Variants>,
  "default-loop": {
    // Central stem - pulse loop
    path1: {
      initial: {
        opacity: 1,
        scale: 1,
      },
      animate: {
        opacity: [1, 0.8, 1],
        scale: [1, 1.05, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    // Neural connections - expand and contract
    path2: {
      initial: {
        scale: 1,
        opacity: 1,
      },
      animate: {
        scale: [1, 1.1, 1],
        opacity: [1, 0.9, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    // Left brain hemisphere - breathing motion
    path3: {
      initial: {
        x: 0,
        scale: 1,
      },
      animate: {
        x: [0, -1, 0],
        scale: [1, 1.02, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    // Left brain connections - fade loop
    path4: {
      initial: {
        opacity: 1,
      },
      animate: {
        opacity: [1, 0.7, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    // Left brain lower section
    path5: {
      initial: {
        x: 0,
      },
      animate: {
        x: [0, -0.5, 0],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    // Left brain bottom
    path6: {
      initial: {
        scale: 1,
      },
      animate: {
        scale: [1, 1.01, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    // Right brain hemisphere - breathing motion
    path7: {
      initial: {
        x: 0,
        scale: 1,
      },
      animate: {
        x: [0, 1, 0],
        scale: [1, 1.02, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
    // Right brain connections - fade loop
    path8: {
      initial: {
        opacity: 1,
      },
      animate: {
        opacity: [1, 0.7, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: BrainProps) {
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
        d="M12 18V5"
        variants={variants.path1}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90141 12 9C11.9995 9.90141 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13"
        variants={variants.path2}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M17.598 6.5C17.8281 6.10149 17.9635 5.65538 17.9936 5.19619C18.0237 4.737 17.9478 4.27704 17.7717 3.85189C17.5956 3.42674 17.324 3.0478 16.9781 2.74438C16.6321 2.44096 16.221 2.2212 15.7765 2.10209C15.332 1.98299 14.866 1.96774 14.4147 2.05752C13.9634 2.1473 13.5387 2.3397 13.1737 2.61984C12.8086 2.89999 12.5129 3.26036 12.3093 3.67309C12.1058 4.08581 12 4.53982 12 5C12 4.53982 11.8942 4.08581 11.6907 3.67309C11.4871 3.26036 11.1914 2.89999 10.8263 2.61984C10.4613 2.3397 10.0366 2.1473 9.5853 2.05752C9.13396 1.96774 8.66803 1.98299 8.22353 2.10209C7.77904 2.2212 7.3679 2.44096 7.02193 2.74438C6.67596 3.0478 6.40442 3.42674 6.22833 3.85189C6.05224 4.27704 5.97632 4.737 6.00643 5.19619C6.03655 5.65538 6.17189 6.10149 6.402 6.5"
        variants={variants.path3}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M17.997 5.125C18.5848 5.27614 19.1305 5.55905 19.5928 5.95231C20.055 6.34557 20.4218 6.83887 20.6652 7.39485C20.9085 7.95082 21.0222 8.55489 20.9976 9.16131C20.973 9.76773 20.8107 10.3606 20.523 10.895"
        variants={variants.path4}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M18 18C18.8805 18 19.7364 17.7094 20.4349 17.1734C21.1335 16.6373 21.6356 15.8858 21.8635 15.0353C22.0914 14.1848 22.0323 13.2829 21.6954 12.4694C21.3585 11.6559 20.7625 10.9763 20 10.536"
        variants={variants.path5}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M19.967 17.483C20.0371 18.0252 19.9953 18.5761 19.8441 19.1015C19.693 19.627 19.4357 20.1158 19.0882 20.538C18.7407 20.9601 18.3104 21.3065 17.8238 21.5558C17.3372 21.805 16.8046 21.9519 16.259 21.9873C15.7134 22.0227 15.1664 21.9459 14.6516 21.7616C14.1369 21.5773 13.6654 21.2894 13.2662 20.9158C12.8671 20.5421 12.5488 20.0906 12.331 19.5891C12.1132 19.0876 12.0006 18.5467 12 18C11.9994 18.5467 11.8867 19.0876 11.669 19.5891C11.4512 20.0906 11.1329 20.5421 10.7338 20.9158C10.3346 21.2894 9.86313 21.5773 9.34838 21.7616C8.83364 21.9459 8.28657 22.0227 7.74097 21.9873C7.19537 21.9519 6.66283 21.805 6.17622 21.5558C5.68961 21.3065 5.25927 20.9601 4.91178 20.538C4.56429 20.1158 4.30703 19.627 4.15589 19.1015C4.00474 18.5761 3.96291 18.0252 4.033 17.483"
        variants={variants.path6}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M5.99999 18C5.11949 18 4.2636 17.7094 3.56506 17.1734C2.86652 16.6373 2.36436 15.8858 2.13647 15.0353C1.90858 14.1848 1.96768 13.2829 2.30461 12.4694C2.64154 11.6559 3.23748 10.9763 3.99999 10.536"
        variants={variants.path7}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M6.00301 5.125C5.41521 5.27614 4.86951 5.55905 4.40724 5.95231C3.94497 6.34557 3.57825 6.83887 3.33485 7.39485C3.09145 7.95082 2.97777 8.55489 3.0024 9.16131C3.02702 9.76773 3.18933 10.3606 3.47701 10.895"
        variants={variants.path8}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Brain(props: BrainProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Brain,
  Brain as BrainIcon,
  type BrainProps,
  type BrainProps as BrainIconProps,
};
