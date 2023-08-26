//import express from 'express'
import { Router } from "express";
import { promises as fs } from 'fs'



const path = "./public/json/products/products.json"
const prodsRouter = Router()


//
//const app = express()
//

















prodsRouter.get('/', async (req, res) => {
    const { limit } = req.query

    const prods = await productManager.getProducts()

    const products = prods.slice(0, limit)

    res.status(200).send(products)
})

prodsRouter.get('/:id', async (req, res) => {
    const { id } = req.params

    const prod = await productManager.getProductById(parseInt(id))

    if (prod)
        res.status(200).send(prod)
    else
        res.status(404).send("Producto no encontrado")

})

prodsRouter.post('/:id', async (req, res) => {


    console.log(req.body)
    
    const product = productManager.products.find(prod => prod.code === req.body.code)

    if (product) {
        res.status(400).send("Producto ya existente")
    } else {
        try {
            const newProduct = new Product(
                req.body.title,
                req.body.description,
                req.body.price,
                req.body.code,
                req.body.stock,
                req.body.thumbnail
            );
            productManager.products.push(newProduct)
            await productManager.writeProductsToFile(productManager.products)
            res.status(200).send("Producto creado")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }



    /*try {
        const { title, description, code, price, stock, category, thumbnails } = req.body;
        
    
        res.status(201).json({ message: 'Producto creado con éxito', product });
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }*/

})

prodsRouter.put('/:id', async (req, res) => {

})

prodsRouter.delete('/:id', async (req, res) => {
/*    const { id } = req.params

    const prod = await productManager.getProductById(parseInt(id))

    if (prod)
        res.status(200).send(prod)
    else
        res.status(404).send("Producto no encontrado")*/

})
//Resto de las rutas

export default prodsRouter