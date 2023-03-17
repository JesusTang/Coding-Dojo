// import { useParams } from "react-router-dom";
// import Pokemones from "../Pokemones/Pokemones";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import { useState } from "react";

function APIWalker() {

  const [id, setId] = useState(0)
  const [category, setCategory] = useState('')
  const [info, setInfo] = useState([])
  const [planet, setPlanet] = useState([])
  const [buscado, setBuscado] = useState(false)
  const [errorState, setErrorState] = useState(false)
  // const navegar = useNavigate()

  // const searchForInfo = async (ev) => {
  //   ev.preventDefault()
  //   setCategory(ev.target.dropdown.value)
  //   setId(ev.target.idinput.value)
  //   setBuscado(true)
  //   try {
  //     const response = await fetch('https://swapi.dev/api/'+category+'/'+id+'/')
  //       .then(response=>{
  //         setInfo(response.data)
  //         return response.data
  //       })
  //       .then((data) => {return getPlanet(data)})
  //       .then(() => console.log(info))
  //       .then(setErrorState(false))
  //       setErrorState(false)
  //   }
  //   catch (error) {setErrorState(true)}
  // }


  const searchForInfo = async (ev) => {
    ev.preventDefault()
    setCategory(ev.target.dropdown.value);
    console.log(category);
    await setId(1);
    console.log(id);
    console.log(ev.target.idinput.value);
    setBuscado(true)
    try {
      // console.log(id)
      const response = await fetch('https://swapi.dev/api/'+category+'/'+id+'/')
      const data = await response.json()
      console.log(data)
      setInfo(data)
      await getPlanet(data)
      setErrorState(false)
    }
    catch (error) {
      if (error) {
        console.log('error =', error)
        // setErrorState(true)
      }
    }
  }
  const getPlanet = async (link) => {
    // console.log(link.homeworld)
    const planet = await fetch(link.homeworld)
    const data = await planet.json()
    setPlanet(data)
  }

  var info_section 
  if (errorState === true) {
    var error_message = 
    <div>
      <h3>Estos no son los droides que estas buscando</h3>
      <img src='https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png' alt='Obi Wan Kenobi'/>
    </div>
  }
  else {
    if (category === 'people') {
      info_section = 
      <div>
      <h1>
        {info.name}
      </h1>
      <ul>
        <li>Height: {info.height} cm </li>
        <li>Hair Color: {info.hair_color} </li>
        <li>Birth Year: {info.birth_year} </li>
        <li>Homeworld: {info.homeworld} </li>
        <li>Homeworld: {planet.name} </li>
      </ul>
      </div>
      // setErrorState(false)
    }
    if (category === 'starships') {
      info_section = 
      <div>
      <h1>
        {info.name}
      </h1>
      <ul>
        <li>Model: {info.model} </li>
        <li>Manufacturer: {info.manufacturer} cm </li>
        <li>Max Atmosphering Speed: {info.max_atmosphering_speed} </li>
        <li>Crew: {info.crew} </li>
      </ul>
      </div>
      // setErrorState(false)
    }
    if (category === 'vehicles') {
      info_section = 
      <div>
      <h1>
        {info.name}
      </h1>
      <ul>
        <li>Model: {info.model} </li>
        <li>Manufacturer: {info.manufacturer} cm </li>
        <li>Max Atmosphering Speed: {info.max_atmosphering_speed} </li>
        <li>Crew: {info.crew} </li>
      </ul>
      </div>
      // setErrorState(false)
    }
    if (category === 'planets') {
      info_section = 
      <div>
        <h1>{info.name}</h1>
      <ul>
        <li>Population: {info.population} cm </li>
        <li>Climate: {info.climate} </li>
        <li>Gravity: {info.gravity} </li>
        <li>Terrain: {info.terrain} </li>
        <li>Population: {info.population} </li>
      </ul>
      </div>
      // setErrorState(false)
    }
    if (category === 'species') {
      info_section = 
      <div>
      <h1>
        {info.name}
      </h1>
      <ul>
        <li>Classification: {info.classification} cm </li>
        <li>Designation: {info.designation} </li>
        <li>Average Height: {info.average_height} </li>
        <li>Skin Colors: {info.skin_colors} </li>
        <li>Hair Colors: {info.hair_colors} </li>
        <li>Average Lifespan: {info.average_lifespan} </li>
      </ul>
      </div>
      // setErrorState(false)
    };
    
    // setErrorState(false)
  }

  return (
    <div className="mt-5 p-3 container bg-light">
      <h1 className="text-secondary">Welcome to the APIWalker search engine</h1>
      <form className="text-secondary" onSubmit={searchForInfo}>
        <div className="">
          <label htmlFor="dropdown" className="">Search for: </label>
          <select defaultValue={'people'} name="dropdown" className="ms-1 ">
            <option value="people">People</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
          </select>
          <label htmlFor="idinput" className="ms-4"> Id</label>
          <input defaultValue={id} type="number" name="idinput" min={1} className="ms-1"/>
              <button type="submit" className="ms-1">Submit</button>
        </div>
      </form>
      <div>
        {category} 
        {id} 
      </div>
      {/* {buscado === true (errorState ? error_message : info_section)} */}
      {buscado ? (errorState ? error_message : info_section) : null}
    </div>
  );
}

export default APIWalker;