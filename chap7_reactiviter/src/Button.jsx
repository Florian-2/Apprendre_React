function Button({ handleClick, children }) {
    return (
        <button onClick={handleClick}>{ children } (composant Button.jsx)</button>
    );
}

export default Button;