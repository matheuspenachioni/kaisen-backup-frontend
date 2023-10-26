export type ChapterHistoryType = {
	id: string
	order: number
	pagesRead: number
}

export function useUserHistory() {
	const history = localStorage.getItem('chaptersHistory')
	if (!history) {
		localStorage.setItem('chaptersHistory', JSON.stringify([]))
	}

	const parsedHistory = JSON.parse(history || '[]') as ChapterHistoryType[]
	return parsedHistory
}
