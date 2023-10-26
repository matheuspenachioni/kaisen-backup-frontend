import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useRef, useEffect } from 'react'
import { ChapterHistoryType } from '@hooks/index'
import s from './ChapterImage.module.css'

export function ChapterImage({
	image,
	alt,
	index,
	chapter,
	zoom
}: {
	image: string
	alt: string
	index: number
	chapter: string
	zoom: number
}) {
	const imageRef = useRef<HTMLImageElement>(null)
	useEffect(() => {
		if (!imageRef) return
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					const history = localStorage.getItem('chaptersHistory')
					if (history) {
						const parsedHistory = JSON.parse(history) as ChapterHistoryType[]
						const chapterHistory = parsedHistory.find((searchChapter) => searchChapter.id === chapter)
						if (!chapterHistory) return
						if (chapterHistory.pagesRead >= index) return
						const newHistory = JSON.stringify([
							...parsedHistory.filter((searchChapter) => searchChapter.id !== chapter),
							{ ...chapterHistory, pagesRead: index }
						])
						localStorage.setItem('chaptersHistory', newHistory)
					}
				}
			},
			{ rootMargin: '-400px' }
		)
		observer.observe(imageRef.current!)
		return () => {
			observer.disconnect()
		}
	}, [index])

	return (
		<div id={`chapter-page${index}`} ref={imageRef} className={s.container}>
			<LazyLoadImage
				width={`${100 * zoom}%`}
				alt={alt}
				effect="blur"
				wrapperClassName={s.imageContainer}
				wrapperProps={{ style: { display: 'flex', justifyContent: 'center' } }}
				src={image}
			/>
		</div>
	)
}
