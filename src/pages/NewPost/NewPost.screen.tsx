import styles from './NewPost.module.css'
import { AdminNavbar } from '@components/AdminNavbar/AdminNavbar'
import { AuthRequired } from '@components/AuthRequired/AuthRequired'
import { ChangeEvent, useState } from 'react'

export function NewPost() {
	const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files
		if (files) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setImagePreview(reader.result)
			}
			reader.readAsDataURL(files[0])
		}
	}

	return (
		<AuthRequired>
			{() => (
				<main className={styles.newPostContainer}>
					<div className={styles.newPostContent}>
						<div>
							<h1 className={styles.newPostContentTitle}>Nova Postagem</h1>
							<div className={styles.postField}>
								<label htmlFor="post-title" className={styles.postLabel}>Título</label>
								<input type="text" id="post-title" placeholder="O que esperar de..." className={styles.postInput} />
							</div>
							<div className={styles.postField}>
								<label htmlFor="post-content" className={styles.postLabel}>Contéudo</label>
								<textarea id="post-content" placeholder="No post de hoje iremos falar sobre..." className={styles.postInput} />
							</div>
							<div className={styles.postField}>
							<input type="file" id="thumbnail" onChange={handleImageChange} className={styles.postInputFile} />
								<button onClick={() => { document.getElementById('thumbnail')?.click() }} className={styles.addImageButton}>
									Adicionar Imagem
								</button>
							</div>
							<button className={styles.sendDataButton}>
								Enviar
							</button>
						</div>
						<div>
							<span>Pré-visualização:</span>
							<img src={imagePreview ? imagePreview.toString() : "https://dummyimage.com/1280x720"} className={styles.previewImage} />
						</div>
					</div>
					<AdminNavbar />
				</main>
			)}
		</AuthRequired>
	)
}