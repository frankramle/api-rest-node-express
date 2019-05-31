const express = require('express');
const router = express.Router();
const connection  = require('../database');
const validacion = require('../validaciones/validacion');
const errores = require('../errores/errores');
var _= require('lodash');

// GET todos los clientes
router.get('/clientes', (req, res) => {
    var sql = 'SELECT * FROM clientes';
    connection.query(sql, (err, rows, fields) => {     
        if(!err) {
            res.json({ clientes: rows });
        } else {
            console.log(err);
        }
    });
});

// GET Clientes por id
router.get('/clientes/:id', (req, res) => {
    validacion.validacionDataIds(req.params);
    const { id } = req.params;
    var sql = 'SELECT * FROM clientes WHERE id = ?';
    
    connection.query(sql, [id], (err, rows, fields) => {
        if (!err && rows.length !== 0) {
            res.json(rows[0]);
        } else {
            errores.error404(req, res);
        }
    });
});

// DELETE Clientes por id
router.delete('/clientes/:id', (req, res) => {

    validacion.validacionDataIds(req.params);
    const { id } = req.params;
    var sql = 'DELETE FROM clientes WHERE id = ?';

    connection.query(sql, [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Cliente Eliminado'});
        } else {
            console.log(err)
        }
    });
});
  
// Insertar Cliente
router.post('/clientes', (req, res) => {
    var nombres = req.body.nombres;
    var apellido = req.body.apellido;
    var direccion = req.body.direccion;
    var cod_postal = req.body.cod_postal;
    var telefono = req.body.telefono;
    var sql = 'INSERT INTO clientes (nombres, apellido, direccion, cod_postal, telefono) '+
                'VALUES ( ?, ?, ?, ?, ? )';
    connection.query(sql, [nombres , apellido, direccion, cod_postal, telefono], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Cliente Insertado'});
        } else {
            console.log(err);
        }
    });
});
  
// Modificar Cliente
router.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    var nombres = req.body.nombres;
    var apellido = req.body.apellido;
    var direccion = req.body.direccion;
    var cod_postal = req.body.cod_postal;
    var telefono = req.body.telefono;
    var sql = 'UPDATE clientes SET nombres = ?, apellido = ?, direccion = ?, cod_postal = ?, telefono = ?'
                +' WHERE id = ?';
    connection.query(sql, [nombres , apellido, direccion, cod_postal, telefono, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Cliente Modificado'});
        } else {
            console.log(err);
        }
    });
});

router.get('*', (req, res) => { errores.error404(req, res) });
router.use((error, req, res, next) =>{errores.error400(error, req, res, next)});
  
module.exports = router;