export function ComponentProps(props) { // props OU destructuration { prop1, prop2 }
    return (
        <div>
            <h1>je suis { props.firstname } et j'ai { props.age }ans</h1>
            <button onClick={props.sayHello}>dit bonjour</button>
        </div>
    )
}

export function ComponentChildrenAndProps({ name, children }) {
    console.log(children); // Les éléments enfant qu'on passe au composant lors de l'appel de celui-ci (comme les slots)
    console.log(name); // une props

    return (
        <button>
            { children } - { name }
        </button>
    )
}

function App() {
    const presentation = () => console.log("Salut");

    return (
        <>
            <ComponentProps firstname="Florian" age={20} sayHello={ presentation } />

            <ComponentChildrenAndProps name="Toto">
                <span>Clique</span>
                <span>&#9824;</span>
            </ComponentChildrenAndProps>
        </>
    )
}

export default App;