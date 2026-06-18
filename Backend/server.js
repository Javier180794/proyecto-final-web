const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#Animaljam12', 
    database: 'portafolio'
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

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});