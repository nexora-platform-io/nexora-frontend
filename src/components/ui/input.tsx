import * as React from 'react';

import { cn } from '@/libs/utils/utils';

import { inputStyles } from './input.styles';

type InputProps = React.ComponentProps<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(inputStyles.base, className)}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input };
