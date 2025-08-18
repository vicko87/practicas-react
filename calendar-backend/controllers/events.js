const {response} = require('express')

const getEventos = (req, res = response) => {
    res.json({
   ok: true,
    msg: 'getEventos'
})
}

const crearEvento = (req, res= response) => {
    res.json({
 ok: true,
    msg: 'crearEvento'
    })
}

const actualizarEvento = (req, res=response) => {
    const { id } = req.params;
    res.json({
  ok: true,
    msg: ' actualizarEvento ${id}'
})
}

const eliminarEvento = (req, res=response) => {
    const { id } = req.params;
    res.json({
    ok: true,
   msg: ' eliminarEvento ${id}'
})
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}