import { useState, useRef, forwardRef } from 'react';

/* useRef

    useRef c'est quoi ?
        Permet de crée une sorte de super variable contenant une valeur qui sera sauvegarder entre chaque rendu exactement comme useState sauf que la on à pas besoin de "set" si on veut modifier la valeur ET que si la valeur change le composant ne sera pas re-rendu.

        A savoir: La valeur contenu dans le useRef n'est pas censé être présent dans la partie JSX.


    Dans l'exemple ci-dessous a chaque fois que l'on clique sur le bouton incrémente le state "count" change de valeur donc un re-rendu du composant sera effectué, mais ici on utilise pas "count" dans la partie JSX donc est-ce vraiment nécessaire de faire un nouveau rendu du composant si le JSX n'a pas changé ? Et bien non (pas forcément en tout cas).

    Le composant "WithRef()" montre la solution:

*/
function Basic() {
    console.log("render");

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <button onClick={handleClick}>Clique</button>
    );
}


function WithRef() {
    console.log("render");

    const count = useRef(0);
    console.log(count); // { current: 0 }

    function handleClick() {
        count.current++;
        console.log(count);
    }

    return (
        <button onClick={handleClick}>Clique</button>
    );
}



// Utiliser "useRef" pour récupérer un élément du DOM
function RefDOM() {
    const inputRef = useRef(null);
    console.log(inputRef); // null, car le input n'est pas encore présente dans le DOM

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <button onClick={focus}>Focus input</button>
            <input type="text" ref={inputRef} />
        </>
    )
}

/* "useRef" DOM sur un composant

    Pour appliquer une ref sur un composant il faut utiliser "forwardRef(props, maRef)" (qui retourne un composant)

*/
const Input = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});

function RefDOM2() {
    const inputRef = useRef(null);

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <button onClick={focus}>Focus input</button>
            <Input ref={ inputRef }/>
        </>
    )
}

function UseRef() {
    return (
        // <Basic/>
        // <WithRef/>
        // <RefDOM/>
        <RefDOM2/>
    );
}

export default UseRef;