import React from 'react';
import'./styles/pokeHeader.css';

const PokeHeader = () => {
  return (
    <div className='pokeheader'> 
    <div className='pokeheader_red'> 
      <figure className='pokeheader_img'>
        <img src='../../../assets/pokedex-logo.png' alt='pokedex image'/>
      </figure>
    </div>
    <div className='pokeheader_black'> 
      <div className='pokeheader_outcircle'>
        <div className='pokeheader_incircle'></div>
      </div>
    </div>
    </div>
  )
}

export default PokeHeader;