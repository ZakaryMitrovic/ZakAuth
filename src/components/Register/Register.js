import { useContext, useState } from "react";
import { authContexte } from "../../Contexte/authContexte";

const Register = (props) => {
  const ctx = useContext(authContexte);

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const SubmitForm = async (e) => {
    e.preventDefault();
    ctx.register(auth.email,auth.password);
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
      <h1>Inscription</h1>
      <form onSubmit={(e) => SubmitForm(e)} name="monForm" noValidate>
        <div className="form-group">
          <label htmlFor="fld_username">Courriel:</label>
          <input
            className="form-control"
            type="text"
            id="fld_username"
            required
            onChange={(e) => updateState(e.target.value, "email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fld_pwd">Mot de passe</label>
          <input
            className="form-control"
            type="password"
            id="fld_pwd"
            required
            onChange={(e) => updateState(e.target.value, "password")}
          />
        </div>
        <input
          className={
            auth.email.trim() === "" || auth.password.trim() === ""
              ? "btn-danger"
              : "btn-primary"
          }
          disabled={
            auth.email.trim() === "" || auth.password.trim() === ""
              ? true
              : false
          }
          type="submit"
          value="Créer"
        />
      </form>
    </section>
  );
};

export default Register;
