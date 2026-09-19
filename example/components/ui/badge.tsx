import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium',
          
          // Variant styles
          {
            'bg-gray-100 text-gray-800': variant === 'default',
            'bg-primary-100 text-primary-800': variant === 'primary',
            'bg-green-100 text-green-800': variant === 'success',
            'bg-amber-100 text-amber-800': variant === 'warning',
            'bg-red-100 text-red-800': variant === 'error',
          },
          
          // Size styles
          {
            'px-2 py-1 text-xs': size === 'sm',
            'px-3 py-1.5 text-sm': size === 'md',
          },
          
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
