import styles from './Login.module.css'
import { useAuth } from '@hooks/useAuth'
import { Link, Navigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'

export function Login() {
	const { user, loading } = useAuth()

	if (user.id) {
		return <Navigate to="/dashboard" replace />
	}

	if (loading) {
		return <div> Loading ...</div>
	}

	return (
		<section className={styles.loginContainer}>
			<div className={styles.loginContainerContent}>
				<div className={styles.loginContentLeftSide}>
					<h1 className={styles.loginTitle}>Login</h1>
					<form action="#" method="POST">
						<div className={styles.loginFormInputContainer}>
							<label htmlFor="username" className={styles.loginFormLabel}>Usuário</label>
							<input type="text" id="username" name="username" className={styles.loginFormInput} autoComplete='off' />
						</div>
						<div className={styles.loginFormInputContainer}>
							<label htmlFor="password" className={styles.loginFormLabel}>Senha</label>
							<input type="password" id="password" name="password" className={styles.loginFormInput} autoComplete='off' />
						</div>
						<div className={styles.loginFormInputContainer}>
							<a href="#" className={styles.loginDefaultLink}>Esqueceu a senha?</a>
						</div>
						<button type="submit" className={styles.loginFormButton}>
							Entrar
						</button>
					</form>
					<div className={styles.loginFormInputContainer}>
						<Link to="/" className={styles.loginReturnLink}> 
							<FaAngleLeft className={styles.returnLink} /> Voltar
						</Link>
					</div>
				</div>
				<div className={styles.loginContentRightSide}>
					<img src="https://c.wallhere.com/photos/3c/7a/Jujutsu_Kaisen_Sukuna_Ryomen_Sukuna_smiling_tattoo_pink_hair_undercut_hairstyle_red_background-2272316.jpg!d" alt="Imagem de Ryomen Sukuna sorrindo em meio a chamas" className={styles.loginImage} />
				</div>
			</div>
		</section>
	)
}
