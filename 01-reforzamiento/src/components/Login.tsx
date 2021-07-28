import { useEffect, useReducer } from "react";

interface AuthState{
    validando: boolean; 
    token: String | null;
    username: String;
    nombre: String;
}

const initialState: AuthState = {
    validando: true,//apenas se carga el componente se pone en true
    token: null,//si no hay nada o null no esta autenticado
    username: '',
    nombre: ''
}

type AuthAction = { type: 'logout' }

//la accion modifica el state
const authReducer = (state: AuthState, action: AuthAction): AuthState  =>{//regresa siempre un tipo de estado igual al initialstate
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }            
            break;
    
        default:
            return state;
            break;
    }

}


export const Login = () => {
    //desestructuramos con {valor}
    const [{validando}, dispatch] = useReducer(authReducer, initialState);
    //useeffect
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'});
        }, 1500);
    }, []);

    if (validando) {
        return(//retornamos un jsx, por eso usamos parentesis
            <>{/*usamos un fragmento porque estamos usando dos etiquetas*/}
                <h3>Login</h3>  
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )        
    }

    //reducer es la funcion para retronar un nuevo estado
    return (
        <>
            <h3>Login</h3>      

            <div className="alert alert-danger">
                No auntenticado
            </div>       

            <div className="alert alert-success">
                Autenticado
            </div>  

            <button className="btn btn-primary">
                Login
            </button>

            <button className="btn btn-danger">
                Logout
            </button>
        </>
    )
}
