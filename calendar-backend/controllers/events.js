const { response } = require('express');
const Evento = require('../models/Evento')

const getEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getEventos'
    })
}

const crearEvento = async (req, res = response) => {
    
const evento = new Evento(req.body)

try {

    evento.user = req.uid

 const eventoGuardado = await  evento.save()

 res.json({
    ok: true,
    evento
 })
    
} catch (error) {
    console.log(error)
    res.status(500).json({
        ok: false,
        msg: 'Hable con el administrador'
    })
}

 
}

const actualizarEvento = (req, res = response) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: ' actualizarEvento ${id}'
    })
}

const eliminarEvento = (req, res = response) => {
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