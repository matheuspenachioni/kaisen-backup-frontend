import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.baseFooter}>
            <div className={styles.contentFooter}>
                <p className={styles.textFooter}>© 2023 Kaisen Backup - Todos os Direitos Reservados.</p>
            </div>
        </div>
    )
}

export default Footer