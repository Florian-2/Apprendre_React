import Button from "./Button";
import UseState from "./UseState";

function App() {

    const handleClick = (e) => {
        e.stopPropagation(); // Eviter l'effet bubble (d'éclenche les évènements présent sur les éléments HTML parent)
        console.log('clique 2', e);
    }

    const handleClickWithParam = (e, id) => {
        console.log(id);
    }

    return (
        <>
            <button onClick={() => alert('clique 1')}>Clique 1</button>
            <button onClick={handleClick}>Clique 2</button>

            <hr />

            <button onClick={(e) => handleClickWithParam(e, "id-dsq78")}>Clique avec un paramètre de fonction</button>

            <hr />

            <Button handleClick={handleClick}>
                <span>clique</span>
            </Button>

            <hr />

            <UseState />
        </>
    );
}

export default App;