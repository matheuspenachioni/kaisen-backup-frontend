import styles from './ManageChapter.module.css'
import { Link } from 'react-router-dom'
import { AuthRequired } from '@components/AuthRequired/AuthRequired'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { AdminNavbar } from '@components/AdminNavbar/AdminNavbar'

export function ManageChapter() {
    const fakeChapters = [
        { id: 1, title: 'Capítulo 240: Título', date: '24/10/2023' },
        { id: 2, title: 'Capítulo 239: Título', date: '18/10/2023' },
        { id: 4, title: 'Capítulo 238: Título', date: '04/10/2023' },
        { id: 5, title: 'Capítulo 237: Título', date: '27/09/2023' },
        { id: 6, title: 'Capítulo 236: Título', date: '20/09/2023' },
        { id: 8, title: 'Capítulo 235: Título', date: '06/09/2023' },
    ]

    return (
        <AuthRequired>
            {() => (
                <main className={styles.manageChapterContainer}>
                    <section className={styles.manageChapterContent}>
                        <h1 className={styles.manageChapterTitle}>Capítulos</h1>
                        <Link to="/novo-capitulo" className='block text-center mt-2 mb-4 bg-green-700 w-full text-white px-4 py-2 rounded-md hover:bg-green-800 transition'>Criar Capítulo</Link>
                        <div className={styles.chaptersSection}>
                            {fakeChapters.map((fakeChapter, index) => (
                                <div key={index} className={styles.chapterCard}>
                                    <div className={styles.chapterInfo}>
                                        <h2 className={styles.chapterInfoTitle}>
                                            {fakeChapter.title}
                                        </h2>
                                        <div className={styles.chapterInfoDate}>
                                            <FaRegCalendarAlt className={styles.chapterInfoIcon} /> {fakeChapter.date}
                                        </div>
                                        <div className={styles.chapterButtons}>
                                            <button className={styles.editButton} >Editar</button>
                                            <button className={styles.deleteButton} >Deletar</button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>
                    <AdminNavbar />
                </main>
            )}
        </AuthRequired>
    );
}
