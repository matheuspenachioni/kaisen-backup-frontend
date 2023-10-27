import './Navbar.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useAuth } from '@hooks/useAuth'

function Navbar() {
  const navRef = useRef<HTMLElement | null>(null)
  const { user } = useAuth()

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav')
    }
  }

  return (
    <header>
      <h3 className="jujutsu-font">KAISEN BACKUP</h3>
      <nav ref={navRef}>
        <Link to="/">Início</Link>
        <Link to="/anime">Anime</Link>
        <Link to="/manga">Mangá</Link>
        <Link to="/guia">Guia</Link>
        <Link to="/universo">Universo</Link>
        <Link to="/comunidade">Comunidade</Link>
        {/* Deve aparecer apenas para o Admin quando logado */}
        {user.id && (
          <Link className="admin-option" to="/dashboard">
            Gerenciar
          </Link>
        )}
        <button type="button" className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button type="button" className="nav-btn nav-open-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
