import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header(props) {
    function Elements(user) {
        switch (user) {
            case "Produtor":
                return <>
                    <header className="header">
                        <nav className='navigation-producer'>
                            <ul>
                                <li><Link to={'/home/producer'}>Home</Link></li>
                                <li><Link>Dados</Link></li>
                                <li><Link>Meus produtos</Link></li>
                            </ul>
                        </nav>
                        <p>Produtor</p>
                    </header>
                </>
            case "Comerciante":
                return <>
                    <header className="header">
                        <div className='navigation-merchant'>
                            <p>Comerciante</p>
                        </div>
                    </header>
                </>
            default:
                return {}
        }
    }

    return Elements(props.user)

}

export default Header