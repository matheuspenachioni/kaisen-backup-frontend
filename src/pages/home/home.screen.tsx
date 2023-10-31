import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { FaRegCalendarAlt } from 'react-icons/fa'

export function Home() {
	const fakePosts = [
		{ id: 1, thumbnail: 'https://dummyimage.com/420x260', title: 'Spoilers do Cap. 240', date: '24/10/2023' },
		{ id: 2, thumbnail: 'https://dummyimage.com/420x260', title: 'Spoilers do Cap. 239', date: '18/10/2023' },
		{ id: 4, thumbnail: 'https://dummyimage.com/420x260', title: 'Spoilers do Cap. 238', date: '04/10/2023' },
		{ id: 5, thumbnail: 'https://dummyimage.com/420x260', title: 'Spoilers do Cap. 237', date: '27/09/2023' },
		{ id: 3, thumbnail: 'https://dummyimage.com/420x260', title: 'Adeus amigos! Eu vou me...', date: '20/09/2023' },
		{ id: 6, thumbnail: 'https://dummyimage.com/420x260', title: 'Spoilers do Cap. 236', date: '20/09/2023' },
		{ id: 7, thumbnail: 'https://dummyimage.com/420x260', title: 'Memes da vitória do Gojo', date: '13/09/2023' },
		{ id: 8, thumbnail: 'https://dummyimage.com/420x260', title: 'Spoilers do Cap. 235', date: '06/09/2023' },
	]

	return (
		<main className={styles.homeContainer}>
			<section className={styles.homeContent}>
				<h1 className={styles.homeTitle}>Postagens</h1>
				<div className={styles.postsSection}>
					{fakePosts.map(fakePost => (
						<Link to="/" className={styles.postCard}>
							<div className={styles.postCardThumb}>
								<img className={styles.postImage} src={fakePost.thumbnail} alt="Descrição da imagem" />
							</div>
							<div className={styles.postInfo}>
								<h2 className={styles.postInfoTitle}>
									{fakePost.title}
								</h2>
								<div className={styles.postInfoDate}>
									<FaRegCalendarAlt className={styles.postInfoIcon} /> {fakePost.date}
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	)
}
