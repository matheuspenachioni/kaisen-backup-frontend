import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useRef, useEffect } from 'react'
import { useUserHistory } from '@hooks/index'
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
  const { updateChapterInHistory } = useUserHistory()
  const imageRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (!imageRef) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(entry)
          console.log(chapter, index)
          updateChapterInHistory(chapter, index)
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
