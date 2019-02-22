import React from 'react';
import Botonito from './modulos/Botonito';
import BotonConEstado from './BotonConEstado';
import ComponenteInput from './ComponenteInput';
import Experimento from './Experimento';

// stateless component
function App(props) {
    function mostrarConAlert(param) {
        alert('esta es la forma de ES5');
        alert(param);
    }
    return (
        <div>
            <h1>Bienvenidos al curso de {props.nombreCurso} :: Clase 2</h1>
            <h2>{props.descripcion}</h2>
            <Botonito fnCallBack={mostrarConAlert}></Botonito>
            <br /><br />
            <Botonito fnCallBack={z => z}></Botonito>
            <br /><br />
            <BotonConEstado estadoInicial={1000}></BotonConEstado>
            <hr />
            <ComponenteInput onReport={ z => alert(z) }></ComponenteInput>
            <hr /><hr />
            <Experimento></Experimento>
        </div>
    );
}

export default App;