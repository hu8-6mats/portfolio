'use client';

import { useState, useEffect } from 'react';
import styles from './BinaryToMessage.module.css';

type BinaryToMessageProps = {
    message: string;
    primaryDelay: number;
    binaryStringDelay: number;
    messageDelay: number;
};

const BinaryToMessage: React.FC<BinaryToMessageProps> = ({
    message,
    primaryDelay,
    binaryStringDelay,
    messageDelay,
}) => {
    const [displayedMessage, setDisplayedMessage] = useState('');

    useEffect(() => {
        const fetchBinaryString = async (length: number) => {
            const response = await fetch(
                `http://localhost:8000/generate_binary_string?length=${length}`
            );
            const data = await response.json();

            return data.binary_string;
        };

        const processMessage = async () => {
            const segments = message.split('\n');
            let temporaryMessage = '';

            for (let j = 0; j < segments.length; j++) {
                const segment = segments[j];
                const binaryString = await fetchBinaryString(segment.length);

                await new Promise((resolve) => setTimeout(resolve, primaryDelay));

                for (let i = 0; i < binaryString.length; i++) {
                    temporaryMessage += binaryString[i];
                    setDisplayedMessage(temporaryMessage);

                    await new Promise((resolve) => setTimeout(resolve, binaryStringDelay));
                }

                for (let i = 0; i < segment.length; i++) {
                    await new Promise((resolve) => setTimeout(resolve, messageDelay));

                    temporaryMessage =
                        temporaryMessage.slice(
                            0,
                            temporaryMessage.length - binaryString.length + i
                        ) +
                        segment[i] +
                        temporaryMessage.slice(
                            temporaryMessage.length - binaryString.length + i + 1
                        );

                    setDisplayedMessage(temporaryMessage);
                }

                if (j < segments.length - 1) {
                    temporaryMessage += '<br>';
                    setDisplayedMessage(temporaryMessage);
                }
            }
        };

        processMessage();
    }, [message]);

    return (
        <div>
            <p className={styles.message} dangerouslySetInnerHTML={{ __html: displayedMessage }} />
        </div>
    );
};

export default BinaryToMessage;
