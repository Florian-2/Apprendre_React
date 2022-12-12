import { useState } from 'react';
import Button from './Button';


function EditToto({ todo, saveEditTodo, cancelEditTodo }) {
    const [input, setInput] = useState(todo.content);

    function handleChange(e) {
        const value = e.target.value;
        setInput(value);
    }

    function handleSubmit() {
        if (input.length) {
            saveEditTodo(todo.id, input);
            setInput('');
        }
    }

    function handlePressEnter(e) {
        if (e.code === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="edit">
            <input 
                type="text"
                placeholder="Ajouter une tâche"
                value={input}
                onChange={handleChange}
                onKeyUp={handlePressEnter}
            />

            <Button text="Annuler" onClick={() => cancelEditTodo(todo.id)}/>
            <Button text="Enregister" onClick={handleSubmit}/>
        </div>
    );
}

export default EditToto;