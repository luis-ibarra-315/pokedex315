import React from 'react';

const PokePages = ({page,setpage,total}) => {
  return (
    <div>
        <button>{'<'}</button>
        <span>{page}/{total}</span>
        <button>{'>'}</button>
        </div>
  )
}

export default PokePages;