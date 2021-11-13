const connection = require('./connection');

const find = async () => {
  const [rows] = await connection().execute(`SELECT * FROM series.characters`);

  return rows;
}

const findById = async (id) => {
  const [rows] = await connection().execute(
`SELECT *
FROM series.characters
WHERE id = ?`,
    [id]
  );

  return rows.length ? rows[0] : null;
}

const create = async (obj) => {
  const { name, series } = obj;

  const [row] = await connection().execute(
    `INSERT INTO series.characters (name, series) VALUES (?, ?)`,
    [name, series],
  );

  return { id: row.insertId, name, series };
}

const update = async (obj) => {
  await connection().execute(
`UPDATE series.characters
SET
  name = ?,
  series = ?
WHERE id = ?`,
    [obj.name, obj.series, obj.id],
  );

  return obj
}

const remove = async (id) => {
  await connection().execute(
    `DELETE FROM series.characters WHERE id = ?`,
    [id],
  );
} 

module.exports = {
  find,
  findById,
  create,
  update,
  remove,
}