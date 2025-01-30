import { svg_dark, svg_light } from "./svg";
import { useTheme } from "@/context/ThemeProvider";

export const ModeToggle = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 border rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
            {theme === "dark" ? svg_dark : svg_light}
        </button>
    );  
};
