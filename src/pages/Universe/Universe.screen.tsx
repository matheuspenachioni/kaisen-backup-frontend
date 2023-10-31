import styles from './Universe.module.css'

export function Universe() {
	return (
		<main className={styles.universeContainer}>
			<div className={styles.universeContent}>
				<h1 className={styles.universeContentTitle}>Universo</h1>
				<span className={styles.universeContentSpan}>Volte em breve, estamos em construção...</span>
			</div>
		</main>
	)
}
