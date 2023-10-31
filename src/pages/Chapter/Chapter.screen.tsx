import styles from './Chapter.module.css'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useChapters } from '@hooks/useChapters'
import { ChapterImage } from '@components/Chapter/ChapterImage'
import { useUserHistory } from '@hooks/useUserHistory'
import { ChapterConfigs } from '@components/index'

export const VIEW_MODE = {
	PAGE_BY_PAGE: 'page-by-page',
	ALL_AT_ONCE: 'all-at-once'
} as const

export type ViewModeKeys = keyof typeof VIEW_MODE

export function Chapter() {
	const chapters = useChapters()
	const { id } = useParams()
	const pageRef = useRef<HTMLDivElement>(null)
	const initialChapter = chapters.find((chapter) => chapter.id.toString() === id) || chapters[chapters.length - 1]
	const preferredViewMode = localStorage.getItem('viewMode') as (typeof VIEW_MODE)[ViewModeKeys]

	const [currentChapter, setCurrentChapter] = useState(initialChapter)
	const [zoom, setZoom] = useState(1)
	const [currentPage, setCurrentPage] = useState(0)
	const [viewMode, setViewMode] = useState(preferredViewMode || VIEW_MODE.PAGE_BY_PAGE)
	const parsedHistory = useUserHistory()

	function handleChapterHistory() {
		const chapterHistory = parsedHistory.some((chapter) => chapter.id === currentChapter.id)
		if (!chapterHistory) {
			const newHistory = JSON.stringify([
				...parsedHistory,
				{ id: currentChapter.id, order: currentChapter.order, pagesRead: 1 }
			])
			localStorage.setItem('chaptersHistory', newHistory)
			return
		}
	}

	useEffect(() => {
		if (pageRef) {
			handleChapterHistory()
		}
	}, [])

	const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedChapter = chapters.find((chapter) => chapter.id === e.target.value)
		setCurrentChapter(selectedChapter || chapters[chapters.length - 1])
	}

	const nextPage = useCallback(() => {
		if (currentPage < currentChapter.pages.length - 1) {
			setCurrentPage(currentPage + 1)
		}
	}, [currentPage, currentChapter.pages.length])

	const prevPage = useCallback(() => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1)
		}
	}, [currentPage])

	const handleChangeViewMode = useCallback((viewMode: (typeof VIEW_MODE)[ViewModeKeys]) => {
		setViewMode(viewMode)
		localStorage.setItem('viewMode', viewMode)
	}, [])

	const handleZoomChange = useCallback(
		(zoomChange: 'positive' | 'negative') => {
			if (zoomChange === 'positive') {
				if (zoom >= 1) return
				setZoom(zoom + 0.1)
				return
			}
			if (zoom <= 0.8) return
			setZoom(zoom - 0.1)
		},
		[zoom]
	)

	return (
		<main className={styles.chapterContainer} ref={pageRef}>
			<ChapterConfigs
				currentZoom={zoom}
				onChangeZoom={handleZoomChange}
				currentViewMode={viewMode}
				onChangeViewMode={handleChangeViewMode}
			/>
			<div className={styles.chapterTitleDiv}>
				<h1 className={styles.chapterContentTitle}>{currentChapter.title}: {currentChapter.subtitle}</h1>
			</div>
			<div className={styles.chapterSelectDiv}>
				<select className={styles.chapterContentSelect} value={currentChapter.id} onChange={handleChapterChange}>
					{chapters.map((chapter) => (
						<option key={chapter.id} value={chapter.id}>
							{chapter.title}
						</option>
					))}
				</select>
			</div>

			{viewMode === VIEW_MODE.PAGE_BY_PAGE && (
				<>
					<div className={styles.pageCount}>
						{currentPage + 1} / {currentChapter.pages.length}
					</div>
					<div className={styles.displayChapterDiv}>
						<ChapterImage
							zoom={zoom}
							chapter={currentChapter.id}
							index={currentPage + 1}
							image={currentChapter.pages[currentPage].source}
							alt={`Página ${currentPage + 1}`}
						/>
						<div className={styles.actionButtonsGroup}>
							<button className={styles.actionButtonChapter}
								type="button"
								onClick={prevPage}
								disabled={currentPage === 0}
							/>
							<button className={styles.actionButtonChapter}
								type="button"
								onClick={nextPage}
								disabled={currentPage === currentChapter.pages.length - 1}
							/>
						</div>
					</div>
				</>
			)}

			{viewMode === VIEW_MODE.ALL_AT_ONCE && (
				<div>
					{currentChapter.pages.map((page, idx) => (
						<ChapterImage
							zoom={zoom}
							chapter={currentChapter.id}
							index={idx + 1}
							key={idx}
							image={page.source}
							alt={`Página ${idx + 1}`}
						/>
					))}
				</div>
			)}
		</main>
	)
}
