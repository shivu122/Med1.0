import React from 'react';
import { cn } from '../../utils/classNames';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => (
  <div className={cn('container mx-auto px-4', className)}>
    {children}
  </div>
);

export default Container;