import { useReducer } from 'react';
import './App.css'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Render from './Explications/Context';
import { ThemeContext } from './context/ThemeContext';
import todoReducer from './reducers/todoReducer';
import Counter from './Explications/Reducer';

function App() {
    const [state, dispatch] = useReducer(todoReducer, {
        theme: 'dark',
        todoList: [],
    });

    function addTodo(content) {
        dispatch({
            type: 'ADD_TODO',
            content,
        });
    }

    function deleteTodo(id) {
        dispatch({
            type: 'DELETE_TODO',
            id,
        });
    }

    function toggleTodoDone(id) {
        dispatch({
            type: 'TOGGLE_TODO',
            id,
        });
    }

    function toggleEditTodo(id) {
        dispatch({
            type: 'TOGGLE_EDIT_TODO',
            id,
        });
    }

    function editTodo(id, content) {
        dispatch({
            type: 'EDIT_TODO',
            id,
            content,
        });
    }

    function selectTodo(id) {
        dispatch({
            type: 'SELECT_TODO',
            id,
        });
    }


    function handleChangeTheme(e) {
        dispatch({
            type: 'SET_THEME',
            theme: e.target.value,
        });
    }

    return (
        <ThemeContext.Provider value={state.theme}>
            <div className={ `App theme-${state.theme}` }>
                <select onChange={handleChangeTheme} value={state.theme}>
                    <option value="dark">Sombre</option>
                    <option value="ligth">Clair</option>
                </select>

                <h1>Todo-List</h1>

                <AddTodo addTodo={addTodo}/>
                <TodoList 
                    todoList={state.todoList} 
                    deleteTodo={deleteTodo} 
                    toggleTodoDone={toggleTodoDone}
                    toggleEditTodo={toggleEditTodo}
                    saveEditTodo={editTodo}
                    selectTodo={selectTodo}
                />

                {/* <hr />
                <Render/> */}
            </div>
        </ThemeContext.Provider>

        // <Counter/>
    )
}

export default App;