// setTimeout( function () {
//     console.log('hola mundo');
    
// }, 3000)  

let getUsuarioById = (id,callback) =>{
    let usuario={
        nombre:'Moises',
        id
    }

    callback(usuario);
}

getUsuarioById(10, (usuario)=> {
    console.log('Usuario de base de datos', usuario);
})