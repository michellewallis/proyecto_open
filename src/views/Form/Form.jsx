import React, { useState } from "react";
import "./Form.scss";

function Form() {

    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [isError, setIsError] = useState("");
    
    

    const OnChangePassword = (event) => {
      const inputPassword = event.target.value;
      setPassword(inputPassword);
    };

    const onchangePasswordRepeact = (event) =>{
        const inputPassword = event.target.value;
        setPasswordRepeat(inputPassword)
    };

    const validatePassword = () =>{
        if(password !== passwordRepeat){
            setIsError("La contraseña no coincide")
        // } else if { password.legth<8 

        }    
    }
      

    return (
        <div className="form">
            <div className="title">
                <h1>Crea tu password Manager</h1>
            </div>
            <p>
                En primer lugar, debes crear una contraseña diferente para sus
                pertenencias electrónicas.
            </p>
            <p>No podrás recuperar tu contraseña.así que recuérdala bien.</p>

            <form>
                <label htmlFor="password">Crea tu contraseña Maestra</label>
                <input type="password" id="password" name="password" required onChange={OnChangePassword} value={password} />
                <label htmlFor="passwordRepeat">Repite tu Contraseña Maestra</label>
                <input type="password" id="passwordRepeat"name="passwordRepeat" required onChange={onchangePasswordRepeact}/>
                <p>
                    También puedes crear una pista que te ayude a recordar tu
                    contraseña mestra.
                </p>

                <label for="">
                    Crea tu pista para recordar tu contraseña (opcional)
                </label>
                <input
                    type="text"placeholder="Introduce una pista ... "width="100%" />
            </form>

            <div className="action-buttons">
                <button className="button-cancel">Cancelar</button>
                <button  onClick={validatePassword} className="button-next">Siguente</button>
            </div>
        </div>
    );
}

export default Form;
