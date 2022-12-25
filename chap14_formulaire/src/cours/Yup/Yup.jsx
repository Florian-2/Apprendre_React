import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const yupSchema = yup.object({
    email: yup.string().required("Adresse obligatoire").email("Adresse email invalide"),
    password: yup
        .string()
        .required('Le mot de passe est obligatoire')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
    confirmPassword: yup
        .string()
        .required('Vous devez confirmer votre mot de passe')
        .oneOf(
            [yup.ref('password'), ''],
            'Les mots de passe ne correspondent pas'
        )
})

function Yup() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(yupSchema)
    });

    function onSubmit(data) {
        console.log(data);
    }

    function onError(errors) {
        console.log(errors);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input {...register("email")} type="email" id="email" />
                { errors.email && <span className='error'>{ errors.email.message }</span> }
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe </label>
                <input {...register("password")} type="text" id="password" />
                { errors.password && <span className='error'>{ errors.password.message }</span> }
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirmation du mot de passe</label>
                <input {...register("confirmPassword")} type="text" id="confirmPassword" />
                { errors.confirmPassword && <span className='error'>{ errors.confirmPassword.message }</span> }
            </div>

            <button>Valider</button>
        </form>
    );
}

export default Yup;