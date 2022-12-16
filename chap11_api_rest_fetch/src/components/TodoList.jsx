import { useState } from "react";

function TodoList({todoList, deleteTodo}) {
    const [isLoading, setIsLoading] = useState(false);

    async function handleDeleteTodo(id) {
        try {
            setIsLoading(true);
            const reponse = await fetch(`https://restapi.fr/api/todo/${id}`, {
                method: 'DELETE',
            });

            if (reponse.ok) {
                deleteTodo(id);
            } else {
                console.log('Oops, erreur');
            }
        } 
        catch (e) {
            console.log('Oops, erreur');
        }
        finally {
            setIsLoading(false);
        }
    }

    return todoList.length ? (
        <ul>
            {todoList.map((todo) => (
                 <li key={todo._id} className="item">
                    { todo.content }
                    <button onClick={() => handleDeleteTodo(todo._id)}>{ isLoading ? 'Chargement...' : 'Supprimer' }</button>
                </li>
            ))}
        </ul>
    ) : (
        <p>Aucune tâche en cours </p>
    );
}

export default TodoList;