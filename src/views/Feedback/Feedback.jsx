import "./Feedback.scss";

function Feedback() {
    return (
        <div className="product-information">
            <div className="passwordCreate"></div>
            <h1>Tu Password Manager ya está creado!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Acceder</button>
            <div className="passwordError"></div>
            <h1>No hemos podido modificar tu Contraseña Maestra inténtalo más tarde</h1>
            <button>Volver a password Manager</button>
        </div>
    );
}

export default Feedback;
