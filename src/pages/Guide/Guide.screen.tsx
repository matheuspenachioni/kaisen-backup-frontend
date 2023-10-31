import styles from './Guide.module.css'

export function Guide() {
	return (
		<main className={styles.guideContainer}>
			<div className={styles.guideContent}>
				<h1 className={styles.guideContentTitle}>Guia</h1>
				<span className={styles.guideContentSpan}>Volte em breve, estamos em construção...</span>
			</div>
		</main>
	)
}
