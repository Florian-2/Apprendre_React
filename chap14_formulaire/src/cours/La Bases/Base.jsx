import { useForm } from 'react-hook-form';

/*
    A savoir:
        Par défaut quand on écrit dans un champ il ne va pas re-rendre le composant (comme c'est le cas sans librairie) ce qui est une bonne chose mais si par exemple je veux afficher la valeur d'un input en temp réel, et bien il faut utiliser la fonction "watch()", le seul fait d'invoquer la fonction dans le composant va changer le comportement par défaut, et donc à fois qu'on va changer la valeur d'un input il va re-rendre le composant.

    useForm(): Contrôle l'ensemble du formulaire.

    handleSubmit(): Elle sert notament à bloquer le comportement par défaut lors du clique sur le button submit d'un formulaire, elle aussi invoquer la fonction (en premier paramètre) et lui passer les valeurs du formulaire, elle prend aussi en second paramètre une fonction qui gère les erreurs et fonctionne de la même manière que celle qu'on passe en premier paramètre.

    register(name: string): Permet d’enregistrer un champ et d'y appliquer des règles de validation.

    getValues(): Cette méthode permet de lire les valeurs du formulaire sans re-déclencher un rendu ni s'abonner aux changements des champs avec des écouteurs d'événement.
*/

function Base() {
    const { register, getValues, handleSubmit, watch, reset } = useForm();

    // watch();
    // watch("firstname");
    // console.log(getValues());

    function onSubmit(data) {
        console.log(data);
        console.log(getValues()); // Return tout les champs du formulaire
        console.log(getValues("firstname")); // Return juste la valeur du champ "firstname"
    }

    function onError(errors) {
        console.log(errors);
    }

    const getFormValues = () => console.log(getValues());
    const resetForm = () => reset();

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="form-group">
                <label htmlFor="firstname">Prénom</label>
                <input { ...register("firstname") } type="text" id="firstname"/>
            </div>

            <button type="submit">Valider</button>
            <button type="button" onClick={getFormValues}>getValues()</button>
            <button type="button" onClick={resetForm}>reset()</button>
        </form>
    );
}

export default Base;