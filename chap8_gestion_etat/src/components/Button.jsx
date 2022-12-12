import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button({ text, ...props }) {
    const theme = useContext(ThemeContext);

    return (
        <button { ...props } className={ `btn-theme-${theme}` }>{ text }</button>
    );
}

export default Button;