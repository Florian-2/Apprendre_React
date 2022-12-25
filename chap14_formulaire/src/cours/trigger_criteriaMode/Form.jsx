import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

/*
    trigger(champ?: string): Déclanche la validation d'un champ.

    Par défaut useForm affiche une erreur à la fois, mais avec l'option "criteriaMode: 'all'" on peut récupérer toute les erreurs pour un champ.
*/

const yupSchema = yup.object({
    email: yup.string().required("Adresse obligatoire").email("Adresse email invalide"),
    password: yup.string().required("Mot de passe obligatoire").min(6, "Au moins 6 caractères")
});

function Form() {
    const { register, handleSubmit, trigger, setFocus, clearErrors, formState: { errors } } = useForm({
        resolver: yupResolver(yupSchema)
    });

    async function onSubmit(values) {
        console.log(values);
    }

    function validEmail() {
        trigger("email");
        setFocus("email");
    }

    const valid = () => trigger();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" id='email' />
                { errors.email && <span className='error'>{ errors.email.message }</span> }
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input {...register('password')} type="password" id='password' />
                { errors.password && <span className='error'>{ errors.password.message }</span> }
            </div>

            <button type='button' onClick={validEmail}>trigger('email')</button>
            <button type='button' onClick={valid}>trigger()</button>
            <button type='button' onClick={() => clearErrors()}>clearErrors()</button>
        </form>
    );
}

export default Form;