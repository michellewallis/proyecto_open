import "./FeedbackError.scss";

function Feedback() {
    return (
        <div className="feedback">
            <div className="passwordError"></div>
            <h1>
                No hemos podido modificar tu Contraseña Maestra inténtalo más
                tarde
            </h1>
            <button>Volver a password Manager</button>
        </div>
    );
}

export default Feedback;
