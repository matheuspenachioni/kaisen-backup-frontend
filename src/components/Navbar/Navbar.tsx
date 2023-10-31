import styles from './NavBar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useAuth } from '@hooks/useAuth'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const { user } = useAuth()

	return (
		<nav className={styles.navbarContainer}>
			<div className={styles.navbarContent}>
				<h3 className={styles.navbarContentTitle}>KAISEN BACKUP</h3>
				<div className={styles.navbarButton}>
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
					</button>
				</div>
				<div className={`${isOpen ? styles.navbarIsOpenTrue : styles.navbarIsOpenFalse}`}>
					<NavLink className={({ isActive }) => isActive ? `${styles.navbarLink} ${styles.navbarActiveLink}` : styles.navbarLink} to="/" end>
						Início
					</NavLink>
					<NavLink className={({ isActive }) => isActive ? `${styles.navbarLink} ${styles.navbarActiveLink}` : styles.navbarLink} to="/anime" end>
						Anime
					</NavLink>
					<NavLink className={({ isActive }) => isActive ? `${styles.navbarLink} ${styles.navbarActiveLink}` : styles.navbarLink} to="/manga" end>
						Mangá
					</NavLink>
					<NavLink className={({ isActive }) => isActive ? `${styles.navbarLink} ${styles.navbarActiveLink}` : styles.navbarLink } to="/guia" end>
						Guia
					</NavLink>
					<NavLink className={({ isActive }) => isActive ? `${styles.navbarLink} ${styles.navbarActiveLink}` : styles.navbarLink} to="/universo" end>
						Universo
					</NavLink>
					<NavLink className={({ isActive }) => isActive ? `${styles.navbarLink} ${styles.navbarActiveLink}` : styles.navbarLink} to="/comunidade" end>
						Comunidade
					</NavLink>
					{user.id ?
						<Link className={styles.navbarMagicLink} to="/dashboard">
							Gerenciar
						</Link>
						:
						<Link className={styles.navbarMagicLink} to="/login">
							Login
						</Link>
					}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
