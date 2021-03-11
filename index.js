import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import productsRoute from './routes/products.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())
app.use('/products', productsRoute)

app.listen(PORT, () => {
	console.log(`server run on port ${PORT}`)
})

export const conn = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'express-mysql'
})

conn.connect((error) => {
	error ? console.log(error) : console.log('mysql connected')
})