import styles from './NewChapter.module.css'
import { AdminNavbar } from '@components/AdminNavbar/AdminNavbar'
import { AuthRequired } from '@components/AuthRequired/AuthRequired'
import { ChangeEvent, useState } from 'react'

export function NewChapter() {
	const [pages, setPages] = useState<(string | File)[]>([])

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
		const file = event.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onloadend = () => {
			const updatedPages = [...pages];
			updatedPages[index] = reader.result as string;
			setPages(updatedPages);
		};
		reader.readAsDataURL(file);
	}

	const addPage = () => {
		setPages([...pages, ''])
	}

	const removePage = (index: number) => {
		const updatedPages = [...pages];
		updatedPages.splice(index, 1);
		setPages(updatedPages);
	}

	return (
		<AuthRequired>
			{() => (
				<main className={styles.newChapterContainer}>
					<div className={styles.newChapterContent}>
						<div className={styles.defaultDiv}>
							<h1 className={styles.newChapterContentTitle}>Novo Capítulo</h1>
						</div>
						<div className={styles.newChapterForm}>
							<div className={styles.defaultDiv}>
								<label htmlFor="chap-title" className={styles.chapterLabel}>Capítulo</label>
								<input type="text" id="chap-title" placeholder="Capítulo nº240" className={styles.chapterInput} />
							</div>
							<div className={styles.defaultDiv}>
								<label htmlFor="chap-subtitle" className={styles.chapterLabel}>Título</label>
								<input type="text" id="chap-subtitle" placeholder="Sobrevivente Idiota! ~Sobreviva!~" className={styles.chapterInput} />
							</div>
						</div>
						<div className={styles.newPageButtonDiv}>
							<button onClick={addPage} className={styles.newPageButton}>
								Adicionar Nova Página
							</button>
						</div>
						<div className={styles.pagesGroup}>
							{pages.map((page, index) => (
								<div key={index} className={styles.pageCard}>
									<div className={styles.pageCardThumb}>
										{page && <img className={styles.pageCardImage} src={typeof page === 'string' ? page : URL.createObjectURL(page)} alt={`Preview ${index + 1}`} />}
									</div>
									<div className={styles.pageCardContent}>
										<label htmlFor={`page-${index + 1}`} className={styles.chapterLabel}>Página {index + 1}</label>
										<input type="file" id={`page-${index + 1}`} onChange={(e) => handleImageChange(e, index)} className={styles.chapterInputFile} />
										<button onClick={() => { document.getElementById(`page-${index + 1}`)?.click() }} className={styles.addAltImageButton}>
											{ page ? 'Alterar Imagem' : 'Adicionar Imagem' }
										</button>
										<label className={styles.chapterLabel}>Descrição</label>
										<textarea className={styles.chapterInfo} placeholder="O capítulo começa com um breve flashback de Feiticeiros fazendo uma reunião de grupo discutindo sobre como fazer um ataque surpresa em Kenjaku antes do final de Gojo vs Sukuna" />
										<button onClick={() => removePage(index)} className={styles.removeCardButton}>
											Remover Página {index + 1}
										</button>
									</div>
								</div>
							))}
						</div>
							<button className={styles.sendDataButton}>
								Enviar
							</button>
					</div>
					<AdminNavbar />
				</main>
			)}
		</AuthRequired>
	);
}
