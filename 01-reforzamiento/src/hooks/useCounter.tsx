import { useState } from "react";

//enviamos un valor como parametro inicial
//en caso que no se envie el valor inicial es 10
export const useCounter = (inicial:number = 10) => {
    //se coloca la logica y el manejador de estado
    const [valor, setValor] = useState(inicial);

    const acumular = (numero:number) => {
        setValor(valor+numero);        
    }

    //informacion que tiene que exponer el hook
    return{//como objeto literal para expandirlo y destructurar facilmente
        valor,
        acumular
    }
}
