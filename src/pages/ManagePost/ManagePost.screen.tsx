import styles from './ManagePost.module.css'
import { Link } from 'react-router-dom'
import { AuthRequired } from '@components/AuthRequired/AuthRequired'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { AdminNavbar } from '@components/AdminNavbar/AdminNavbar'

export function ManagePost() {
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
        <AuthRequired>
            {() => (
                <main className={styles.managePostContainer}>
                    <section className={styles.managePostContent}>
                        <h1 className={styles.managePostTitle}>Postagens</h1>
                        <Link to="/novo-post" className='block text-center mt-2 mb-4 bg-green-700 w-full text-white px-4 py-2 rounded-md hover:bg-green-800 transition'>Criar Postagem</Link>
                        <div className={styles.postsSection}>
                            {fakePosts.map((fakePost, index) => (
                                <div key={index} className={styles.postCard}>
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
                                        <div className={styles.postButtons}>
                                            <button className={styles.editButton} >Editar</button>
                                            <button className={styles.deleteButton} >Deletar</button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>
                    <AdminNavbar/>
                </main>
            )}
        </AuthRequired>
    );
}
