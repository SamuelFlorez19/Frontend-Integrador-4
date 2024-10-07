import React from "react";

import './Nosotros.scss'
import useTitulo from "../hooks/useTitulo";

const Nosotros = () => {
    useTitulo("Nosotros");
    return (
        <main>
        <section className="nosotros">
            <div className="nosotros__container">
            <div className="nosotros__description">
                <h2 className="nosotros__title-principal">Nosotros</h2>
                <p>
                Somos una joyería familiar con más de 20 años de experiencia en el
                mercado. Nuestra pasión es crear piezas únicas y exclusivas que
                reflejen la personalidad y el estilo de cada cliente.
                </p>
                <div className="nosotros__image-container">
                <img
                    className="nosotros__img"
                    src="/img/familia-joyera.webp"
                    alt="Foto de la familia propietaria de la joyería"
                />
                </div>
            </div>

            <div className="nosotros__nuestra-historia">
                <h3 className="nosotros__title">Nuestra historia</h3>

                <p>
                Nuestra historia comenzó en 1995 cuando <span>Samuel Florez</span>
                , apasionado por la belleza de las gemas y el arte de la joyería,
                decidió abrir las puertas de nuestra primera tienda. Desde
                entonces, hemos dedicado cada día a seleccionar las piedras más
                preciosas y a crear piezas únicas que reflejen la excelencia y el
                buen gusto.
                </p>

                <p>
                Con el tiempo, nuestro compromiso con la calidad y el servicio al
                cliente nos ha permitido crecer y ganarnos la confianza de nuestra
                comunidad. Cada joya que sale de nuestras manos lleva consigo la
                esencia de nuestro trabajo meticuloso y nuestra pasión por el
                detalle.
                </p>

                <p>
                Hoy en día, nos enorgullece ser reconocidos como una de las
                joyerías más distinguidas de la región. Continuamos innovando y
                buscando nuevas formas de sorprender a nuestros clientes,
                manteniendo siempre los valores que nos han hecho llegar hasta
                aquí: integridad, elegancia y un servicio excepcional.
                </p>

                <p>
                Nuestra misión sigue siendo la misma que en nuestros inicios:
                hacer que cada cliente se sienta especial, ofreciéndoles joyas que
                no solo adornan, sino que también cuentan historias y perduran en
                el tiempo. Agradecemos profundamente a quienes nos han acompañado
                en este viaje y esperamos seguir siendo su elección de confianza
                en el mundo de la alta joyería.
                </p>
            </div>

            <div className="nosotros__nuestros-valores">
                <h3 className="nosotros__title">Nuestros valores</h3>
                <ul className="nosotros__valores">
                <li>
                    <span>Calidad:</span> Nos esforzamos por ofrecer piezas de alta
                    calidad y duraderas.
                </li>
                <li>
                    <span>Originalidad:</span> Creamos diseños únicos y exclusivos
                    que reflejan la personalidad de cada cliente.
                </li>
                <li>
                    <span>Servicio: </span> Nos comprometemos a brindar un servicio
                    personalizado y atento a cada cliente.
                </li>
                </ul>
            </div>
            </div>
        </section>
        </main>
    );
};

export default Nosotros;
