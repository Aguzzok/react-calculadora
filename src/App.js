import './App.css';
import BotonClear from './componentes/Clear';
import Pantalla from './componentes/Pantalla';
import '../src/styles/Boton.css'
import Boton from './componentes/Boton';
import logo from './imagenes/logofree.png'
import { useState} from 'react';

function App() {

  const [calculadora, valorCalculadora] = useState('');

  const input = valor => {
    valorCalculadora(calculadora + valor);
  }



  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} alt="logo freecodecamp" className='logo' />
      </div>
      <div className='calculadora-contenedor'>
        <div className='fila'>
          
        </div>

        <Pantalla calculadora={calculadora}/>

        <div className='fila'>
          <Boton detectarClick={ input }>1</Boton>
          <Boton detectarClick={ input }>2</Boton>
          <Boton detectarClick={ input }>3</Boton>
          <Boton detectarClick={ input }>+</Boton>
        </div>
        <div className='fila'>
          <Boton detectarClick={ input }>4</Boton>
          <Boton detectarClick={ input }>5</Boton>
          <Boton detectarClick={ input }>6</Boton>
          <Boton detectarClick={ input }>-</Boton>
        </div>
        <div className='fila'>
          <Boton detectarClick={ input }>7</Boton>
          <Boton detectarClick={ input }>8</Boton>
          <Boton detectarClick={ input }>9</Boton>
          <Boton detectarClick={ input }>*</Boton>
        </div>
        <div className='fila'>
          <Boton detectarClick={ input }>=</Boton>
          <Boton detectarClick={ input }>0</Boton>
          <Boton detectarClick={ input }>.</Boton>
          <Boton detectarClick={ input }>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => valorCalculadora('')}>Borrar</BotonClear>
        </div>
        </div>
      </div>
  );
}

export default App;
