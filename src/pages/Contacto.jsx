
import './Contacto.scss'
import useTitulo from "../hooks/useTitulo";

const Contacto = () => {
    useTitulo("Contacto");
    return (
        <form className="contact-form">
        <div className="contact-form__header">
            <h2 className="contact-form__title">Contacto</h2>
            <p className="contact-form__description">
            ¿Tienes alguna pregunta o deseas hacer un pedido personalizado? ¡No
            dudes en hacernos saber!
            </p>
        </div>
        <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="name">
            Nombre:*
            </label>
            <input
            className="contact-form__input"
            type="text"
            id="name"
            name="name"
            required
            />
        </div>
        <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="email">
            Correo electrónico*:
            </label>
            <input
            className="contact-form__input"
            type="email"
            id="email"
            name="email"
            required
            />
        </div>
        <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="phone">
            Teléfono:*
            </label>
            <input className="contact-form__input" type="tel" id="phone" name="phone" />
        </div>
        <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="message">
            Mensaje:*
            </label>
            <textarea
            className="contact-form__textarea"
            id="message"
            name="message"
            required
            ></textarea>
        </div>
        <button className="search-bar__button" type="submit">
            Enviar
        </button>
        </form>
    );
};

export default Contacto;
