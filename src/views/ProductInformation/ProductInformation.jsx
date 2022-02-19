import image from "../../assets/img/imagen1.png";
import image2 from "../../assets/img/imagen2.png";
import "./ProductInformation.scss";

function ProductInformation() {
    return (
        <div className="container-info">
            <div className="title">
                <h1> Crea tu password Manager</h1>
            </div>
            <div className="cards">         
            <div className="p-info">
                <img className="imagen1" src={image} />
                Guarda aquí todas tus contraseñas, datos a cualquier
                información, olvida las notas de papel y las aplicaciones no
                protegidas.
            </div>
            <div className="p-info2">
                <img className="imagen2" src={image2} />
                Crea tu clave maestra: solo tú podrás accedera tus secretos con
                ella.
            </div>
            </div>

            <div className="container-info2">
                <h3>Cómo funciona</h3>
                <p>
                    En primer lugar, debes crear una contraseña diferente para
                    sus pertenencias electrónicas. No podrás recuperar tu
                    contraseña, asi que recuérdala bien.
                </p>
            </div>


            <div className="container-info3">
                <h3>Qué datos puedes guardar</h3>
                <p>
                    Por ejemplo, el número de tu tarjeta el PIN y el PUNK de tu
                    teléfono móvil, el número de serie de alguno de tus
                    dispositivos o cualquier información que necesites tener en
                    lugar seguro.
                </p>
            </div>
            <div className="checkbox">
                <label htmlFor="checkbox">¿Eres Mayor de 18 años?</label>
                <input type="checkbox" id="checkbox" name="checkbox" />
            </div>

            <div className="action-buttons">
                <button className="button-cancel">Cancelar</button>
                <button className="button-next" >Siguente </button>
            </div>
        </div>
    );
}

export default ProductInformation;
