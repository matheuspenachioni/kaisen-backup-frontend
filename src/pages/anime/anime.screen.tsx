import styles from './Anime.module.css'

export function Anime() {
	const animeLink = 'https://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen'

	return (
		<main className={styles.animeContainer}>
			<div className={styles.animeContent}>
				<div>
					<h1 className={styles.animeContentTitle}>
						Sinopse
					</h1>
					<span className={styles.animeContentSpan}>
						Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando
						terríveis acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por
						outras Maldições. Certo dia, para salvar amigos que estavam sendo atacados por Maldições, Yuji Itadori engole
						o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Ele então decide se matricular no Colégio Técnico de
						Feitiçaria de Tóquio, uma organização que combate as Maldições... e assim começa a heróica lenda do garoto que
						tornou-se uma Maldição para exorcizar uma Maldição.
					</span>
				</div>
				<div className={styles.animesGroup}>
					<div className={styles.animesCard}>
						<a className={styles.animesCardLink} rel="noreferrer" href={animeLink} target="_blank">
							Jujutsu Kaisen 0
							<img className={styles.animesCardImage} src="./src/assets/banners/jujutsu-kaisen-0.jpg" alt="Capa de Jujutsu Kaisen 0" />
						</a>
					</div>
					<div className={styles.animesCard}>
						<a className={styles.animesCardLink} rel="noreferrer" href={animeLink} target="_blank">
							Jujutsu Kaisen S1
							<img className={styles.animesCardImage} src="./src/assets/banners/jujutsu-kaisen-s1.jpg" alt="Capa de Jujutsu Kaisen S1" />
						</a>
					</div>
					<div className={styles.animesCard}>
						<a className={styles.animesCardLink} rel="noreferrer" href={animeLink} target="_blank">
							Jujutsu Kaisen S2
							<img className={styles.animesCardImage} src="./src/assets/banners/jujutsu-kaisen-s2.jpg" alt="Capa de Jujutsu Kaisen S2" />
						</a>
					</div>
				</div>
			</div>
		</main>
	)
}
