import './App.css';
import BotonClear from './componentes/Clear';
import Pantalla from './componentes/Pantalla';
import '../src/styles/Boton.css'
import Boton from './componentes/Boton';
import { useState} from 'react';
import { evaluate } from 'mathjs';
import Logo from './componentes/Logo';

function App() {

  const [calculadora, valorCalculadora] = useState('');

  const input = valor => {
    valorCalculadora(calculadora + valor);
  }

  const calcularResultado = () => {
    if(calculadora){
    valorCalculadora(evaluate(calculadora));
   }
   else{
    alert("Por favor, ingrese valores para calcular el resultado");
   }
  }



  return (
    <div className="App">
      <Logo imagen="logofree"/>
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
          <Boton detectarClick={ calcularResultado }>=</Boton>
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
