/**
 * Async Await
 */

//  let getNombre = async() => {

//     throw new Error('No exist eun nombre para usuario')
//      return 'Moises';
//  }

 let getNombre = () =>{
     return new Promise((resolve,reject) =>{
         setTimeout(() => {
            resolve('Moises')
         }, 3000);
     });
 };

 let saludo = async () =>{
     let nombre = await getNombre()
     return `Hola ${nombre}`
 }

 saludo().then(mensaje =>{
     console.log(mensaje);
     
 })
//  getNombre().then( nombre =>{
//      console.log(nombre);
//  }).catch(e =>{
//     console.log('Error de ASYNC',e);
    
//  })
//  console.log(getNombre());
 