import styles from './App.module.css';

/*
    Par défaut, les fichiers .css et .scss qui sont utilisé depuis les fichier JSX seront global, c'est à dire que les classes qu'ils contiennent peuvent être utilisé dans n'importe quel composant donc on peut avoir des conflit si on a plusieurs fichiers CSS/SCSS par ce que le builder va prendre tout les fichiers CSS et prendre toutes les règles pour les placer dans un seul fichier css (main.css).

    Pour régler ça on utilise les modules (qui sont gérer par le builder et non pas React), ça consiste à créer des fichier avec l'extension .module.css ce qui aura pour effet de créer des classe css unique et donc éviter les conflits.
*/

function App() {
    const css = {
        color: "white",
        backgroundColor: "black"
    }

    return (
        <>
            <p style={ css }>Lorem ipsum</p>
            <p style={ { color: "red" } }>Lorem ipsum 2</p>

            <hr />

            <p className={ styles.myClass }>P avec une classe</p>

            <hr />

            <div className={ styles.flex }>
                <div className={ styles.item }>1</div>
                <div className={ styles.item }>2</div>
                <div className={ styles.item }>3</div>
            </div>
        </>
    )
}

export default App;