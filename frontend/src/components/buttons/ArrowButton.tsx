'use client';

import React from 'react';
import styles from './ArrowButton.module.css';
import useDelayVisibility from '@/hooks/useDelayVisibility';

type Direction = 'left' | 'right';

type ArrowButtonProps = {
    initialRenderDelayMS: number;
    buttonType: 'button' | 'submit';
    buttonDirection: 'left' | 'right';
    onClick?: () => void;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
    initialRenderDelayMS,
    buttonType,
    buttonDirection,
    onClick,
}) => {
    const isVisible: boolean = useDelayVisibility({ initialRenderDelayMS });

    const directionClassMap: { [key in Direction]: string } = {
        left: styles.leftArrowButton,
        right: styles.rightArrowButton,
    };

    const visibleDirectionClassMap: { [key in Direction]: string } = {
        left: styles.leftArrowButtonVisible,
        right: styles.rightArrowButtonVisible,
    };

    const buttonClass = directionClassMap[buttonDirection];
    const visibleButtonClass = visibleDirectionClassMap[buttonDirection];

    return (
        <button
            className={`${buttonClass} ${isVisible ? visibleButtonClass : ''}`}
            onClick={onClick}
            type={buttonType}
        >
            {}
        </button>
    );
};

export default ArrowButton;
