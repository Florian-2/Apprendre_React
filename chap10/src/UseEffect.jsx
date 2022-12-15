import { useState } from "react";
import { useEffect } from "react";

/* useEffect()

    Comment ça marche ?
        useEffect prend en paramètre une fonction de callback qui PAR DEFAUT est exécuter après chaque nouveau rendu ...


    Les dépences:
        comme les watchers

        useEffect(() => {
            // Exécuté après chaque rendu
        });

        useEffect(() => {
            // Exécuté qu'une seule fois après le rendu initial
        }, []);

        useEffect(() => {
            // Exécuté après le rendu initial et à chaque fois que a ou b change
        }, [a, b]);


        A ne pas faire:
            En toute logique ce code provoque une boucle infini.

            const [compteur, setCompteur] = useState(0);
            useEffect(() => {
                setCompteur(compteur + 1);
            });


    La fonction de "clean up":
        Elle sera appelée AVANT chaque nouvelle exécution de l'effet (sauf à la première exécution bien sûr) et lorsque le composant est enlevé du DOM (unmount). Cette fonction peut du coup aussi être utils pour retirer un eventListener sur 'window' par exemple.

        useEffect(() => {
            const connection = createConnection();
            connection.connect();

            return () => connection.disconnect();
        }, []);

*/

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return <h1>{ time } seconde{ time > 1 && "s" }</h1>;
}


// Dans cet exemple si je modifie "inputValue" la fonction passer à useEffect sera appeller, en revanche si je modifie "count" elle ne sera pas déclancher car "count" ne fait pas partie des dépendences du useEffect.
function UseEffectWithDep() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log("useEffect");
        document.title = inputValue;
    }, [inputValue]); // Ici la fonction de callback passer à useEffect sera exécuter QUE SI "inputValue" change de valeur

    const inc = () => setCount(count + 1);
    const handleChange = (e) => setInputValue(e.target.value);

    return (
        <>
            <button onClick={inc}>{ count } +1</button>

            <input type="text" value={inputValue} onChange={handleChange}/>
        </>
    );
}

function Basic() {
    console.log("render");

    useEffect(() => {
        console.log("useEffect");
        // Le code de cette fonction sera exécuté après chaque nouveau rendu
    });

    return <p>Exemple de base</p>;
}

function UseEffect() {
    return (
        // <Basic/>
        // <UseEffectWithDep/>
        <Timer/>
    );
}

export default UseEffect;