import React, { useState } from "react";
import "./Form.scss";
import { submitForm } from "../../services/api";
import PropTypes from "prop-types";

function Form({ setStep }) {
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [isError, setIsError] = useState("");
    const [optional, setOptional] = useState("");
    const [isPasswordinCorrect, setIsPasswordIncorrect] = useState(true);
    const [isPasswordRepeatinCorrect, setIsPasswordRepeatIncorrect] = useState(true);

    const OnChangePassword = event => {
        const { value } = event.target;
        setPassword(value);
        checkDisabled({ type: "password", value });
    };

    const onchangePasswordRepeact = event => {
        const value = event.target.value;
        setPasswordRepeat(value);
        checkDisabled({ type: "repeatPassword", value });
    };

    const onChangeOptional = event => {
        const inputOptional = event.target.value;
        setOptional(inputOptional);
    };

    const checkDisabled = ({ type, value }) => {
        const checkNumber = /[-.0-9]+/;
        const passwordHasNumber = !checkNumber.test(value);

        const checkUpperCase = /[A-Z]/;
        const passwordHasUpperCase = !checkUpperCase.test(value);

        const isValueIncorrect =
            passwordHasUpperCase ||
            value.length <= 7 ||
            value.length > 24 ||
            passwordHasNumber;

        if (type === "password") {
            setIsPasswordIncorrect(isValueIncorrect);
        }
        if (type === "repeatPassword") {
            setIsPasswordRepeatIncorrect(isValueIncorrect);
        }
    };

    const validatePassword = async () => {
        if (password !== passwordRepeat) {
            setIsError("La contraseña no coincide");
        } else if (isPasswordinCorrect || isPasswordRepeatinCorrect) {
            setIsError(
                "La contraseña debe de tener una mayuscula y un numero y una longitud de 8 a 24 caracteres"
            );
        } else {
            submitForm(password, passwordRepeat, optional)
                .then(response => {
                    setStep(3);
                })
                .catch(error => {
                    setStep(4);
                });
        }
    };

    return (
        <div className="form">
            <h1>Crea tu password Manager</h1>
            <p>
                En primer lugar, debes crear una contraseña diferente para sus
                pertenencias electrónicas.
            </p>
            <p>No podrás recuperar tu contraseña.así que recuérdala bien.</p>

            <div>
                <div className="form-inputs">
                    <div className="input-form first-input-form">
                        <label>Crea tu contraseña Maestra</label>
                        <input
                            type="password"
                            value={password}
                            className="input"
                            onChange={OnChangePassword}
                        />
                    </div>
                    <div className="input-form">
                        <label>Repite tu Contraseña Maestra</label>
                        <input
                            type="password"
                            id="passwordRepeat"
                            name="passwordRepeat"
                            required
                            className="input"
                            onChange={onchangePasswordRepeact}
                            value={passwordRepeat}
                        />
                    </div>
                </div>

                <p>
                    También puedes crear una pista que te ayude a recordar tu
                    contraseña mestra.
                </p>

                <div className="input-form">
                    <label htmlFor="crea tu pista">
                        Crea tu pista para recordar tu contraseña (opcional)
                    </label>
                    <input
                        type="text"
                        placeholder="Introduce una pista ... "
                        width="100%"
                        maxLength="255"
                        onChange={onChangeOptional}
                    />
                </div>
            </div>

            <div className="action-buttons">
                <button
                    className="button-cancel"
                    onClick={() => {
                        setStep(1);
                    }}
                >
                    Cancelar
                </button>
                <button onClick={validatePassword} className="button-next">
                    Siguente {">"}
                </button>
            </div>
            <div>{isError}</div>
        </div>
    );
}

Form.propTypes = {
    setStep: PropTypes.func,
};

export default Form;
