//import { TiposBasicos } from "./typescript/TiposBasicos"
//import { Funciones } from './typescript/Funciones';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
//import { Contador } from './components/Contador';
//import { ContadorConHook } from './components/Contador ConHook';
//import { Login } from './components/Login';
import { Formularios } from './components/Formularios';
import { Usuarios } from './components/Usuarios';


const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a Typescript</h1>
      <hr />
      {/*//de esta forma mostramos un componente dentro de otro */}
      {/*<TiposBasicos/>debe tener el nombre del componente*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Funciones/>*/}
      {/*<Contador/>*/}
      {/*<ContadorConHook/>*/}
      {/*<Login/>*/}
      {/*<Usuarios/>*/}
      <Formularios/>

    </div>
  )
}

//exportamos el contenido de este archivo
export default App;
