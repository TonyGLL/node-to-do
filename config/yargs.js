const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
            .command('crear', 'Crear un elemnto por hacer', {

                descripcion
            })
            .command('actualizar', 'Actualiza el estado completado de una tarea', {

                descripcion,
                completado               
            })
            .command('borrar','Borrar una tarea ya existente', {

                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}