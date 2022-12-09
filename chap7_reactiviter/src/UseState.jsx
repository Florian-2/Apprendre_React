import { useState } from "react";

function State() {
    /*
        useState() retourn un tableau, son premier élément correspond à la valeur de d'état (ici 0) et le second élément est une fonction qui doit être utilisé quand on souhaite modifier la valeur.

        A savoir: A chaque appel de useState React va programmer un re-render qui sera effectuer dés que l'on a plus de code exécuter pour mêttre à jour l'affichage (voir la vidéo ./useState.mp4).
    */
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <>
            <p>{ count }</p>
            <button onClick={increment}>+1</button> 
        </>
    );
}

export default State;