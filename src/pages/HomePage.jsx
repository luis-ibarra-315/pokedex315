import react, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTrainer } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';
import pokeLogo from "../../public/assets/logo.jpeg"

const HomePage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = '';
    navigate('/pokedex');

  }

  return (
    <>
    <div className='poke-container'>
      <img src={pokeLogo} alt="poke" width={400}/>
      <h1>¡Hola entrenador!</h1>
      <p>Para comenzar dame tu nombre</p>
      <form onSubmit={handleSubmit}>
        <input ref={textInput} type='text' placeholder='Tu nombre' className='poke-input'/>
        <button className='poke-button'>Comenzar</button>
      </form>
    </div>
  </>
  )
}

export default HomePage;
