const fs = require('fs')

let base = 10;
let data = ''

for (let index = 0; index <= 10; index++) {
    data += `${base} * ${index} = ${base * index}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>{
    if(err) throw err;
    console.log(`Archivo de la tabla del ${ base } guardado correctamente`);
    
})