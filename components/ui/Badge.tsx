import clsx from 'clsx';
import React from 'react';

export function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={clsx(
            "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium",
            "bg-helm-teal/10 text-helm-cyan border border-helm-teal/20",
            className
        )}>
      {children}
    </span>
    );
}