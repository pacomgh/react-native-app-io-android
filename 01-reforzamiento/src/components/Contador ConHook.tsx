import { useState } from 'react'
import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    //usamos el hook desestructurado
    const {valor, acumular} = useCounter();    
    
    return (
        <>
            <h3>Contador con Hook: <small>{valor}</small></h3>            
            <button 
            className="btn btn-primary"
            onClick={() => acumular(1)}
            >+</button>
            &nbsp;
            <button 
            className="btn btn-primary"
            onClick={() => acumular(-1)}
            >-</button>
        </>
    )
}