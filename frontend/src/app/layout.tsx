import React from 'react';
import CustomCursor from '@/components/shapes/CustomCursor';
import './globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang='en'>
            <head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </head>
            <body>
                <CustomCursor />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
