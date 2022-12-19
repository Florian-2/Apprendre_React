import { MouseEventHandler, ReactNode } from "react";
import './Button.module.css';

type Props = {
    onClick?: MouseEventHandler;
    text?: string;
    children?: ReactNode;
}

function Button({ onClick, text, children }: Props) {
    return <button onClick={onClick}>{text} {children}</button>;
}

export default Button;