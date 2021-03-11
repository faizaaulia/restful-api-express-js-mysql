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
    err ? console.log(err) : res.send(`Berhasil menambahkan produk ${data.product_name}`)
  })
}

export const getProduct = (req, res) => {
  let query = `SELECT * FROM products where product_id = '${req.params.id}'`
  conn.query(query, (err, result) => {
    err ? console.log(err) : res.send(result)
  })
}

export const deleteProduct = (req, res) => {
  let query = `DELETE FROM products where product_id = '${req.params.id}'`
  conn.query(query, (err, result) => {
    err ? console.log(err) : res.send(`Berhasil menghapus produk ${req.params.id}`)
  })
}

export const updateProduct = (req, res) => {
  let data = req.body
  let query = `UPDATE products SET ? WHERE product_id = '${req.params.id}'`
  conn.query(query, data, (err, result) => {
    err ? console.log(err) : res.send(`Berhasil mengubah produk`)
  })
}