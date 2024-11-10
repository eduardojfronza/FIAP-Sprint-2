import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
  function Elements(user) {
    switch (user) {
      case "Produtor":
        return (
          <>
            <header className="header">
              <nav className="navigation">
                <ul>
                  <li>
                    <Link to="/producer">home</Link>
                  </li>
                  <li>
                    <Link to="/producer/data">dados</Link>
                  </li>
                  <li>
                    <Link to="/producer/products">meus produtos</Link>
                  </li>
                  <li>
                    <Link to="/">sair</Link>
                  </li>
                </ul>
              </nav>
              <p>Produtor</p>
            </header>
          </>
        );
      case "Comerciante":
        return (
          <>
            <header className="header">
              <nav className="navigation">
                <ul>
                  <li>
                    <Link to="/">sair</Link>
                  </li>
                </ul>
              </nav>
              <p>Comerciante</p>
            </header>
          </>
        );
      default:
        return null;
    }
  }

  return Elements(props.user);
}

export default Header;
