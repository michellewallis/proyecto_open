import image from "../../assets/img/imagen1.png";
import image2 from "../../assets/img/imagen2.png";
import "./ProductInformation.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function ProductInformation({ setStep }) {
    const [isDisabled, setIsDisabled] = useState(true);

    const next = () => {
        setStep(2);
    };

    return (
        <div className="container-product-information">
            <div className="container-info">
                <h1> Crea tu password Manager</h1>
                <div className="cards">
                    <div className="p-info">
                        <img className="image1" src={image} />
                        <p>
                            Guarda aquí todas tus contraseñas, datos a cualquier
                            información, olvida las notas de papel y las
                            aplicaciones no protegidas.
                        </p>
                    </div>
                    <div className="p-info2">
                        <img className="image2" src={image2} />
                        <p>
                            Crea tu clave maestra: solo tú podrás accedera tus
                            secretos con ella.
                        </p>
                    </div>
                </div>

                <div className="container-info">
                    <h3>Cómo funciona</h3>
                    <p>
                        En primer lugar, debes crear una contraseña diferente
                        para sus pertenencias electrónicas. No podrás recuperar
                        tu contraseña, asi que recuérdala bien.
                    </p>
                </div>

                <div className="container-info">
                    <h3>Qué datos puedes guardar</h3>
                    <p>
                        Por ejemplo, el número de tu tarjeta el PIN y el PUNK de
                        tu teléfono móvil, el número de serie de alguno de tus
                        dispositivos o cualquier información que necesites tener
                        en lugar seguro.
                    </p>
                </div>

                <div>
                    <label htmlFor="checkbox" className="label-checkbox">¿Eres Mayor de 18 años?</label>
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        className="checkbox"
                        onChange={() => {
                            setIsDisabled(!isDisabled);
                        }}
                    />
                </div>

                <div className="action-buttons">
                    <button className="button-cancel">Cancelar</button>
                    <button
                        className="button-next"
                        disabled={isDisabled}
                        onClick={() => {
                            next();
                        }}
                    >
                        Siguente { ">" }
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductInformation.propTypes = {
    setStep: PropTypes.func
}


export default ProductInformation;
