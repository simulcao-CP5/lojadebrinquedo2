import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>LOJA<span></span></h1>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Jogos</Link>
          </li>
          <li>
            <Link>Contato</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
