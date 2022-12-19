import './App.css'
import { useFetch } from './hooks/useFetch';
import { useFetchRecipes } from './hooks/useFetchUsers';
import { useMouse } from './hooks/useMouse'

// https://jsonplaceholder.typicode.com/users
function App() {
    const { x, y } = useMouse();
    // const { users, isLoading, error } = useFetchRecipes();
    const { data: posts, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <div className='container'>
            <p>x: { x } y: { y }</p>

            {/* <p>{ isLoading ? "Chargement..." : `${users.length} users` }</p> */}

            <p>{ isLoading ? "Chargement..." : `${posts.length} posts` }</p>
        </div>
    )
}

export default App