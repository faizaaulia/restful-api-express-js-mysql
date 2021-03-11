import { v4 as uuidv4 } from 'uuid'
import { conn } from '../index.js'

export const getProducts = (req, res) => {
  let query = 'SELECT * FROM PRODUCTS'
  conn.query(query, (err, result) => {
    err ? console.log(err) : res.send(result)
  })
}

export const createProduct = (req, res) => {
  let data = { ...req.body, product_id: uuidv4() }
  let query = `INSERT INTO products SET ?`
  conn.query(query, data, (err, result) => {
    err ? console.log(err) : res.send(result)
  })
}