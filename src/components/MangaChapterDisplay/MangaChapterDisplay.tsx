import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { ReactComponent as CheckIcon } from '@icons/check-icon.svg'
import s from './MangaChapterDisplay.module.css'

export function MangaChapterDisplay({
  alt,
  image,
  link,
  pagesRead,
  pagesTotal
}: {
  image: string
  alt: string
  link: string
  pagesRead: number
  pagesTotal: number
}) {
  return (
    <Link className={s.container} to={`/capitulo/${link}`}>
      <LazyLoadImage alt={alt} src={image} width={200} height={250} className={s.image} />
      <div>
        {pagesRead === pagesTotal ? (
          <CheckIcon className={s.icon} />
        ) : (
          <span className={s.subtitle}>
            {pagesRead}/{pagesTotal}
          </span>
        )}
      </div>
    </Link>
  )
}
