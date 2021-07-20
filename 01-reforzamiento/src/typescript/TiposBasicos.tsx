
export const TiposBasicos = () => {

    const nombre : string = 'Fernando';
    const edad : number = 35;
    const estadoActivo : boolean = false;

    const poderes : string[] = []; 

    return (
        <>{/*cuando lo dejamos vacio se convierte en un fragmento*/}
            <h3>Tipos básicos</h3>
            {nombre}, {edad}, {(estadoActivo) ? 'activo' : 'no activo'}
            <br />
            {poderes.join(', ')}
        </>
        
    )
}
