import type * as React from 'react';

import { Menu } from '@base-ui/react/menu';

import { cn } from '@/libs/utils/utils';

type DropdownMenuProps = React.ComponentProps<typeof Menu.Root>;
type DropdownMenuTriggerProps = React.ComponentProps<typeof Menu.Trigger>;
type DropdownMenuItemProps = React.ComponentProps<typeof Menu.Item>;
type DropdownMenuSeparatorProps = React.ComponentProps<typeof Menu.Separator>;
type DropdownMenuLabelProps = React.ComponentProps<typeof Menu.GroupLabel>;
type DropdownMenuGroupProps = React.ComponentProps<typeof Menu.Group>;
type DropdownMenuContentProps = React.ComponentProps<typeof Menu.Popup> & {
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
};

function DropdownMenu({ children, ...props }: DropdownMenuProps) {
  return <Menu.Root {...props}>{children}</Menu.Root>;
}

function DropdownMenuTrigger({
  className,
  ...props
}: DropdownMenuTriggerProps) {
  return <Menu.Trigger className={cn(className)} {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 12,
  align = 'end',
  children,
  ...props
}: DropdownMenuContentProps) {
  return (
    <Menu.Portal>
      <Menu.Positioner sideOffset={sideOffset} align={align}>
        <Menu.Popup className={cn(className)} {...props}>
          {children}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  );
}

function DropdownMenuLabel({ className, ...props }: DropdownMenuLabelProps) {
  return <Menu.GroupLabel className={cn(className)} {...props} />;
}

function DropdownMenuGroup({ children, ...props }: DropdownMenuGroupProps) {
  return <Menu.Group {...props}>{children}</Menu.Group>;
}

function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorProps) {
  return <Menu.Separator className={cn(className)} {...props} />;
}

function DropdownMenuItem({ className, ...props }: DropdownMenuItemProps) {
  return <Menu.Item className={cn(className)} {...props} />;
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
};
