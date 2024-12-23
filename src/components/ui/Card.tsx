import React from 'react';
import { cn } from '../../utils/classNames';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => (
  <div className={cn('bg-white rounded-lg shadow-lg p-6', className)}>
    {children}
  </div>
);

export const CardHeader = ({ className, children }: CardProps) => (
  <div className={cn('flex items-center mb-4', className)}>
    {children}
  </div>
);

export const CardContent = ({ className, children }: CardProps) => (
  <div className={cn('', className)}>
    {children}
  </div>
);

export const CardFooter = ({ className, children }: CardProps) => (
  <div className={cn('mt-4 pt-4 border-t', className)}>
    {children}
  </div>
);

export default Card;