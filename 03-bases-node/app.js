// const fs = require('fs')

const {createFile} = require('./multiplicar/multiplicar')

// let base = 'abc';

// let data = ''

// for (let index = 0; index <= 10; index++) {
//     data += `${base} * ${index} = ${base * index}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>{
//     if(err) throw err;
//     console.log(`Archivo de la tabla del ${ base } guardado correctamente`);
    
// })

// console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]
console.log(base);


createFile(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e))