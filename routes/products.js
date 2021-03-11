import express from 'express'
import { getProducts, createProduct, getProduct } from '../controllers/products.js'

const router = express.Router()

router.get('/', getProducts)

router.post('/', createProduct)

router.get('/:id', getProduct)

export default router