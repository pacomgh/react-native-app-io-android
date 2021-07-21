import { useState } from 'react'

export const Contador = () => {

    const acumular = (numero:number) => {
        setValor(valor+numero);
        
    }

    const [valor, setValor] = useState(0)
    return (
        <>
            <h3>Contador: <small>{valor}</small></h3>            
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
