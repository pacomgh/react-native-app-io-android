import { useEffect } from 'react';
import { resReqApi } from '../api/resReq';

export const Usuarios = () => {

    //cuando el componente se carga por primera vez pensamos en useeffect
    useEffect(() => {
        //llamado al API
        resReqApi.get('/users')
            .then( resp => {
                console.log(resp);
            })
            .catch( console.log );
    }, [])

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
                <tbody></tbody>
            </table>         
        </>
    )
}
