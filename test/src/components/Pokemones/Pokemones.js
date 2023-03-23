import axios from "axios";
import { useState } from "react";

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [numero, setNumero] = useState(0);
  // const go_fetch_pokemon = (ev) => {
  //   //with fetch
  //   ev.preventDefault();
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=" + numero + "/")
  //     .then((response) => response.json())
  //     .then((response) => setPokemones(response.results));
  // };
  const go_fetch_pokemon = (ev) => {
    // with axios
    ev.preventDefault();
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=" + numero + "/")
      // .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPokemones(response.data.results);
      });
  };
  console.log(numero);

  return (
    <div>
      <form onSubmit={(ev) => go_fetch_pokemon(ev)}>
        <input
          type="text"
          value={numero}
          onChange={(ev) => setNumero(ev.target.value)}
        />
        <button type="submit">Fetch Pokemon</button>
      </form>
      {pokemones.map((pokemon, index) => {
        return (
          <div key={index}>
            {index}
            {pokemon.name}
          </div>
        );
      })}
    </div>
  );
}

export default Pokemones;
