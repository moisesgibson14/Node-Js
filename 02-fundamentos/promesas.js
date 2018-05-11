let empleados = [{
    id: 1,
    nombre: 'Moises'
}, {
    id: 2,
    nombre: 'Juan'
}, {
    id: 3,
    nombre: 'Salvador'
}];


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        })

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve,reject) => {
        let salarioDB = salarios.find(salario =>{
            return salario.id === empleado.id
        })
        if(!salarioDB){
            reject(`No existe un salario para el empleado ${empleado.nombre}`)
        }else{
            resolve({
                nombre:empleado.nombre,
                salario:salarioDB.salario,
                id:empleado.id
            })
        }
    })
}

getEmpleado(5).then( empleado =>{
    getSalario(empleado).then( salario => {
        console.log(salario);
    }, (err) =>{
        console.log(err);
    })
}, (err) =>{
    console.log(err);
})