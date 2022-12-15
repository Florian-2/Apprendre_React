/* meme

    HOC c'est quoi ?
        C'est une fonction qui prend en paramètre un composant et qui va retourner une version modifier du composant.

    Le comportement par défaut de React est que si un composant parent à besoin d'être re-rendu, les composants enfant seront aussi re-rendu même si il n'y a aucunne différence entre les 2 rendu, chose qui pourrais poser des problème de perf si l'un des composant enfant est très gourmant. Dans ce cas on peut utiliser "memo" qui est un HOC, donc on lui donne notre composant en argument et il fera en sorte de faire un re-rendu de celui QUE si nécaissaire, par exemple par ce que les props reçu on changé ou que le state du composant on changer.

    A savoir:
        memo peut prendre une second paramètre, qui est une fonction qui prend les ancienne props et les props actuel

        function fonctionDeComparaison(prevProps, nextProps) {
            // Comparaison personnalisée avec les anciennes et nouvelles props
            // Vous devez retourner false pour re-rendre le composant
        }

        memo(function Calendar({ count }) {
            return <input type="date"/>;
        }, fonctionDeComparaison);
*/

import { memo, useState } from "react";


const Calendar = memo(function Calendar({ count }) {
    console.log('render Calendar memo', count);
    return <input type="date"/>;
});

// Ici "Calendar" est re-rendu QUE si sa props "count" change.
function Memo() {
    console.log('render');

    const [input, setInput] = useState("");
    const [count, setCount] = useState(0);

    const handleChange = (e) => setInput(e.target.value);
    const inc = () => setCount(count + 1);

    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={inc}>+1</button>
            <Calendar count={count}/>
        </>
    );
}

export default Memo;