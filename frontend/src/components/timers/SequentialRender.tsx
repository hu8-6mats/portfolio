'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import styles from './SequentialRender.module.css';

type SequentialRenderProps = {
    initialRenderDelayMS?: number;
    sequentialRenderDelayMS?: number;
    children: ReactNode;
};

const SequentialRender: React.FC<SequentialRenderProps> = ({
    initialRenderDelayMS = 1000,
    sequentialRenderDelayMS = 1000,
    children,
}) => {
    const [visibleComponentsIndex, setVisibleComponentsIndex] = useState<number>(0);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = [];

        timeouts.push(
            setTimeout(() => {
                setVisibleComponentsIndex(1);
            }, initialRenderDelayMS)
        );

        childrenArray.slice(1).forEach((_, i) => {
            timeouts.push(
                setTimeout(
                    () => {
                        setVisibleComponentsIndex((prev) => prev + 1);
                    },
                    initialRenderDelayMS + (i + 1) * sequentialRenderDelayMS
                )
            );
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [children]);

    return (
        <>
            {childrenArray.map((child, i) => (
                <div
                    key={i}
                    className={`${styles.fadeIn} ${i < visibleComponentsIndex ? styles.visible : ''}`}
                >
                    {child}
                </div>
            ))}
        </>
    );
};

export default SequentialRender;
