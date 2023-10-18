import { useAuth } from '@hooks/useAuth'
import './Login.css'
import { Link, Navigate } from 'react-router-dom'

function Login() {
	const { user, loading } = useAuth()

	if (user.id) {
		return <Navigate to="/dashboard" replace />
	}

	if (loading) {
		return <div> Loading ...</div>
	}

	return (
		<main className="card">
			<div className="titles-group">
				<h1 className="title jujutsu-font">Kaisen Backup</h1>
				<span className="subtitle">A maior comunidade brasileira de Jujutsu Kaisen</span>
			</div>
			<div className="form-group">
				<label htmlFor="username">Usuário</label>
				<input type="text" id="username" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Senha</label>
				<input type="password" id="password" />
			</div>
			<div className="form-button-group">
				<button type="button">Entrar</button>
				<Link to="#">Recuperar senha</Link>
			</div>
		</main>
	)
}

export default Login
