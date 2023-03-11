import { useState} from 'react';
// import axios from 'axios';

function Pokemones() {
    const [pokemones, setPokemones] = useState([])
    const [numero, setNumero] = useState(0)
    const go_fetch_pokemon = (ev) => {
        ev.preventDefault()
        fetch('https://pokeapi.co/api/v2/pokemon?limit='+numero+'/')
            .then(response => response.json())
            .then(response => setPokemones(response.results))
    };

    console.log(pokemones)

    return ( 
        <div>
            <form onSubmit={go_fetch_pokemon}>
                <input type='text' value={numero} onChange={ev => setNumero(ev.target.value)}/>
            <button type='submit'>Fetch Pokemon</button>
            </form>
            {pokemones.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}

export default Pokemones;