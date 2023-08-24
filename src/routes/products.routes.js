import { Router } from "express";

const prodsRouter = Router()

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

    try {
        const { title, description, code, price, stock, category, thumbnails } = req.body;
        // Valida los campos obligatorios
    
        // Genera un nuevo producto con un ID único (puedes usar una función para generar IDs únicos)
    
        // Agrega el producto a la lista de productos
    
        // Guarda la lista de productos en el archivo "productos.json"
    
        res.status(201).json({ message: 'Producto creado con éxito', product });
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }

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