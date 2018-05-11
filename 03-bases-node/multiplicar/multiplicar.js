const fs = require('fs')

let createFile = (base) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`)
            return;
        }
        let data = ''

        for (let index = 0; index <= 10; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        })
    })
} 

module.exports = {
    createFile
}