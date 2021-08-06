import { useEffect, useRef, useState } from 'react';
import { resReqApi } from '../api/resReq';
import { ResReqListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

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
            paginaRef.current++;
        }
        else
            alert("No hay más registros");
        
    }

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <th>
                    <img 
                    src={usuario.avatar} 
                    alt={usuario.first_name}
                    style={{
                        width:35,
                        borderRadius: 100
                    }} />
                </th>
                <th>{usuario.first_name} {usuario.last_name}</th>
                <th>{usuario.email}</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>   
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>                    
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>   
            <button className="btn btn-primary"
            onClick={cargarUsuarios}>
                Siguientes
            </button>      
        </>
    )
}
