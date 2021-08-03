import { type } from "os";
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

type LoginPayload = {
    username: string,
    nombre: string
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload};

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
        case 'login'://1. implementamos el reducer
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ACB123',
                //nomenclatura desestructurada
                nombre,
                username
                //nomnclatura sin desetructurar
                //nombre: action.payload.nombre,
                //username: action.payload.username
            }
            break;
    
        default:
            return state;
            break;
    }

}


export const Login = () => {
    //desestructuramos con {valor}
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);
    //useeffect
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'});
        }, 1500);
    }, []);
    //2. regresamos el estado
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Francisco',
                username: 'pacomgh'
            }
        });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

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
            {
                ( token )
                ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                : <div className="alert alert-danger">No auntenticado</div>
            }        

            {
                (token)
                ? (
                    <button className="btn btn-danger"
                    onClick={logout}>
                        Logout
                    </button>
                )
                : (
                    <button className="btn btn-primary"
                    onClick= {login}>
                        Login
                    </button>                    
                )

            }
            

            
        </>
    )
}
