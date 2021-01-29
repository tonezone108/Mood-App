const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllMoods = (req, res) => {
    pool.query("SELECT * FROM moods", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  const getMoodById = (req, res) => {
    let sql = "SELECT * FROM moods WHERE id = ?"
    sql = mysql.format(sql, [ req.params.id ])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  const getAllMoodsByUsername = (req, res) => {
    let sql = "SELECT * FROM moods WHERE username = ?"
    sql = mysql.format(sql, [ req.params.username ])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  const getAllMoodsByDate = (req, res) => {
    let sql = "SELECT * FROM moods WHERE date = ?"
    sql = mysql.format(sql, [ req.params.date ])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  


 const createMood = (req, res) => {
   const { username, mood, date, description } = req.body
   let sql = "INSERT INTO moods (username,mood,date,description) VALUES (?, ?, ?, ?)"
   sql = mysql.format(sql, [ username, mood, date, description ])

   pool.query(sql, (err, results) => {
     if (err) return handleSQLError(res, err)
     return res.json({ newId: results.insertId });
   })
 }

 const updateMoodByDateAndUsername = (req, res) => {
  const {  username, mood, date, description } = req.body
  let sql = "UPDATE moods SET mood = ?, description =? WHERE date = ? AND username = ?"
  sql = mysql.format(sql, [mood, description, date, username ])
  //console.log(sql);
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}


const deleteMoodByDateAndUsername = (req, res) => {
  const {  username, date } = req.body
  let sql = "DELETE FROM moods WHERE date = ? AND username = ?"
  sql = mysql.format(sql, [date, username ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}


// const updateUserById = (req, res) => {
//   const { firstName, lastName } = req.body
//   let sql = "UPDATE login_app_users SET first_name = ?, last_name = ? WHERE id = ?"
//   sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }










  module.exports = {
    getAllMoods,
    getMoodById,
    getAllMoodsByUsername,
    getAllMoodsByDate,
    updateMoodByDateAndUsername,
    deleteMoodByDateAndUsername,
    createMood
  }