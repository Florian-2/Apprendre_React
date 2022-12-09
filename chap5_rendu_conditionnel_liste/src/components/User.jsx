export function WithMap() {
    /*
        .map() retourn un tableau d'élément, ensuite React lui va simplement récupérer un par un ces élément et les affichier dans le DOM.
    */
    const users = ["Florian", "Lucas", "Julie"];
    const usersWithJSX = users.map((user, i) => (
        <li key={i}>{ user }</li>
    ));

    return (
        <>
            <h1>Avec .map()</h1>

            <ul>
                { usersWithJSX }
            </ul>

            <ul>
                { [21, 0, 7].filter((n) => n > 5).map((n, i) => <li key={i}>{ n }</li>) }
            </ul>
        </>
    );
}

export function WithoutMap() {
    /*
        Par défaut React va essayer de convertir en jsx chaque élément du tableau, mais par exemple si on a un tableau d'objet ça ne fonctionnerais pas du coup.
    */
    const numbers = [<p>Florian</p>, <p>Lucas</p> , <p>Paul</p>];

    return (
        <div>
            {/* 
                <p>Florian</p>
                <p>Lucas</p>
                <p>Paul</p>
            */}
            { numbers }
        </div>
    );
}

function User() {
    return (
        <>
            <WithoutMap/>

            <hr />

            <WithMap/>
        </>
    );
}

export default User;