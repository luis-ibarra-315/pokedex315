import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import "./styles/PokeInfo.css"

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


const PokeInfo = () => {
  const params = useParams();

  const [pokemon, getpokemon] = useFetch();

  const backgroundPokemon = colours[pokemon?.types[0].type.name]

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    getpokemon(url);
  }, []);

  console.log(pokemon);


  const pStyles = {
    color:"#000",
    margin:"0 10px"
  }

  const pInfo = {
    color:"#000",
    fontWeight:"bold",
    margin:"0 10px"
  }

  return (
    <section className ='pokeinfo' style={{
      width:"100%",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>

      <div style={{
        width:"50%",
        marginTop:"100px",
        textAlign:"center",
      }}>

      <div  style={{
        background:backgroundPokemon,
        position:"relative",
        width:"100%",
        height:"90px",
       marginBottom:"10px"
      }}>
        <div  style={{
          position:"absolute",
          bottom:"-15px",
          left: "50%",
    transform: "translate(-50%, 0)"
        }} >

        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt ='pokemon image' width={200}/>
        </div>
   
      </div>
      <span># {pokemon?.id}</span>
      <h2 style={{
        color:backgroundPokemon,
        margin:"10px 0"
      }}>{pokemon?.name}</h2>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div >
          <p style={pStyles}>Peso</p>
          <p style={pInfo}>{pokemon?.weight}</p>
        </div>
        <div >
        <p style={pStyles}>Altura</p>
          <p style={pInfo}>{pokemon?.height}</p>
        </div>
       
      </div>
      
      <div>

        <div style={{
          display:"flex",
          justifyContent:"space-between",
          margin:"10px 0"
        }}>
          <div style={{textAlign:"center", width:"49%"}}>
            <h2>Tipo</h2>

          <div style={{display:"flex", justifyContent:"space-between", margin:"15px 0"}}>
          {
            pokemon?.types.map((type, index) => (
              <div key={type.type.url} style={{width: pokemon?.types.length > 1 ? "48%" : "100%", background:colours[pokemon?.types[index].type.name], color:"#FFF", padding:"5px"}}>{type.type.name}</div>
            ))
          }
          </div>
          </div>
          <div style={{textAlign:"center", width:"49%"}}>

          <h2>habilidades</h2>
          <div style={{display:"flex", justifyContent:"space-between", margin:"15px 0"}}>
          {
            pokemon?.abilities.map(skill => (
              <div key={skill.ability.url} style={{width:pokemon?.abilities.length > 1 ? "48%" : "100%",
          border:"1px solid #D3D3D3",
          padding:"5px"
          }}>{skill.ability.name}</div>
            ))
          }
          </div>
          
          </div>
        </div>

      </div>


      <div style={{width:"100%", textAlign:"start"}}>
        <h2>Stats</h2>
        {
          pokemon?.stats.map(stat => (

            <div key={stat.stat.url} style={{margin:"15px"}}>
              <div style={{
              display:"flex",
              justifyContent:"space-between",
              margin:"6px 0"
            }}>
                <h3>{stat.stat.name.toUpperCase()} :</h3>
                <span>{stat.base_stat}/150</span>
              </div>
              <div>

              </div>
              <div key = {stat.stat.url}><div className='stats_bar'><div style={{width:`${stat.base_stat/1.5}%`}} className ='stats_prog'></div></div></div>
            </div>
          ))
        }
      </div>


      <section style={{margin:"30px 0"}}>
        
      <h2 style={{textAlign:"start", marginBottom:"20px"}}>Movimientos</h2>
      <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}> 
        {
         pokemon?.moves.map(move =>  (
          <div key={move.move.url} style={{
            background:"#E5E5E5",
            padding:"5px 10px",
            margin:"5px",
            borderRadius:"50px",
            minWidth:"195px",
            width:"17%",
            margin:"10px 0"
          }}>{move.move.name} </div>
        )) 
        }
       </div>
      </section>

      </div>
      
    </section>
  )
}

export default PokeInfo;
