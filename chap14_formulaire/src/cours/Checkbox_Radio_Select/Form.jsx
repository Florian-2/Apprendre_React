import { useForm } from 'react-hook-form';


function Form() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box-form">
                <div className="form-group flex-row">
                    <label htmlFor="man">Homme</label>
                    <input {...register("sexe")} type="radio" value="man" id="man" />
                </div>

                <div className="form-group flex-row">
                    <label htmlFor="woman">Femme</label>
                    <input {...register("sexe")} type="radio" value="woman" id="woman" />
                </div>
            </div>

            <div className="form-group flex-row">
                <label htmlFor="admin">Administrateur</label>
                <input {...register("admin")} type="checkbox" id="admin" />
            </div>

            <div className="form-group flex-row">
                <label htmlFor="color">Couleur</label>
                <select { ...register("color") } id="color">
                    <option value="blue">Blue</option>
                    <option value="red">Rouge</option>
                    <option value="yellow">Jaune</option>
                    <option value="orange">Orange</option>
                </select>
            </div>

            <button>Valider</button>
        </form>
    );
}

export default Form;