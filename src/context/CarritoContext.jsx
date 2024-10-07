import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";




const carritoContext =createContext()
const CarritoProvider = ( {children }) => {

    const url = import.meta.env.VITE_BACKEND_CARRITOS

    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])

    const elProductoEstaEnElCarrito = (producto) => {
        console.log('El producto ya esta en el carrito');
        
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        return nuevoArray.length
    }

    const obtenerProductoDelCarrito = (producto) => {
        return carrito.find(prod => prod.id === producto.id)
    }
    
    const agregarProductoAlCarritoContext = (producto) => {
        console.log(producto);
        
        if (!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito =  obtenerProductoDelCarrito(producto) 
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
            
        }
        
    }

    const eliminarProductoAlCarritoContext = (id) => {
        console.log(id);
        eliminarDelCarrito(id)
        

    }

    const limpiarCarritoContext = () => {
        limpiarCarrito()
    }
    
    const guardarCarritoContext = async (carrito) => {
        console.log(carrito);
        console.log(JSON.stringify(carrito))

        try {

            const options = {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(carrito)
            }

            const losProductosEnElCarrito = await helperPeticionesHttp(url, options)

            console.log(losProductosEnElCarrito)
            
        } catch (error) {
            console.error('[guardarCarritoContext]', error)
        }
        
    }

    const data = {
        carrito,
        agregarProductoAlCarritoContext,
        eliminarProductoAlCarritoContext,
        guardarCarritoContext,
        limpiarCarritoContext
    }




    return <carritoContext.Provider value={data}> { children } </carritoContext.Provider>
}


export { CarritoProvider }
export default carritoContext