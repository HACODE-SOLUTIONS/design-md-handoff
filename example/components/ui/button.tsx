import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Variant styles
          {
            'bg-primary text-white hover:bg-primary-700 focus-visible:ring-primary-500': variant === 'primary',
            'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500': variant === 'secondary',
            'border border-primary text-primary hover:bg-primary-50 focus-visible:ring-primary-500': variant === 'outline',
            'text-primary hover:bg-primary-50 focus-visible:ring-primary-500': variant === 'ghost',
          },
          
          // Size styles
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-base': size === 'md',
            'h-11 px-5 text-lg': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
