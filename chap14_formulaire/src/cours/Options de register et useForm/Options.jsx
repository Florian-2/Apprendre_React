import { useForm } from 'react-hook-form';

/*
    Validation du formulaire:
        Par défaut la validation du formulaire se déclenche une fois qu'on à valider le formulaire, si on veut changer se comportement il y a une option "mode" sur "useForm" qui peut prendre soit "all" / "onBlur" / "onChange" ou "onTouched".


*/

function Options() {
    const { register, handleSubmit, formState, getValues } = useForm({
        defaultValues: {
            firstname: "John"
        },
        mode: 'onBlur' // mode de validation du formulaire
    });

    function onSubmit(data) {
        console.log({data});
    }

    console.log(formState);

    const rulesFirstname = {
        minLength: { value: 5, message: "Trop court" },
        maxLength: { value: 10, message: "Trop long" },
        required: { value: true, message: "Ce champ est obligatoire" }
    }

    const rulesPassword = {
        required: { value: true, message: "Mot de passe obligatoire" },
    }
    const rulesConfirmPassword = {
        required: { value: true, message: "Confirmation du mot de passe obligatoire" },
        validate(value) {
            if (getValues("password") !== value) {
                return "La confirmation du mot de passe à échoué";
            }

            return true;
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="firstname">Prénom</label>
                <input { ...register("firstname", rulesFirstname) } type="text" id="firstname"/>

                {/* Affichage du message d'erreur */}
                { formState.errors.firstname && <span className="error">{ formState.errors.firstname.message }</span> }
            </div>

            <div className="form-group">
                <label htmlFor="age">Age</label>
                {/* Conversion en Number et event */}
                <input { ...register("age", { 
                    valueAsNumber: true,
                    onBlur(e) {
                        console.log(e, "blur");
                    },
                    onChange(e) {
                        console.log(e, "change");
                    }
                 })} type="number" id="age"/>
            </div>


            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input { ...register("password", rulesPassword) } type="text" id="password"/>

                { formState.errors.password && <span className="error">{ formState.errors.password.message }</span> }
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirmation du mot de passe</label>
                <input { ...register("confirmPassword", rulesConfirmPassword) } type="text" id="confirmPassword"/>

                { formState.errors.confirmPassword && <span className="error">{ formState.errors.confirmPassword.message }</span> }
            </div>

            <button type="submit">valider</button>
        </form>
    );
}

export default Options;