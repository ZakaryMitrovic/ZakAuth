import { useState,useContext } from "react";
import { auth } from "../../config/firebase";
import { authContexte } from "../../Contexte/authContexte";


const Login = props => {
    const ctx = useContext(authContexte);
    const [auth, setAuth] = useState({
        email: "",
        password: ""
    });
    const SubmitForm = async (e) => {
        e.preventDefault();
        ctx.login(auth.email,auth.password);
    };
    const updateState = (value, prop) => {
        setAuth((current) => {
          return {
            ...current,
            [prop]: value,
          };
        });
      };

    return (
        <section>
            <h1>Authentification</h1>
            <form name="monForm" noValidate onSubmit={(e) => SubmitForm(e)}>
            <div className="form-group">
                    <label htmlFor="fld_username">Courriel:</label>
                    <input className="form-control" type="text" id="fld_username" required onChange={(e) => updateState(e.target.value, "email")}/>
                </div>
                <div className="form-group">
                    <label htmlFor="fld_pwd">Mot de passe</label>
                    <input className="form-control" type="password" id="fld_pwd" required onChange={(e) => updateState(e.target.value, "password")}/>
                </div>
                <input className={
            auth.email.trim() === "" || auth.password.trim() === ""
              ? "btn btn-danger"
              : "btn btn-primary"
          } type="submit" value="Authentifier"  disabled={
            auth.email.trim() === "" || auth.password.trim() === ""
              ? true
              : false
          }/>
            </form>
        </section>
    );
};

export default Login;
