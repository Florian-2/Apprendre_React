import Button from "./Button";

function TodoItem({ todo, deleteTodo, toggleTodoDone, toggleEditTodo, selectTodo }) {
    return (
        <div className={`todo ${todo.selected && 'selected'}`}>
            <p onClick={() => selectTodo(todo.id)}>
                { todo.content } { todo.done && '✓' }
            </p>

            <div className="actions">
                <Button text="Valider" onClick={() => toggleTodoDone(todo.id)}/>
                <Button text="Modifier" onClick={() => toggleEditTodo(todo.id)}/>
                <Button text="Supprimer" onClick={() => deleteTodo(todo.id)}/>
            </div>
        </div>
    );
}

export default TodoItem;