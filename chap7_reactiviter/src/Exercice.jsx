import { useState } from "react";

function TodoUsers() {
    const [numbers, setNumbers] = useState([]);

    function handleAddNumberToList() {
        const random = Math.floor(Math.random() * 500);
        const newNumbers = [...numbers, random];
        setNumbers(newNumbers);
    }

    function handleDeleteNumber(index) {
        const newNumbers = numbers.filter((_, i) => i !== index);
        setNumbers(newNumbers);
    }

    function handleSort() {
        const newNumbers = [...numbers].sort((a, b) => a - b);
        setNumbers(newNumbers);
    }

    return (
        <div className="random">
            <button onClick={handleAddNumberToList}>Ajouter un nombre à la liste</button>
            <button onClick={handleSort}>Trier par ordre croissant</button>

            <h2>Liste de nombres aléatoires</h2>

            <ul>
                {
                    numbers.map((n, i) => (
                        <li key={i}>
                            <span>{ n }</span>
                            <button onClick={() => handleDeleteNumber(i)}>Supprimer</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoUsers;