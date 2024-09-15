'use client';

import React, { useState, useEffect } from 'react';
import styles from './PrimaryButton.module.css';

type PrimaryButtonProps<T = any> = {
    primaryDelayMS?: number;
    buttonType: 'button' | 'submit';
    buttonLabel: string;
    redirectUrl?: string;
    onClick?: () => void;
    onSubmit?: (data: T) => void;
    data?: T;
};

const PrimaryButton = <T,>({
    primaryDelayMS = 1000,
    buttonType,
    buttonLabel,
    redirectUrl,
    onClick,
    onSubmit,
    data,
}: PrimaryButtonProps<T>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, primaryDelayMS);

        return () => clearTimeout(timer);
    }, [primaryDelayMS]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (onSubmit && data !== undefined) {
            onSubmit(data);
        }

        if (redirectUrl) {
            window.location.href = redirectUrl;
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`${styles.primaryButton} ${isVisible ? styles.primaryButtonVisible : ''}`}
            onClick={handleClick}
            type={buttonType}
        >
            {buttonLabel}
        </button>
    );
};

export default PrimaryButton;
