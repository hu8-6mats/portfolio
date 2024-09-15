import React from 'react';
import styles from './PrimaryModal.module.css';

type PrimaryModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const PrimaryModal: React.FC<PrimaryModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>

                {children}
            </div>
        </div>
    );
};

export default PrimaryModal;
