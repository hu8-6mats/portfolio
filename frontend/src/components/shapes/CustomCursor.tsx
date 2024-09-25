'use client';

import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        if (!cursor) return;

        const updateCursorPosition = (event: MouseEvent) => {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
        };

        const toggleCursorHoverState = (event: MouseEvent) => {
            if (event.target instanceof HTMLElement) {
                const isHoveringButton = event.target.closest('button') !== null;
                cursor.classList.toggle(styles.hovered, isHoveringButton);
            }
        };

        const handleMouseDown = () => {
            cursor.classList.add(styles.clicked);
        };

        const handleMouseUp = () => {
            cursor.classList.remove(styles.clicked);
        };

        document.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseover', toggleCursorHoverState);
        document.addEventListener('mouseout', toggleCursorHoverState);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mouseover', toggleCursorHoverState);
            document.removeEventListener('mouseout', toggleCursorHoverState);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [cursorRef]);

    return (
        <>
            <div className={styles.cursor} ref={cursorRef} />
        </>
    );
};

export default CustomCursor;
