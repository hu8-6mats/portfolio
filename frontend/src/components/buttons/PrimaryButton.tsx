'use client';

import React, { useState, useEffect } from 'react';
import styles from './PrimaryButton.module.css';

type PrimaryButtonProps = {
    label: string;
    redirectUrl?: string;
    primaryDelay: number;
    buttonType: 'submit' | 'reset' | 'button';
    onClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    label,
    redirectUrl,
    primaryDelay,
    buttonType,
    onClick,
}) => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsButtonVisible(true);
        }, primaryDelay);

        return () => clearTimeout(timer);
    }, [primaryDelay]);

    const handleClick = () => {
        if (redirectUrl) {
            window.location.href = redirectUrl;
        } else {
            onClick?.();
        }
    };

    return (
        <button
            className={`${styles.primaryButton} ${
                isButtonVisible ? styles.primaryButtonVisible : ''
            }`}
            onClick={handleClick}
            type={buttonType}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;
