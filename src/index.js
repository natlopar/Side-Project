const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
// const swaggerUI = require('swagger-ui-express');
// const swaggerConfig = require('./swagger.json');

const jwt = require('jsonwebtoken');
const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require('./swagger.json');
require('dotenv').config();

const server = express();

server.use(cors());
server.use(express.json({ limit: '25mb' }));
// server.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at ${serverPort}`);
});

//conexion a MYSQL

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: process.env.USER_DB,
    password: process.env.USER_PASS,
    database: 'freedb_vetfolio',
  });
  connection.connect();
  return connection;
}

//funciones token
const generateToken = (payload) => {
  const token = jwt.sign(payload, 'secreto', { expiresIn: '2h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'secreto'); //aqui se verifica si el token es real o no; y si existe la devuelve.
    return decoded;
  } catch (err) {
    return null;
  }
};

//middleware : verifica si con ese token tienes permiso para hacer una funcion.

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  req.user = decoded; //si es válido lo pone en el usuario
  next();
};

// const passwordHash = await bcrypt.hash(body.password, saltRounds);

//----------------ENDPOINT PARA REGISTRARSE, ENCRIPTAR PASSWORD Y OBTENER UN TOKEN---------------------
server.post('/signin', async (req, res) => {
  try {
    const { userName, nameVet, email, password, city, country, public } =
      req.body;
    const connection = await getConnection();
    const selectUser = 'select * from vet where email = ?  or userName = ? ';
    const [resultSelect] = await connection.query(selectUser, [
      email,
      userName,
    ]);

    if (resultSelect.length === 0) {
      const passwordHashed = await bcrypt.hash(password, 10);
      const insertVet =
        'INSERT INTO vet (userName,nameVet,email,hashed_password,city,country,public) VALUES (?,?,?,?,?,?,?)';

      jwt.sign(password, 'secreto', async (err, token) => {
        if (err) {
          res.json({ success: false, msg: 'Error' });
        } else {
          const [resultInsertVet] = await connection.query(insertVet, [
            userName,
            nameVet,
            email,
            passwordHashed,
            city,
            country,
            public,
          ]);
          connection.end();
          //Si todo sale bien, se envía una respuesta JSON con un mensaje de éxito, el token JWT y el insertId,
          //que es el ID del usuario recién insertado en la base de datos.
          res.json({
            success: true,
            data: resultInsertVet,
            token: token,
            id: resultInsertVet.insertId,
            idVet: resultInsertVet.idVet,
            nameVet: nameVet,
          });
        }
      });
    } else {
      res.json({ success: false, msg: 'Usuario ya registrado' });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

//----------------ENDPOINT PARA INCIAR SESIÓN---------------------

server.post('/login', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //Buscar si el usuario existe en la bases de datos
    const selectUser = 'SELECT * FROM vet WHERE email = ?';
    const connection = await getConnection();
    const [users] = await connection.query(selectUser, [email]);
    connection.end();
    if (users.length !== 0) {
      const isOkPass = await bcrypt.compare(password, users[0].hashed_password);
      if (isOkPass) {
        // generar token
        const infoToken = {
          id: users[0].idVet,
          email: users[0].email,
        };
        const token = generateToken(infoToken);
        res.json({
          success: true,
          token: token,
          id: users[0].idVet,
          name: users[0].nameVet,
          public: users[0].public,
        });
      } else {
        res.json({
          success: false,
          message: 'Contraseña incorrecta',
        });
      }
    } else {
      res.json({
        success: false,
        message: 'Correo no existe',
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

//----ENDPOINT CIERRE SESION----------------

server.put('/logout', async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    jwt.sign(authHeader, '', { expiresIn: 2 }, (logout, err) => {
      if (logout) {
        res.json({ success: true, message: 'Se ha cerrado tu sesión' });
      } else {
        res.json({
          success: false,
          message: 'No se ha podido cerrar la sesión',
          err,
        });
      }
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

//.----------------------cargar los casos del usuario autenticado.......................

server.get('/listUser', authenticateToken, async (req, res) => {
  try {
    const idVet = req.headers['id'];
    const numberId = parseInt(idVet);
    let sql = 'SELECT * FROM `case` WHERE fk_Vet = ?';
    const connection = await getConnection();
    const [cases] = await connection.query(sql, [numberId]);
    connection.end();
    if (res.ok) {
      const response = {
        success: true,
        patients: cases,
      };
      res.json(response);
    } else {
      res
        .status(404)
        .json({ success: false, message: 'Error al obtener datos' });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

//.........eliminar un caso...................

server.delete('/listUser', async (req, res) => {
  try {
    const idCase = req.query.id;
    const connection = await getConnection();
    const deleteSQL = 'DELETE from `case` WHERE idCase = ?';
    const [result] = await connection.query(deleteSQL, [idCase]);
    if (result.affectedRows > 0) {
      res.json({
        success: true,
        message: 'El caso seleccionado ha sido eliminado correctamente',
      });
    } else {
      res.json({
        success: false,
        message: 'No se ha podido eliminar el caso',
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

//.................ENDPOINT AÑADIR UN CASO.............

server.post('/newCase', async (req, res) => {
  try {
    const connection = await getConnection();
    const {
      name,
      specie,
      breed,
      gender,
      birthday,
      clinical,
      exploration,
      tests,
      results,
      treatment,
      evolution,
      comments,
      public,
      fk_Vet,
    } = req.body;
    const insertCase =
      'INSERT INTO `case` (`name`, specie, breed, gender, birthday, clinical, exploration, tests, results, treatment, evolution, comments, public, fk_Vet) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    const [resultCases] = await connection.query(insertCase, [
      name,
      specie,
      breed,
      gender,
      birthday,
      clinical,
      exploration,
      tests,
      results,
      treatment,
      evolution,
      comments,
      public,
      fk_Vet,
    ]);
    connection.end();
    console.log(resultCases);
    res.json({
      success: true,
      result: resultCases,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});
//......ENDPOINT MODIFICAR UN CASO.................

server.patch('/updateCase/:id', async (req, res) => {
  try {
    const connection = await getConnection();
    const id = req.params.id;
    const data = req.body;

    // Consulta para obtener los valores actuales del registro
    const selectQuery = 'SELECT * FROM `case` WHERE idCase = ?';
    const [rows] = await connection.query(selectQuery, [id]);

    if (rows.length === 0) {
      return res.json({
        success: false,
        message: 'No se encontró el caso con el ID proporcionado.',
      });
    }

    // Para cada campo recibido en la solicitud PATCH
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        // Si el campo tiene un valor no vacío, actualizarlo
        if (data[key] !== '') {
          rows[0][key] = data[key];
        }
      }
    }

    // Construir la consulta de actualización con los campos actualizados
    const updateFields = Object.keys(rows[0])
      .map((key) => `${key} = ?`)
      .join(', ');
    const updateValues = Object.values(rows[0]);
    updateValues.push(id);

    const updateQuery = `UPDATE \`case\` SET ${updateFields} WHERE idCase = ?`;

    // Ejecutar la consulta de actualización
    const [result] = await connection.query(updateQuery, updateValues);
    connection.end();
    res.json({
      success: true,
      message: 'Actualizado correctamente',
      casesChanged: result.affectedRows,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

//............CARGAR TODOS LOS CASOS PÚBLICOS-EXPLORA-----

server.get('/getPublic', async (req, res) => {
  try {
    const connection = await getConnection();
    const id = req.params.id;
    const data = req.body;

    // Consulta para obtener los valores actuales del registro
    const selectQuery = 'SELECT * FROM `case` WHERE idCase = ?';
    const [rows] = await connection.query(selectQuery, [id]);

    if (rows.length === 0) {
      return res.json({
        success: false,
        message: 'No se encontró el caso con el ID proporcionado.',
      });
    }

    // Para cada campo recibido en la solicitud PATCH
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        // Si el campo tiene un valor no vacío, actualizarlo
        if (data[key] !== '') {
          rows[0][key] = data[key];
        }
      }
    }

    // Construir la consulta de actualización con los campos actualizados
    const updateFields = Object.keys(rows[0])
      .map((key) => `${key} = ?`)
      .join(', ');
    const updateValues = Object.values(rows[0]);
    updateValues.push(id);

    const updateQuery = `UPDATE \`case\` SET ${updateFields} WHERE idCase = ?`;

    // Ejecutar la consulta de actualización
    const [result] = await connection.query(updateQuery, updateValues);
    connection.end();
    res.status(200).json({
      success: true,
      message: 'Actualizado correctamente',
      casesChanged: result.affectedRows,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: 'Error al obtener datos',
    });
  }
});


//................FILTROS...............

server.get('/case', authenticateToken, async (req, res) => {
  try {
    const connection = await getConnection();
    const { name, breed, clinical } = req.query;
    const idVet = req.headers['id'];
    const numberId = parseInt(idVet);
    let sql = `SELECT * FROM \`case\` WHERE fk_Vet = ?`;

    const values = [numberId];

    if (name) {
      sql += ' AND name = ?';
      values.push(name);
    }
    if (breed) {
      sql += ' AND breed LIKE ?';
      values.push(`%${breed}%`);
    }
    if (clinical) {
      sql += ' AND clinical LIKE ?';
      values.push(`%${clinical}%`);
    }

    const [resultQuery] = await connection.query(sql, values);
    if (resultQuery.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'Ningún caso con esos criterios de búsqueda',
        patients: resultQuery,
      });
    } else {
      res.status(200).json({ 
        success: true, 
        message: 'Estos son los casos filtrados', 
        patients: resultQuery 
      });
    }
    connection.end();
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: 'Error al obtener datos',
    });
  }
});

//...CONTACTO....

server.post('/contact', async (req, res) => {
  try {
    const { name, comments } = req.body;
    const connection = await getConnection();
    const insert = 'INSERT INTO comments (name, comments) VALUES (?,?)';
    const [result] = await connection.query(insert, [name, comments]);
    console.log(result);

    res.json({ success: true, message: 'Mensaje enviado' });
    connection.end();
  } catch (error) {
    res.json({ success: false, message: 'El mensaje no se pudo enviar' });
  }
});

//....servidor Estáticos.........

const staticServer = './src/public-react';
server.use(express.static(staticServer));
