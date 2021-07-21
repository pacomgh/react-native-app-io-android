//import { TiposBasicos } from "./typescript/TiposBasicos"
//import { Funciones } from './typescript/Funciones';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
//import { Contador } from './components/Contador';
import { ContadorConHook } from './components/Contador ConHook';


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
      <ContadorConHook/>
    </div>
  )
}

//exportamos el contenido de este archivo
export default App;
