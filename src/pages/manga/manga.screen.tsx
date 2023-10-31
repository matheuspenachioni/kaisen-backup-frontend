import styles from './Manga.module.css'
import { useVolumes } from '@hooks/useVolumes'
import { useChapters } from '@hooks/useChapters'
import { useUserHistory } from '@hooks/useUserHistory'
import { MangaChapterDisplay } from '@components/index'

export function Manga() {
	const volumes = useVolumes()
	const chapters = useChapters()
	const history = useUserHistory()

	return (
		<main className={styles.mangaContainer}>
			<div className={styles.mangaContent}>
				<div className={styles.defaultDiv}>
					<h1 className={styles.mangaContentTitle}>Sinopse</h1>
					<span className={styles.mangaContentSpan}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, tenetur dolores laboriosam autem eligendi doloremque, aperiam distinctio obcaecati, assumenda iusto quae dolorem laudantium. Expedita delectus ea explicabo, sunt accusamus nobis.
					</span>
				</div>
				<div className={styles.defaultDiv}>
					<h1 className={styles.mangaContentSubtitle}>De fãs para fãs</h1>
					<span className={styles.mangaContentSpan}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta voluptatibus mollitia tempore doloribus aspernatur, tempora illo explicabo omnis qui, ratione est nam ex molestiae commodi ipsa natus dignissimos sequi.
					</span>
					<div className={styles.chaptersGroup}>
						{chapters.map(
							(chapter) =>
								chapter.pages.length > 0 && (
									<MangaChapterDisplay
										alt={`Capítulo ${chapter.title}`}
										image={chapter.pages[0].source}
										link={chapter.id}
										pagesRead={history.find((item) => item.id === chapter.id)?.pagesRead || 0}
										key={chapter.id}
										pagesTotal={chapter.pages.length}
									/>
								)
						)}
					</div>
				</div>
				<div>
					<h1 className={styles.mangaContentSubtitle}>Volumes</h1>
					<span className={styles.mangaContentSpan}>
						Todas as capas oficiais do mangá em japonês, desde o prequel até o volume mais atual da história principal.
					</span>
					<div className={styles.volumesGroup}>
						{volumes.map((volume) => (
							<img key={volume.id} src={volume.source} alt={`Capa do Volume ${volume.id}`} />
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
