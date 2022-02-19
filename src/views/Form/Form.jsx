import "./Form.scss";

function Form() {
    return (
        <div className="form">
            <form>
                <h1>Crea tu password Manager</h1>
                <p>
                    En primer lugar, debes crear una contraseña diferente para
                    sus pertenencias electrónicas.
                </p>
                <p>
                    No podrás recuperar tu contraseña.así que recuérdala bien.
                </p>
                <label htmlFor="password">Crea tu contraseña Maestra</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="passwordRepeat">Repite tu Contraseña Maestra</label>
                <input type="password"id="passwordRepeat"name="passwordRepeat"rows="10" required/>
                <p>
                    También puedes crear una pista que te ayude a recordar tu
                    contraseña mestra.
                </p>
                
                <label for="">Crea tu pista para recordar tu contraseña (opcional)</label>
                <input type="text" placeholder="Introduce una pista ..." width="100%"/>
            </form>

            <div className="action-buttons">
                    <button className="button-cancel">Cancelar</button>
                    <button className="button-next">Siguente</button>
                </div>
            
        </div>
    );
}

export default Form;
