import { useState } from "react";

const PokemonDetail = () => {
    const [pokemon, setPokemon] = useState(null);
    const [input, setInput] = useState("");

    const handleFindPokemon = async ({ id }) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return setPokemon(data);
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Enter id or name here ..." value={input} onChange={(e) => { setInput(e.target.value) }} />
                <button onClick={() => { handleFindPokemon({ id: input }) }}>Find Pokemon</button>
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
