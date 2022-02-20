import "./Feedback.scss";

function Feedback() {
    return (
        <div className="feedback">
            <div className="passwordCreate"></div>
            <h1>Tu Password Manager ya está creado!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="button_acces">   
            <button>Acceder</button>
            </div>
            <div className="passwordError"></div>
            <h1>No hemos podido modificar tu Contraseña Maestra inténtalo más tarde</h1>
            <button>Volver a password Manager</button>
        </div>
    );
}

export default Feedback;
