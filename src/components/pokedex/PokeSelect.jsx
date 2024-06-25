import React, { useEffect,useRef} from 'react';
import useFetch from '../../hooks/useFetch';

const PokeSelect = ({setSelectValue}) => {

  const [types, getTypes] = useFetch();

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type/';
    getTypes(url)
  }, []);

  const selectOption = useRef();

  const handlechange = ()=>{
    setSelectValue(selectOption.current.value);
  }

  return (
    <select  ref={selectOption} onChange={handlechange} style={{marginLeft:20}} className='poke-input'>
      <option value=''>Todos los pokemones</option>
      {
        types?.results.map(type => (
          <option key={type.url} value={type.url}>{type.name}</option>
        ))
      }
      
    </select>
  )
}

export default PokeSelect;