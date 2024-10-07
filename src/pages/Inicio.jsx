import { useContext } from 'react'

import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'
import useTitulo from '../hooks/useTitulo'
import './Inicio.scss'

const Inicio = () => {

    const {productos} = useContext(ProductosContext)

    useTitulo('Inicio')
    return (
        <main>
            <section className="section-cards">
                <header className="section-cards__header">
                    <h1>Productos mas buscados</h1>
                    <p>Se encontraron X productos</p>
                </header>

                <div className="cards-container" id="contenedor-cards">

                    {
                        productos && productos.map((producto) => (
                            <Card key={producto.id} producto={producto}/>
                        ))
                    }

                

                </div>
            </section>
        </main>
    )
}

export default Inicio