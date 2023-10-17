import './Chapter.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { chapters } from './chapters.js';

function Chapter() {
    const { chapterId } = useParams();
    const initialChapter = chapters.find(chapter => chapter.id.toString() === chapterId) || chapters[chapters.length - 1];

    const [currentChapter, setCurrentChapter] = useState(initialChapter);
    const [currentPage, setCurrentPage] = useState(0);
    const [viewMode, setViewMode] = useState('page-by-page');

    useEffect(() => {
        setCurrentPage(0);
    }, [currentChapter]);

    const handleChapterChange = (e) => {
        const selectedChapter = chapters.find(chapter => chapter.id === e.target.value);
        setCurrentChapter(selectedChapter);
    };

    const nextPage = () => {
        if (currentPage < currentChapter.pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <main>
            <div>
                <h1 className="title">{currentChapter.subtitle}</h1>
            </div>
            <div>
                <button className="horizontal-button"
                    onClick={() => setViewMode('page-by-page')}
                    style={viewMode === 'page-by-page' ? { background: 'gray', color: 'white' } : {}}
                >
                    Leitura Horizontal
                </button>
                <button className="vertical-button"
                    onClick={() => setViewMode('all-at-once')}
                    style={viewMode === 'all-at-once' ? { background: 'gray', color: 'white' } : {}}
                >
                    Leitura Vertical
                </button>

                <select className="chapter-select" value={currentChapter.id} onChange={handleChapterChange}>
                    {chapters.map(chapter => (
                        <option key={chapter.id} value={chapter.id}>
                            {chapter.title}
                        </option>
                    ))}
                </select>
            </div>


            {viewMode === 'page-by-page' && (
                <div>
                    <img className="chapter-page" src={currentChapter.pages[currentPage].source} alt={`Página ${currentPage + 1}`} />
                    <button className="prev-button" onClick={prevPage} disabled={currentPage === 0}><FaAngleLeft /></button>
                    <button className="next-button" onClick={nextPage} disabled={currentPage === currentChapter.pages.length - 1}><FaAngleRight /></button>
                </div>
            )}

            {viewMode === 'all-at-once' && (
                <div>
                    {currentChapter.pages.map((page, idx) => (
                        <img className="chapter-page" key={idx} src={page.source} alt={`Página ${idx + 1}`} />
                    ))}
                </div>
            )}
        </main>
    );
}

export default Chapter;