import { useState, useEffect } from 'react';

export function useFetchRecipes() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (response.ok) {
                    const fetchedData = await response.json();
                    setUsers(Array.isArray(fetchedData) ? fetchedData : [fetchedData]);
                }
                else {
                    setError('Error');
                }
            }
            catch (e) {
                setError('Error');
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return { users, isLoading, error };
}