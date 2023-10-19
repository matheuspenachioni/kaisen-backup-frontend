import './Community.css'

export function Community() {
	return (
		<main>
			<h1 className="title">Comunidade</h1>
			<span className="subtitle">
				Quer ficar por dentro das discussões sobre os capítulos ou episódios mais recentes de Jujutsu Kaisen, das
				teorias mais mirabolantes e dos memes sem pé e nem cabeça, além de fazer novas amizades? Venha interagir com a
				gente!
			</span>
			<div>
				<h1 className="title">Redes Sociais</h1>
				<a rel="noreferrer" href="https://discord.gg/backup-jujutsu-kaisen-brasil-1133246540044054601" target="_blank">
					<img className="icon discord-icon" src="./src/assets/icons/discord.png" alt="Logo do Discord" />
				</a>
				<a rel="noreferrer" href="https://www.facebook.com/kaisenbackup" target="_blank">
					<img className="icon discord-icon" src="./src/assets/icons/facebook.webp" alt="Logo do Facebook" />
				</a>
				<a rel="noreferrer" href="https://t.me/+FCinTLV4RQk5N2Rh" target="_blank">
					<img className="icon telegram-icon" src="./src/assets/icons/telegram.webp" alt="Logo do Telegram" />
				</a>
				<a rel="noreferrer" href="https://x.com/kaisenbackup" target="_blank">
					<img className="icon twitter-icon" src="./src/assets/icons/x.png" alt="Logo do X" />
				</a>
			</div>
		</main>
	)
}
