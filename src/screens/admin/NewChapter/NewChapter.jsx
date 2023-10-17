    import './NewChapter.css';
    import { useState } from 'react';

    function NewChapter() {
        const [pages, setPages] = useState([null]);

        const handleImageChange = (event, index) => {
            const url = event.target.value;
            const updatedPages = [...pages];
            updatedPages[index] = url;
            setPages(updatedPages);
        };

        const addPage = () => {
            setPages([...pages, null]);
        };

        return (
            <main>
                <div>
                    <h1 className="title">Novo Capítulo</h1>
                    <span className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur rem obcaecati optio illo alias fugiat ipsum? Quas neque amet quasi est quis fuga odio, aliquid ab perspiciatis tenetur nobis?</span>
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
                    <button onClick={addPage}>Adicionar 1 Página</button>
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
                                        onInput={(e) => handleImageChange(e, index)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="image-column">
                            {pages.map((page, index) => (
                                page ? <img key={index} src={page} alt={`Preview ${index + 1}`} className="chap-image-preview" /> : null
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    export default NewChapter;