import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/pokeCard.css';
import { useNavigate } from 'react-router-dom';



const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

const PokeCard = ({ url }) => {

  const [pokemon, getPokemon] = useFetch();

  const navigate =useNavigate();

  useEffect(() => {
    getPokemon(url);
  }, []);

  const hadlePokemon = () => {
       navigate(`/pokedex/${pokemon.id}`);
  }

  const backgroundPokemon = colours[pokemon?.types[0].type.name]

  return (
    <article onClick={hadlePokemon} className='pokecard '>
      <div  style={{padding:"8px",  borderRadius:"13px", background:backgroundPokemon }}>
      <figure className='pokecard_img'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt='pokemonimage' />
      </figure>
   <div style={{background:"#fff", textAlign:"center", padding:"10px", borderRadius:"0 0 13px 13px" }} >
<div style={{marginTop:"50px"}}>
<h3 className='pokecard_name' style={{color:backgroundPokemon}}>{pokemon?.name}</h3>
      <ul className='pokecard_types'>
        {
           pokemon?.types.map(type => (
            <span className={`slot${type.slot}`} key={type.type.url}>{type.type.name}</span>
           ))
        }
      </ul>
     <span style={{color:"#ccc"}}>type</span>
     <hr/>
     <ul className='pokecard_stats'>
      {
        pokemon?.stats.map(stat =>(
          !stat.stat.name.includes('-') &&
          <li key={stat.stat.url}><span style={{color:"#ccc"}}>{stat.stat.name}</span>{stat.base_stat}</li>
        ))
      }
     </ul>
</div>
   </div>
     </div>
    </article>
  )
}

export default PokeCard;
