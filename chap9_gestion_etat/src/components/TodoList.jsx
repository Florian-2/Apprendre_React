import EditToto from "./EditTodo";
import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteTodo, toggleTodoDone, toggleEditTodo, saveEditTodo, selectTodo }) {

    return todoList.length ? (
        <div className="todo-list">
            {
                todoList.map((todo) =>
                    todo.edit ? (
                        <EditToto
                            key={todo.id}
                            todo={todo}
                            saveEditTodo={saveEditTodo}
                            cancelEditTodo={toggleEditTodo}
                        />
                    ) : (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            toggleTodoDone={toggleTodoDone}
                            toggleEditTodo={toggleEditTodo}
                            deleteTodo={deleteTodo}
                            selectTodo={selectTodo}
                        />
                    )
                )
            }
        </div>
    ) : <p>Aucune tâche</p>;
}

export default TodoList;