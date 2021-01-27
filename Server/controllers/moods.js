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











  module.exports = {
    getAllMoods,
    getMoodById,
    getAllMoodsByUsername,
    getAllMoodsByDate,
    createMood
  }