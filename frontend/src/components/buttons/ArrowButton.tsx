'use client';

import React, { useState, useEffect } from 'react';
import styles from './ArrowButton.module.css';

type Direction = 'left' | 'right';

type ArrowButtonProps = {
    primaryDelayMS?: number;
    buttonType: 'button' | 'submit';
    buttonDirection: 'left' | 'right';
    onClick?: () => void;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
    primaryDelayMS = 1000,
    buttonType,
    buttonDirection,
    onClick,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    if (onClick != null) {
        useEffect(() => {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, primaryDelayMS);

            return () => clearTimeout(timer);
        }, [primaryDelayMS]);
    }

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
