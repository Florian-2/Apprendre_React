import { useState } from "react";
import Button from "./Button";

function AddTodo({ addTodo }) {
    const [input, setInput] = useState('');

    function handleChange(e) {
        const value = e.target.value;
        setInput(value);
    }

    function handleSubmit() {
        if (input.length) {
            addTodo(input);
            setInput('');
        }
    }

    function handlePressEnter(e) {
        if (e.code === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="form-group">
            <input 
                type="text"
                placeholder="Ajouter une tâche"
                value={input}
                onChange={handleChange}
                onKeyUp={handlePressEnter}
            />
            <Button text="Ajouter" onClick={handleSubmit} />
        </div>
    );
}

export default AddTodo;