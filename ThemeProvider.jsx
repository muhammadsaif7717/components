'use client'
//install next-themes
import React from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }) => {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={true}>
            {children}
        </NextThemesProvider>
    );
};

export default ThemeProvider;