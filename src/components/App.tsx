//Se usan los hooks que vienen disponibles en la librería de reat

import React, {useCallback, useState} from 'react';

const App = (props: {message:string})=>{
    return(
        <>
            <h1>{props.message}</h1>
            <h2>Count:{count}</h2>
            <button>Increments</button>
        </>
    )
}
//en react <></> este se llama fragment, nos permite poner elementos en el dom 
//jsx nos permite trabajar con html, xml dentro de js.


export default App;