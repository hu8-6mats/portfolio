'use client';

import React from 'react';
import styles from './PrimaryButton.module.css';
import useDelayVisibility from '@/hooks/useDelayVisibility';

type PrimaryButtonProps<T = any> = {
    initialRenderDelayMS: number;
    buttonType: 'button' | 'submit';
    buttonLabel: string;
    redirectUrl?: string;
    data?: T;
    onClick?: () => void;
    onSubmit?: (data: T) => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    initialRenderDelayMS,
    buttonType,
    buttonLabel,
    redirectUrl,
    data,
    onClick,
    onSubmit,
}) => {
    const isVisible: boolean = useDelayVisibility({ initialRenderDelayMS });

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
            className={`${styles.button} ${isVisible ? styles.buttonVisible : ''}`}
            onClick={handleClick}
            type={buttonType}
        >
            {buttonLabel}
        </button>
    );
};

export default PrimaryButton;
