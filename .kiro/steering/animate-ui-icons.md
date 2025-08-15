# Animate-UI Icons Implementation Guide

This steering guide provides instructions for implementing new animated icons in the animate-ui style when users request them with SVG code.

## Overview

When a user requests a new animated icon and provides SVG code with paths, follow this exact pattern based on the animate-ui library structure. Each icon must be implemented as a separate component file in `src/components/animate-ui/icons/`.

## Required Structure

### 1. File Naming Convention
- Use kebab-case for the filename: `icon-name.tsx`
- Component name should be PascalCase: `IconName`
- Export both `IconName` and `IconNameIcon` for flexibility

### 2. Base Template Structure

```typescript
"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from "@/components/animate-ui/icons/icon";

type IconNameProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    // Define animations for each path/element
    path1: {
      initial: {
        // Initial state properties
      },
      animate: {
        // Animation properties
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
    // Add more paths as needed (path2, path3, etc.)
  } satisfies Record<string, Variants>,
  "default-loop": {
    // Loop version that returns to initial state
    path1: {
      initial: {
        // Same as default initial
      },
      animate: {
        // Use array notation for loop: [start, middle, end]
        transition: {
          duration: 0.6, // Usually double the default duration
          ease: "easeInOut",
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: IconNameProps) {
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
        d="[SVG_PATH_DATA]"
        variants={variants.path1}
        initial="initial"
        animate={controls}
      />
      {/* Add more motion.path elements for additional paths */}
    </motion.svg>
  );
}

function IconName(props: IconNameProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  IconName,
  IconName as IconNameIcon,
  type IconNameProps,
  type IconNameProps as IconNameIconProps,
};
```

## Implementation Steps

### Step 1: Analyze the SVG
1. Extract all `<path>` elements from the provided SVG
2. Identify the viewBox dimensions (usually 24x24)
3. Note any special attributes like fill, stroke, etc.

### Step 2: Plan Animations
1. **Default Animation**: Create a meaningful animation for each path
   - Common animations: translate (x, y), scale, rotate, opacity
   - Duration typically 0.3s with "easeInOut"
2. **Default-Loop Animation**: Same as default but returns to initial state
   - Use array notation: `[initial, animated, initial]`
   - Duration typically double the default (0.6s)

### Step 3: Map Paths to Variants
1. Name each path sequentially: `path1`, `path2`, `path3`, etc.
2. If a path doesn't animate, provide empty object: `path2: {}`
3. Each animated path needs `initial` and `animate` states

### Step 4: Create Motion Elements
1. Convert each `<path>` to `<motion.path>`
2. Add `variants={variants.pathN}` where N is the path number
3. Add `initial="initial"` and `animate={controls}`
4. Preserve all original path attributes (d, fill, stroke, etc.)

## Built-in Animation Types

The system automatically provides these animations:
- **path**: Animates pathLength from 0 to 1 (drawing effect)
- **path-loop**: Animates pathLength from 1 to 0 to 1 (drawing loop)
- **default**: Your custom animation
- **default-loop**: Your custom loop animation

## Animation Properties Reference

### Common Transform Properties
- `x`, `y`: Translation
- `scale`: Uniform scaling
- `scaleX`, `scaleY`: Axis-specific scaling  
- `rotate`: Rotation in degrees
- `opacity`: Transparency (0-1)

### Path-Specific Properties
- `pathLength`: For drawing animations (0-1)
- `pathOffset`: Starting point of path drawing

### Transition Options
- `duration`: Animation duration in seconds
- `ease`: Easing function ("easeInOut", "easeIn", "easeOut", "linear")
- `delay`: Delay before animation starts
- `repeat`: Number of repeats (Infinity for endless)
- `repeatType`: "loop", "reverse", "mirror"
- `repeatDelay`: Delay between repeats

## Usage Examples

```tsx
// Basic usage
<IconName />

// With specific animation
<IconName animation="path" />

// With hover animation
<IconName animateOnHover />

// With custom size
<IconName size={32} />

// With loop
<IconName animation="default-loop" loop />

// Controlled by parent
<AnimateIcon animateOnHover>
  <div>
    <IconName />
  </div>
</AnimateIcon>
```

## Best Practices

1. **Keep animations subtle**: Avoid overly dramatic movements
2. **Consistent timing**: Use 0.3s for default, 0.6s for loops
3. **Meaningful motion**: Animations should relate to the icon's purpose
4. **Performance**: Prefer transform properties over layout-affecting properties
5. **Accessibility**: Ensure animations don't cause motion sickness
6. **Fallbacks**: Always provide empty objects for non-animated paths

## Common Animation Patterns

### Layer Movement (like Layers icon)
```typescript
path1: {
  initial: { y: 0 },
  animate: { y: 5 }
},
path3: {
  initial: { y: 0 },
  animate: { y: -5 }
}
```

### Scale Effect
```typescript
path1: {
  initial: { scale: 1 },
  animate: { scale: 1.1 }
}
```

### Rotation
```typescript
path1: {
  initial: { rotate: 0 },
  animate: { rotate: 180 }
}
```

### Fade In/Out
```typescript
path1: {
  initial: { opacity: 1 },
  animate: { opacity: 0.5 }
}
```

## Error Prevention

1. **Always** use `satisfies Record<string, Variants>` for type safety
2. **Always** export both the component and alias with Icon suffix
3. **Always** use motion.path for SVG paths, motion.svg for the container
4. **Never** forget the `{...props}` spread on the motion.svg element
5. **Always** use the exact same initial state in both default and default-loop animations

## File Location
All icon files must be placed in: `src/components/animate-ui/icons/`

This guide ensures consistent implementation of animated icons that integrate seamlessly with the animate-ui system.