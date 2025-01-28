import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
    'relative flex-col w-full border-l-4 rounded bg-background p-4 my-2 flex items-start gap-3 [&>svg~*]:pl-0 [&>svg]:text-gray-600',
    {
        variants: {
            variant: {
                default: 'border-l-gray-700 text-gray-600 bg-gray-100',
                destructive: 'border-l-red-700 bg-red-100 text-red-700 [&>svg]:text-red-700',
                information: 'border-l-blue-700 bg-blue-100 text-blue-700 [&>svg]:text-blue-700',
                warning: 'border-l-yellow-700 bg-yellow-100 text-yellow-700 [&>svg]:text-yellow-700',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);


const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h5
            ref={ref}
            className={cn('text-sm font-medium leading-none tracking-tight text-foreground', className)}
            {...props}
        />
    ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('text-sm  [&_p]:leading-relaxed', className)} {...props} />
    ),
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
