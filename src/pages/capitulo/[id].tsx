import './Chapter.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useChapters } from '@hooks/chapters'

function Chapter() {
	const VIEW_MODE = {
		PAGE_BY_PAGE: 'page-by-page',
		ALL_AT_ONCE: 'all-at-once'
	}

	const chapters = useChapters()
	const { id } = useParams()
	const initialChapter = chapters.find((chapter) => chapter.id.toString() === id) || chapters[chapters.length - 1]
	const preferredViewMode = localStorage.getItem('viewMode')

	const [currentChapter, setCurrentChapter] = useState(initialChapter)
	const [currentPage, setCurrentPage] = useState(0)
	const [viewMode, setViewMode] = useState(preferredViewMode || VIEW_MODE.PAGE_BY_PAGE)

	useEffect(() => {
		setCurrentPage(0)
	}, [currentChapter])

	const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedChapter = chapters.find((chapter) => chapter.id === e.target.value)
		setCurrentChapter(selectedChapter || chapters[chapters.length - 1])
	}

	const nextPage = () => {
		if (currentPage < currentChapter.pages.length - 1) {
			setCurrentPage(currentPage + 1)
		}
	}

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleChangeViewMode = (viewMode: string) => {
		setViewMode(viewMode)
		localStorage.setItem('viewMode', viewMode)
	}

	return (
		<main>
			<div>
				<h1 className="title">{currentChapter.subtitle}</h1>
			</div>
			<div>
				<button
					className="horizontal-button"
					onClick={() => handleChangeViewMode(VIEW_MODE.PAGE_BY_PAGE)}
					style={viewMode === VIEW_MODE.PAGE_BY_PAGE ? { background: 'gray', color: 'white' } : {}}
				>
					Leitura Horizontal
				</button>
				<button
					className="vertical-button"
					onClick={() => handleChangeViewMode(VIEW_MODE.ALL_AT_ONCE)}
					style={viewMode === VIEW_MODE.ALL_AT_ONCE ? { background: 'gray', color: 'white' } : {}}
				>
					Leitura Vertical
				</button>

				<select className="chapter-select" value={currentChapter.id} onChange={(e) => handleChapterChange}>
					{chapters.map((chapter) => (
						<option key={chapter.id} value={chapter.id}>
							{chapter.title}
						</option>
					))}
				</select>
			</div>

			{viewMode === VIEW_MODE.PAGE_BY_PAGE && (
				<div>
					<img
						className="chapter-page"
						src={currentChapter.pages[currentPage].source}
						alt={`Página ${currentPage + 1}`}
					/>
					<button className="prev-button" onClick={prevPage} disabled={currentPage === 0}>
						<FaAngleLeft />
					</button>
					<button className="next-button" onClick={nextPage} disabled={currentPage === currentChapter.pages.length - 1}>
						<FaAngleRight />
					</button>
				</div>
			)}

			{viewMode === VIEW_MODE.ALL_AT_ONCE && (
				<div>
					{currentChapter.pages.map((page, idx) => (
						<img loading="lazy" className="chapter-page" key={idx} src={page.source} alt={`Página ${idx + 1}`} />
					))}
				</div>
			)}
		</main>
	)
}

export default Chapter
