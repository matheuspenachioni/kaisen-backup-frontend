import './Chapter.css'
import s from './chapter.module.css'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useChapters } from '@hooks/useChapters'
import { ChapterImage } from '@components/Chapter/ChapterImage'
import { useUserHistory } from '@hooks/useUserHistory'
import { ChapterConfigs } from '@components/index'
import { motion } from 'framer-motion'

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
  const { addChapterToHistory } = useUserHistory()

  useEffect(() => {
    if (pageRef) {
      addChapterToHistory(currentChapter)
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
    <div className={s.chapterContainer} ref={pageRef}>
      <ChapterConfigs
        currentZoom={zoom}
        onChangeZoom={handleZoomChange}
        currentViewMode={viewMode}
        onChangeViewMode={handleChangeViewMode}
      />
      <div>
        <h1 className="title">{currentChapter.subtitle}</h1>
      </div>
      <div>
        <select className="chapter-select" value={currentChapter.id} onChange={handleChapterChange}>
          {chapters.map((chapter) => (
            <option key={chapter.id} value={chapter.id}>
              {chapter.title}
            </option>
          ))}
        </select>
      </div>

      {viewMode === VIEW_MODE.PAGE_BY_PAGE && (
        <div className={s.chapterWrapper}>
          <ChapterImage
            zoom={zoom}
            chapter={currentChapter.id}
            index={currentPage + 1}
            image={currentChapter.pages[currentPage].source}
            alt={`Página ${currentPage + 1}`}
          />
          <motion.div className={s.buttonsChapterPage} initial={{ bottom: '0px' }} animate={{ bottom: '50px' }}>
            <button type="button" className="prev-button" onClick={prevPage} disabled={currentPage === 0}>
              <FaAngleLeft />
            </button>
            <button
              type="button"
              className="next-button"
              onClick={nextPage}
              disabled={currentPage === currentChapter.pages.length - 1}
            >
              <FaAngleRight />
            </button>
          </motion.div>
        </div>
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
    </div>
  )
}
