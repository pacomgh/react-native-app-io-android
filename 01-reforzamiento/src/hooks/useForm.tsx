import { useState } from "react";

export const useForm =<T extends Object> ( formulario: T) => {
    const [state, setState] = useState( formulario );

    const onChange = ( value:string, campo: keyof T ) => {
        setState({
            ...state,//destructuramos el formulario
            [campo]:value//[campo] computa el valor de la variable
        })
    } 

    return {
        ...state,
        formulario: state,
        onChange
    }
}
