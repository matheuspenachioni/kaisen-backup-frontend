export type ChapterHistoryType = {
  id: string
  order: number
  pagesRead: number
}

export type ChapterType = {
  id: string
  title: string
  subtitle: string
  order: number
  pages: {
    page: string
    source: string
  }[]
}

export function useUserHistory() {
  const history = localStorage.getItem('chaptersHistory')
  if (!history) {
    localStorage.setItem('chaptersHistory', JSON.stringify([]))
  }

  const parsedHistory = JSON.parse(history || '[]') as ChapterHistoryType[]

  function addChapterToHistory(currentChapter: ChapterType) {
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

  function updateChapterInHistory(chapterId: string, pagesRead: number) {
    const chapterHistory = parsedHistory.find((searchChapter) => searchChapter.id === chapterId)
    if (!chapterHistory) return
    if (chapterHistory.pagesRead >= pagesRead) return
    const historyWithoutCurrentChapter = parsedHistory.filter((searchChapter) => searchChapter.id !== chapterId)
    const newHistory = JSON.stringify([...historyWithoutCurrentChapter, { ...chapterHistory, pagesRead: pagesRead }])
    localStorage.setItem('chaptersHistory', newHistory)
  }
  return { parsedHistory, addChapterToHistory, updateChapterInHistory }
}
