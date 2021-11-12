const express = require('express')
const mysql = require('mysql2/promise');

const app = express()
const port = env.local.PORT || 3000;

// My endpoints

const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'andrejaques',
  password: 'quaqua123.',
  database: 'series',
});

// ge all characters

app.get('/character', async (req, res, next) => {
  try {
    const [rows] = await connection.query('SELECT * FROM characters');

    return res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});

// get character by id

app.get('/character/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const [rows] = await connections.execute(`SELECT * FROM series.characters WHERE id = ?`, [parseInt(id)]);

    if (!rows.length) return res.status(404).json({ message: 'Character not found' });

    return res.status(200).json(rows[0]);
  } catch (err) {
    next(err);
  };
});

// post character

// put character

app.put('/character/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, series } = req.body;
    const [rows] = await connection.execute(`SELECT * FROM series.characters WHERE id = ?`, [parseInt(id)]);

    if (!rows.length) return res.status(404).json({ message: 'Character not found' });

    await connection.execute(`UPDATE series.characters SET name = ?, series = ? WHERE id = ?`,
      [req.body.name, req.body.series, parseInt(id)]);
    
    return res.status(200).json({
      message: 'Character updated',
      id,
      name,
      series,
    });
  } catch (err) {
    next(err);
  };
});

// delete character


// filter errors

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))