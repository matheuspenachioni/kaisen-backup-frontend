import './Manga.css'
import { Link } from 'react-router-dom'
import { useVolumes } from '@hooks/useVolumes'
import { useChapters } from '@hooks/useChapters'
import { FaRegFileAlt } from 'react-icons/fa'

export function Manga() {
  const volumes = useVolumes()
  const chapters = useChapters()
  return (
    <main className="manga">
      <div>
        <h1 className="title">
          <FaRegFileAlt /> Sinopse
        </h1>
        <span className="subtitle">
					Jujutsu Kaisen Yuji é um gênio do atletismo, mas não tem interesse algum em ficar correndo em círculos. Ele é
					feliz como membro no Clube de Estudo de Fenômenos Psíquicos. Apesar de estar no clube apenas por diversão,
					tudo fica sério quando um espírito de verdade aparece na escola! A vida está prestes a se tornar muito
					interessante na Escola Sugisawa...
        </span>
      </div>
      <div>
        <h1 className="title">• De fãs para fãs</h1>
        <span className="subtitle">
					Nós da Kaisen Backup somos grandes fãs da obra e pensamos em ir além, então começamos a nos dedicar para
					traduzir os capítulos mais recentes do mangá com carinho e fidelidade ao material original. Disponibilizamos
					aqui os 4 últimos capítulos do mangá...
        </span>
        <div className="chapters-container">
          {chapters.map(
            (chapter) =>
              chapter.pages.length > 0 && (
                <div key={chapter.id} className="chapter-preview">
                  <img className="chapter-image" src={chapter.pages[0].source} alt={`Capa do ${chapter.title}`} />
                  <Link className="chapter-link" to={`/capitulo/${chapter.id}`}>
                    {chapter.title}
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
      <div>
        <h1 className="title">• Volumes</h1>
        <span className="subtitle">
					Todas as capas oficiais do mangá em japonês, desde o prequel até o volume mais atual da história principal.
        </span>
        <div className="grid-container">
          {volumes.map((volume) => (
            <img className="volume-image" key={volume.id} src={volume.source} alt={`Capa do Volume ${volume.id}`} />
          ))}
        </div>
      </div>
    </main>
  )
}
