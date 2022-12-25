import { useEffect, ReactNode } from 'react';
import { useDarkMode } from 'usehooks-ts'


function Theme({ children }: { children: ReactNode }) {
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        const html = document.querySelector("html");

        if (html) {
            html.classList.value = "";
            html.classList.add(isDarkMode ? 'dark' : 'light');
        }
    }, [isDarkMode]);

    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Theme;