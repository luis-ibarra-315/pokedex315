import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/pokedex.css'
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';
import PokePages from '../components/pokedex/PokePages';
const Pokedex = () => {

  const [page,setpage] = useState(1);  
  const [selectValue,setSelectValue] = useState('');
  const [inputValue,setInputValue] = useState('');
  const [pokemons, getPokemons,getType] = useFetch();

  const trainer = useSelector(store => store.trainer);

  useEffect(() => {
    if (selectValue){
     getType(selectValue);
    }else{
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
      getPokemons(url);
      }
  }, [selectValue]);

  const textIput = useRef(); 

  const handleSubmit = () => {
    event.preventDefault();
    setInputValue(textIput.current.value.tolowerCase().trim());
    textIput.current.value = '';
  }
  console.log(pokemons);

  const pokeSearch = (poke)=> {
    const perName = poke.name.includes(inputValue);
    return perName;
  }

  const quantity = 10;
  const total =  Math.ceil(pokemons?.results.filter(pokeSearch).length / 10);
  const pagination = () => {
    const end = quantity * page;
    const start = end - quantity;
    return pokemons?.results.filter(pokeSearch).slice(start,end);
  }

  return (
    <>
    <section className='pokedex'>
      
      <div className='linea_roja'></div>
      <div className='linea_negra'></div>
     
      
      <h2 className='pokedex__title'><span>Bienvenido {trainer},</span> Aqui podras encontrar tu pokemon favorito</h2>
      <div>
        <form onSubmit= {handleSubmit}>
          <input ref = {textIput} type='text' className='poke-input' placeholder='Busca un pokemon'/>
          <button className='poke-button'>Buscar</button>
          <PokeSelect
        setSelectValue={setSelectValue}
        />
        </form>
       
      </div>
    
      <div className='pokedex_container'>
        {
          pagination()?.map((poke) => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>

      <PokePages
      page={page}
      setpage={setpage}
      total={total}
      />
    </section>
    </>
  )
}

export default Pokedex;
