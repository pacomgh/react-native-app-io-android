interface Persona{
    nombre: String,
    edad: number,
    //cuando se tiene un objeto anidado se crea una nueva interface
    direccion: Direccion
}

interface Direccion{
    pais: String,
    casaNo: number
}


export const ObjetosLiterales = () => {

    const persona = {
        nombre: 'Francisco',
        edad: 28,
        direccio:{
            pais: 'México',
            casaNo: 2024
        }
    }

    return (
        <>
        <h3>Objetos literales</h3>
        <code>
            <pre>
                { JSON.stringify(persona, null, 2) }
            </pre>
        </code>            
        </>
    )
}
