import type * as React from 'react';

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';

import { cn } from '@/libs/utils/utils';

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>;
type AvatarFallbackProps = React.ComponentProps<
  typeof AvatarPrimitive.Fallback
>;

function Avatar({ className, ...props }: AvatarProps) {
  return <AvatarPrimitive.Root className={cn(className)} {...props} />;
}

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return <AvatarPrimitive.Image className={cn(className)} {...props} />;
}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return <AvatarPrimitive.Fallback className={cn(className)} {...props} />;
}

export { Avatar, AvatarFallback, AvatarImage };
