import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts'
import Button from '../ui/Button';
import Sun from '@/assets/sun.svg'
import Moon from '@/assets/moon.svg'
import './Header.module.css';


function Header() {
    const { isDarkMode, toggle } = useDarkMode();

    return (
        <header>
            <h1>Dark</h1>

            <div className="theme">
                <Button onClick={toggle}>
                    { isDarkMode ? <img src={Sun} /> : <img src={Moon} />}
                </Button>
            </div>
        </header>
    );
}

export default Header;