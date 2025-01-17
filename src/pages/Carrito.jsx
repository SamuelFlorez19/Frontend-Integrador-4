import useTitulo from '../hooks/useTitulo'
import ListadoCarrito from '../components/ListadoCarrito'

const Carrito = () => {
    useTitulo('Carrito')

    return (
        <>
            <h1>Productos en el carrito</h1>
            <hr />
            <>
            <ListadoCarrito />
            
            </>
        </>
    )
}

export default Carrito