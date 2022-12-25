import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

/*
    La gestion d'erreur:
        Pour gérer les erreurs qui sont envoyé par le serveur on utilise la fonction "setError()" elle prend en paramètre le nom du champ sur le quel on applique l'erreur et en second paramètre un objet avec une clé "type" et "message".
*/

function Form() {
    const { register, handleSubmit, clearErrors, setError, setFocus, formState: { isSubmitting, errors } } = useForm();

    useEffect(() => {
        setFocus("firstname");
    }, [setFocus])

    async function onSubmit(values) {
        try {
            clearErrors();
            const response = await fetch('https://restapi.fr/api/testr', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            throw new Error('le prénom doit contenir 5 caractères (erreur serveur)');

            // const newUser = await response.json();
            // reset();
        }
        catch (e) {
            setError('firstname', { type: 'length', message: e.message });
            setFocus('firstname');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="firstname">Prénom</label>
                <input {...register('firstname')} type="text" id='firstname' />
                { errors.firstname && <span className='error'>{ errors.firstname.message }</span> }
            </div>

            <button disabled={isSubmitting}>{ isSubmitting ? "Chargement..." : "Valider" }</button>
        </form>
    );
}

export default Form;