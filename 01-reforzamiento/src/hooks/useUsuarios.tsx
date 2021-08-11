import { useEffect, useRef, useState } from "react";
import { resReqApi } from "../api/resReq";
import { ResReqListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    //para mantener la referencia sin renderizarel html
    const paginaRef = useRef(1);

    //cuando el componente se carga por primera vez pensamos en useeffect
    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() =>{
        //llamado al API
        const resp = await resReqApi.get<ResReqListado>('/users', {
            params: {
                page: paginaRef.current//enviamos la pagina actual
            }
        })
        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);
        }
        else{
            paginaRef.current--;
            alert("No hay más registros");    
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    } 
    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current--;
            cargarUsuarios();
        }
    } 

    return{
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
