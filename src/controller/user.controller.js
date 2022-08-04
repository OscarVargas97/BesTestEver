const User={
    list:(req, res) => {
        res.status(200).send('Hola Chanchito')
    },
    create:(req, res) => {
        res.status(201).send('Creando un Chanchito')
    },
    update:(req, res) => {
        res.status(204).send('Actualizando un Chanchito')
    },
    destroy:(req, res) => {
        res.status(204).send('Eliminando un Chanchito')
    },
    
}

module.exports = User