const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());

const conexion = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});

conexion.connect((err) => {
    if (err) {
        console.log('Error de conexión:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

app.get('/tareas', (req, res) => {

    conexion.query(
        'SELECT * FROM tareas',
        (err, resultados) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(resultados);
        }
    );

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});