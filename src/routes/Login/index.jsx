import { Link, redirect } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "../../styles/Login.css";

function Login() {
  function Submit(event) {
    event.preventDefault();

    redirect("/merchant");
  }

  return (
    <main>
      <section className="login_container">
        <div>
          <form onSubmit={Submit}>
            <h1>
              Seja <span>bem vindo(a)</span>, para entrar informe seus dados
            </h1>

            <div className="inputs">
              <Input type="text" placeholder="Digite seu CPF ou CNPJ" />
              <Input type="text" placeholder="Digite sua senha" />
            </div>

            <div className="buttons">
              <Link to="/register">
                <Button
                  type="button"
                  children="Criar conta"
                  variant="secondary"
                />
              </Link>
              <Link to="/producer">
                <Button
                  type="button"
                  children="Entrar produtor"
                  variant="primary"
                />
              </Link>
              <Link to="/merchant">
                <Button
                  type="submit"
                  children="Entrar comerciante"
                  variant="primary"
                />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
