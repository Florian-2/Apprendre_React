/* useLayoutEffect

    Ce hook fonctionne exactement de la même manière que "useEffect" à une différence prêt, la fonction que l'on passe à "useLayoutEffect" est exécuté JUSTE AVANT que le composant soit afficher sur la page (DOM), à ce stade il est présent dans le DOM mais pas encore visible, ce qui nous permet de récupérer des infos sur un élément HTML et éventuellement faire des modifications dans le state du composant.

    A savoir:
        Ce hook est utilisé principalement pour récupérer des infos (taille, position etc...) d'un élément HTML dés le premier rendu et sans utilisé de gestionnaire d'évènement comme un clique ou autre.
*/

import { useState, useRef, useLayoutEffect } from 'react';

export default function App() {
    const [width, setWidth] = useState(0);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        const infos = buttonRef.current.getBoundingClientRect();
        setWidth(infos.width);
    }, []);

    return (
        <>
            <button ref={buttonRef} className="m-10">un bouton</button>
            <p className="m-10">{width}</p>
        </>
    );
}