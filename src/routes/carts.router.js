import { Router } from "express";



const path = "./public/json/carts/carts.json"
const cartsRouter = Router()

// Definir las rutas para carritos
cartsRouter.post('/', (req, res) => {
    
    try {
        // Genera un nuevo carrito con un ID único
    
        // Agrega el carrito a la lista de carritos
    
        // Guarda la lista de carritos en el archivo "carrito.json"
    
        res.status(201).json({ message: 'Carrito creado con éxito', cart });
      } catch (error) {
        res.status(400).json({ error: 'Error al crear el carrito' });
      }

});

cartsRouter.get('/:cid', (req, res) => {
    // Listar productos de un carrito por su ID
});

cartsRouter.post('/:cid/product/:pid', (req, res) => {
    // Agregar un producto a un carrito por sus IDs
});





export default cartsRouter