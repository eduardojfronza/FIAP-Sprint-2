import { Link, redirect } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import "../../styles/Login.css";

export const USERS = ["Comerciante", "Produtor"];

function Register() {
  function Submit(event) {
    event.preventDefault();

    redirect("/");
  }

  return (
    <main>
      <section className="login_container">
        <div>
          <form onSubmit={Submit}>
            <h1>
              Seja <span>bem vindo(a)</span>, para cadastrar informe seus dados
            </h1>

            <div className="inputs">
              <Select type="text" placeholder="teste" options={USERS} />
              <Input type="text" placeholder="Digite seu nome" />
              <Input type="text" placeholder="Digite seu cpf ou cnpj" />
              <Input type="text" placeholder="Digite sua senha" />
            </div>

            <div className="buttons">
              <Link to="/producer">
                <Button type="submit" children="Entrar" variant="primary" />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;
