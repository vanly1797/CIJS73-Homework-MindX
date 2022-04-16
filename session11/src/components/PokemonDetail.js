import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetail = () => {
    const [pokemon, setPokemon] = useState(null);
    const params = useParams();

    console.log(pokemon);
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then((respone) => {
                setPokemon(respone.data);
            });
    }, [params.name]);

    const handleFindPokemon = () => {

    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Enter id or name here ..." />
                <button onClick={handleFindPokemon}>Find Pokemon</button>
            </div>
            {pokemon && (
                <div>
                    <p>Name:<b>{pokemon.name}</b></p>
                    <p>Image:</p>
                    <div>
                        <img src={pokemon.sprites.front_default} alt="" />
                        <img src={pokemon.sprites.back_default} alt="" />
                    </div>

                </div>
            )}
        </div>);
};

export default PokemonDetail;
