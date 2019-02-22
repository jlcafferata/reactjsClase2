import React from 'react';

// stateless component
function Botonito(props) {
    return (
        <input type="button" value={props.valor} onClick={props.fnCallBack}></input>
    );
}

export default Botonito;