import styles from './AdminNavbar.module.css'
import { Link } from 'react-router-dom'
import { FaHome, FaBook, FaRegFileAlt, FaRegArrowAltCircleRight } from 'react-icons/fa'

export function AdminNavbar() {

    return (
        <div className={styles.adminNavbarContainer}>
            <div className={styles.adminNavbarContent}>
                <Link to="/dashboard" className={styles.adminNavbarLink}>
                    <FaHome className={styles.adminNavbarIcon} />
                    <span className={styles.adminNavbarSpan}>Início</span>
                </Link>
                <Link to="/capitulos" className={styles.adminNavbarLink}>
                    <FaBook className={styles.adminNavbarIcon} />
                    <span className={styles.adminNavbarSpan}>Capítulos</span>
                </Link>
                <Link to="/postagens" className={styles.adminNavbarLink}>
                    <FaRegFileAlt className={styles.adminNavbarIcon} />
                    <span className={styles.adminNavbarSpan}>Postagens</span>
                </Link>
                <Link to="/logout" className={styles.adminNavbarLink}>
                    <FaRegArrowAltCircleRight className={styles.adminNavbarLogoutIcon} />
                    <span className={styles.adminNavbarSpan}>Sair</span>
                </Link>
            </div>
        </div>
    )
}