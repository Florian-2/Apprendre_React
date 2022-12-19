import { useState, useEffect } from 'react';


export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error();
                }

                const fetchedData = await response.json();
                setData(fetchedData);
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

    return { data, isLoading, error };
}