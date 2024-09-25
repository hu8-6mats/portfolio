'use client';

import React, { useState, useEffect, ReactNode } from 'react';

type SequentialRenderProps = {
    initialRenderDelayMS?: number;
    sequentialRenderDelayMS?: number;
    children: ReactNode;
};

const SequentialRender: React.FC<SequentialRenderProps> = ({
    initialRenderDelayMS = 1000,
    sequentialRenderDelayMS = 750,
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
                        setVisibleComponentsIndex(i + 2);
                    },
                    initialRenderDelayMS + (i + 1) * sequentialRenderDelayMS
                )
            );
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [children]);

    return <>{childrenArray.slice(0, visibleComponentsIndex)}</>;
};

export default SequentialRender;
