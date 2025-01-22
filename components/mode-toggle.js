// components/mode-toggle.js
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { svg_dark, svg_light } from "./svg";

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure theme state is mounted on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 border rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
            {theme === "light" ? svg_light : svg_dark}
        </button>
    );
};
