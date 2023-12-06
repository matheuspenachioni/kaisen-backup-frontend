import { AuthRequired } from '@components/AuthRequired/AuthRequired'
import './NewChapter.css'
import { ChangeEvent, useState } from 'react'

export function NewChapter() {
  const [pages, setPages] = useState<string[]>([])

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>, _index: number) => {
    const url = event.target.value
    const updatedPages = [...pages, url]
    setPages(updatedPages)
  }

  const addPage = () => {
    setPages([...pages, ''])
  }

  const removePage = () => {
    pages.length > 1 && setPages(pages.slice(0, -1))
  }

  return (
    <AuthRequired>
      {() => (
        <main>
          <div>
            <h1 className="title">Novo Capítulo</h1>
            <span className="subtitle">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur rem obcaecati optio illo alias fugiat
							ipsum? Quas neque amet quasi est quis fuga odio, aliquid ab perspiciatis tenetur nobis?
            </span>
          </div>
          <div className="chap-container">
            <h1 className="title">Novo Capítulo</h1>
            <div className="column">
              <div className="chap-input">
                <label htmlFor="chap-title">Capítulo</label>
                <input type="text" id="chap-title" placeholder="Capítulo nº240" />
              </div>
              <div className="chap-input">
                <label htmlFor="chap-subtitle">Título</label>
                <input type="text" id="chap-subtitle" placeholder="A Batalha na Terra Assombrada de Shinjuku (17)" />
              </div>
            </div>
            <div className="chap-buttons">
              <button type="button" onClick={addPage}>
								Adicionar Página
              </button>
              <button type="button" onClick={removePage}>
								Remover Página
              </button>
            </div>
            <div className="preview-container">
              <div className="input-column">
                {pages.map((page, index) => (
                  <div key={index} className="chap-input">
                    <label htmlFor={`page-${index + 1}`}>Página {index + 1}</label>
                    <input
                      type="text"
                      className="chap-page"
                      id={`page-${index + 1}`}
                      value={page || ''}
                      onChange={(e) => handleImageChange(e, index)}
                    />
                  </div>
                ))}
              </div>
              <div className="image-column">
                {pages.map((page, index) =>
                  page ? (
                    <img key={index} src={page} alt={`Preview ${index + 1}`} className="chap-image-preview" />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </AuthRequired>
  )
}
