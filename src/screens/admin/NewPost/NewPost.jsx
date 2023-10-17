import './NewPost.css';
import { useState } from 'react';

function NewPost() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };

    return (
        <main>
            <div>
                <h1 className="title">Nova Postagem</h1>
                <span className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur rem obcaecati optio illo alias fugiat ipsum? Quas neque amet quasi est quis fuga odio, aliquid ab perspiciatis tenetur nobis?</span>
            </div>
            <div className="post-container">
                <h1 className="title">Nova Postagem</h1>
                <div className="column">
                    <div className="post-input">
                        <label htmlFor="post-title">Título</label>
                        <input type="text" id="post-title" placeholder="Você sabia que o..." />
                    </div>
                    <div className="post-input">
                        <label htmlFor="post-content">Contéudo</label>
                        <textarea type="text" id="post-content" placeholder="Contéudo da postagem (curiosidade, spoiler, etc..)" />
                    </div>
                    <div className="post-input">
                        <label className="thumbnail-input" htmlFor="thumbnail">Enviar Imagem</label>
                        <input type="file" className="post-thumbnail" id="thumbnail" onChange={handleImageChange} />
                    </div>
                </div>
                <div className="preview-container">
                    <span>Preview:</span>
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                </div>
            </div>
        </main>
    )
}

export default NewPost;