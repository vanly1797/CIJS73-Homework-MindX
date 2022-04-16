import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFetchPoke = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            setPokemon(response.data.results);
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
            setPokemon(response.data.results);
            setIsLoading(false);
        })
    }, []);

    return (
        <div>
            <button onClick={handleFetchPoke}>Fetch Pokemon</button>
            {isLoading && <p>Loading ...</p>}
            {!isLoading && error && <p>Something went wrong</p>}
            {!isLoading && !error && (
                <ul>
                    {pokemon.map((item) => {
                        return <li key={item.url}>{item.name}</li>
                    })}
                </ul>
            )}
        </div>
    );

}

export default Home;