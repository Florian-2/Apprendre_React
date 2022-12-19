import { useState } from "react";
import { useReducer } from "react";


// Le reducer est une fonction qui gère les différentes actions possibles.
function reducer(state, action) {
    switch (action.type) {
        case "INC":
            const step = action.step || 1;
            // Comme pour useState il ne faut pas modifier nous même la valeur du state, donc on doit créer un nouvel objet (ou autre celon le type de donnée)
            return { count: state.count + step };

        case "DEC":
            return { count: state.count - 1 };

        case "RESET":
            return { count: 0 };

        default:
            throw new Error("Action inconnue");
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 }); // le reducer ET la valeur initial du state (ici count = 0)

    return (
        <>
            <p>Counter: { state.count }</p>
            <button onClick={() => dispatch({ type: "INC", step: input })}>increment</button>
            <button onClick={() => dispatch({ type: "DEC" })}>decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        </>
    );
}

export default Counter;