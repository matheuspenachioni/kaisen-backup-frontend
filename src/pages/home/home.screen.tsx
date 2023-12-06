import './index.css'

export function Home() {
  return (
    <main>
      <div>
        <h1 className="title">Seja bem-vindo(a) ao Kaisen Backup!</h1>
        <span className="subtitle">A maior comunidade brasileira de Jujutsu Kaisen...</span>
      </div>
      <div className="events-container">
        <div className="event-card">
          <h1 className="card-title">Desafio do Shape Aesthetic</h1>
          <hr />
          <span className="subtitle">O desafio já começou, você vai ficar de fora?</span>
          <p>
						Desde a volta da segunda temporada do anime até o seu término, os participantes devem escolher um personagem
						de Jujutsu Kaisen como base para seu shape. Lembrando-se sempre de ter uma uma alimentação equilibrada para
						suprir o seu potencial de treino, não fazer amor com o suco, além de uma ficha de treinamento adequada para
						seu ritmo. Acesse nosso servidor do Discord para mais informações
          </p>
        </div>
      </div>
      <div className="info-container">
        <div className="event-card">
          <h1 className="card-title">Mangá</h1>
          <hr />
          <span className="subtitle">O Capítulo 238 foi o último lançado até o momento</span>
        </div>
        <div className="event-card">
          <h1 className="card-title">Anime</h1>
          <hr />
          <span className="subtitle">O Episódio 12 foi o último lançado até o momento</span>
        </div>
      </div>
    </main>
  )
}
