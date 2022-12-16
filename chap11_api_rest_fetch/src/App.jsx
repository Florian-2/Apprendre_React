import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import { useEffect } from 'react';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        let shouldCancel = false; // (race conditions) est utile pour ne pas rendre deux fois le composant s'il y a deux requêtes successives, ici on est dans le composant racine APP donc peut de change qu'il soit rendu plusieurs d'affilé mais bon...
        async function fetchTodos() {
            try {
                setIsLoading(true);
                const response = await fetch("https://restapi.fr/api/todo");

                if (response.ok) {
                    const todos = await response.json();

                    if (!shouldCancel) {
                        if (Array.isArray(todos)) {
                            setTodoList(todos);
                        } else {
                            setTodoList([todos]);
                        }
                    }
                }
            } 
            catch (error) {
                console.log('Oops, erreur');
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchTodos();

        return () => {
            shouldCancel = true;
        }
    }, [])

    function addTodo(todo) {
        setTodoList([...todoList, todo]);
    }

    function deleteTodo(id) {
        setTodoList(todoList.filter((todo) => todo._id !== id));
    }

    function handleSubmit() {
        if (inputValue.length) {
            createTodo();
        }
    }

    async function createTodo() {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch('https://restapi.fr/api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: inputValue
                })
            });
            console.log(response);

            if (response.ok) {
                const todo = await response.json();
                addTodo(todo);
                setInputValue('');
                return;
            } 
            else {
                setError("Oops, une erreur");
            }
        } 
        catch (e) {
            setError('Oops, une erreur');
        } 
        finally {
            setIsLoading(false);
        }
    }

    function handlePressEnter(e) {
        if (e.code === 'Enter') {
            handleSubmit();
        }
    }

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <div className="container">
            <div className="form-input">
                <input type="text" value={inputValue} onChange={handleChange} onKeyUp={handlePressEnter}/>
                <button onClick={handleSubmit}>{ isLoading ? 'Chargement...' : 'Ajouter' }</button>

                { error && <p>{error}</p> }
            </div>

            { isLoading ? <p>Chargement...</p> : <TodoList todoList={todoList} deleteTodo={deleteTodo}/> }
        </div>
    );
}

export default App;