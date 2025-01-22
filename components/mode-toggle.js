"use client";

import { useState } from "react";
import { svg_dark, svg_light } from "./svg";

export const ModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 border rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
            {isDarkMode ? svg_dark : svg_light}
        </button>
    );
};
