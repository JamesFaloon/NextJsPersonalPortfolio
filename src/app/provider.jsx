'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Provider({ children }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
    );
}