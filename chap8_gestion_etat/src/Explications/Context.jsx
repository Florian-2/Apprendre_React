/*
    Avec le shémas de composant ci-dessous, si je souhaite récupérer des donnée dans le composant C qui viennent du composant root (Render) je suis obliger de passez des props au composant A-B puis C.

    Donc voilà comment régler ça avec le Context (useContext() - createContext())

    Comment ca marche ?
        D'abord il faut crée un context via "createContext()", on peut éventuellement lui passer une valeur par défaut, ensuite pour utiliser ce context il faut juste utiliser "useContext()" dans le composant ou on veut récupérer le contexte et à partir de la on aura accès à la valeur par défaut du context.

        A savoir, on peut bien sur modifier la valeur du context depuis un composant parent (de celui ou on récupère le context) via un Provider (<dataContext.Provider>), et ce provider prend une props "value" qui peut contenir la nouvelle valeur du context.
*/

import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const dataContext = createContext("Valeur par défaut");

function A() {
    const data = useContext(dataContext);
    console.log(data); // "valeur par défaut"

    return (
        <>
            <h1>A ({data})</h1>
            <B/>
        </>
    );
}

function B() {
    const [count, setCount] = useState(0);

    const inc = () => setCount(count + 1);

    return (
        <>
            <h1>
                B
                <button onClick={inc}>+1</button>
            </h1>

            <dataContext.Provider value={count}>
                <C/>
            </dataContext.Provider>
        </>
    );
}

function C() {
    const data = useContext(dataContext);

    return (
        <>
            <h1>C</h1>
            <p>{ data }</p>
        </>
    );
}

function Render() {
    return <A/>;
}

export default Render;