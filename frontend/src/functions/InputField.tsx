import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import styles from './InputField.module.css';

type InputFieldProps = {
    primaryDelay?: number;
    inputType: 'text' | 'email' | 'password';
    inputValue: string;
    inputPlaceholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
    primaryDelay = 1000,
    inputType,
    inputValue,
    inputPlaceholder,
    onChange,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [fieldType, setFieldType] = useState<'password' | 'text' | 'email'>(inputType);

    const showPassword = () => {
        setFieldType('text');
    };

    const hidePassword = () => {
        setFieldType('password');
    };

    const isPasswordField = inputType === 'password';

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, primaryDelay);

        return () => clearTimeout(timer);
    }, [primaryDelay]);

    return (
        <div className={`${styles.field} ${isVisible ? styles.fieldVisible : ''}`}>
            <div className={styles.inputWrapper}>
                <input
                    className={styles.input}
                    type={fieldType}
                    value={inputValue}
                    placeholder={inputPlaceholder}
                    onChange={onChange}
                />

                {isPasswordField && (
                    <span
                        className={styles.passwordToggle}
                        onMouseDown={showPassword}
                        onMouseUp={hidePassword}
                        onMouseLeave={hidePassword}
                    >
                        {fieldType === 'password' ? <FaEyeSlash /> : <FaEye />}
                    </span>
                )}
            </div>

            <span className={styles.border} />
        </div>
    );
};

export default InputField;
