import { useState } from 'react';

export const Formularios = () => {

    const [formulario, setFormulario] = useState({
        email: "test@test.com",
        password: "112345677"
    });

    const onChange = ( value:string, campo:string ) => {
        setFormulario({
            ...formulario,//destructuramos el formulario
            [campo]:value//[campo] computa el valor de la variable
        })
    } 

    return (
        <>
            <h3>Formularios</h3>
            <input 
                type="text"
                className="form-control"
                placeholder="Email" 
                value={formulario.email}
                onChange={ ({target}) => onChange(target.value, 'email')}
            />

            <input 
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={formulario.password}
                onChange={ ({target}) => onChange(target.value, 'password')} 
            />
            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
        
    )
}
