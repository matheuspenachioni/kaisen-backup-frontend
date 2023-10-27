import './Navbar.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useAuth } from '@hooks/useAuth'
import { ANIME_ROUTE, BASE_ROUTE, COMMUNITY_ROUTE, GUIDE_ROUTE, MANGA_ROUTE, UNIVERSE_ROUTE } from '@constants/routes'

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
        <Link to={BASE_ROUTE}>Início</Link>
        <Link to={ANIME_ROUTE}>Anime</Link>
        <Link to={MANGA_ROUTE}>Mangá</Link>
        <Link to={GUIDE_ROUTE}>Guia</Link>
        <Link to={UNIVERSE_ROUTE}>Universo</Link>
        <Link to={COMMUNITY_ROUTE}>Comunidade</Link>
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
