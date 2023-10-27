import './Dashboard.css'
import { Link } from 'react-router-dom'
import { FaPen, FaTimes, FaRegClock } from 'react-icons/fa'
import { AuthRequired } from '@components/AuthRequired/AuthRequired'
import { NEW_CHAPTER_ROUTE, NEW_POST_ROUTE } from '@constants/routes'

export function Dashboard() {
  return (
    <AuthRequired>
      {() => (
        <main>
          <div>
            <h1 className="title">Dashboard</h1>
            <span className="subtitle">
              Jesus, Maria e José! Look at him! Cássio Bérgamo? Frostezor? Como você cresceu tanto, garoto? Está tomando
              danone, o suco? Quem você pensa que é, frost? Chris Bumstead, o Cbum? Natural ou fake natty? O meu
              veredito...? Natural! Rodrigo Góes, out...
            </span>
            <div className="admin-buttons">
              <Link className="admin-links" to={NEW_CHAPTER_ROUTE}>
                Novo Capítulo
              </Link>
              <Link className="admin-links" to={NEW_POST_ROUTE}>
                Nova Postagem
              </Link>
            </div>
          </div>
          <div>
            <h1 className="title">Capítulos</h1>
            <span className="subtitle">
              Aqui devem ficar os capítulos já lançados e com uma opção de exclusão. Exemplo:
            </span>
            {/* Obviamente é um exemplo, não se refere ao modelo final */}
            <div className="dashboard-cards">
              <div className="dashboard-container">
                <div className="action-icons">
                  <FaPen className="edit-icon" />
                  <FaTimes className="delete-icon" />
                </div>
                <h2>Capítulo nº239</h2>
                <div className="date-container">
                  <FaRegClock className="clock-icon" />
                  <span>18 de Outubro, 2023</span>
                </div>
              </div>

              <div className="dashboard-container">
                <div className="action-icons">
                  <FaPen className="edit-icon" />
                  <FaTimes className="delete-icon" />
                </div>
                <h2>Capítulo nº238</h2>
                <div className="date-container">
                  <FaRegClock className="clock-icon" />
                  <span>11 de Outubro, 2023</span>
                </div>
              </div>

              <div className="dashboard-container">
                <div className="action-icons">
                  <FaPen className="edit-icon" />
                  <FaTimes className="delete-icon" />
                </div>
                <h2>Capítulo nº237</h2>
                <div className="date-container">
                  <FaRegClock className="clock-icon" />
                  <span>4 de Outubro, 2023</span>
                </div>
              </div>

              <div className="dashboard-container">
                <div className="action-icons">
                  <FaPen className="edit-icon" />
                  <FaTimes className="delete-icon" />
                </div>
                <h2>Capítulo nº236</h2>
                <div className="date-container">
                  <FaRegClock className="clock-icon" />
                  <span>27 de Setembro, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-posts">
            <h1 className="title">Postagens</h1>
            <span className="subtitle">
              Aqui devem ficar as postagens e com uma opção de exclusão ou edição. Exemplo:
            </span>
            {/* Obviamente é um exemplo, não se refere ao modelo final */}
            <div className="dashboard-cards">
              <div className="dashboard-container">
                <div className="action-icons">
                  <FaPen className="edit-icon" />
                  <FaTimes className="delete-icon" />
                </div>
                <h2>Spoilers do Cap. 239</h2>
                <div className="date-container">
                  <FaRegClock className="clock-icon" />
                  <span>18 de Outubro, 2023</span>
                </div>
              </div>

              <div className="dashboard-container">
                <div className="action-icons">
                  <FaPen className="edit-icon" />
                  <FaTimes className="delete-icon" />
                </div>
                <h2>Spoilers do Cap. 238</h2>
                <div className="date-container">
                  <FaRegClock className="clock-icon" />
                  <span>11 de Outubro, 2023</span>
                </div>
              </div>

              <div className="dashboard-container">
                <div className="action-icons">
                  <FaPen className="edit-icon" />
                  <FaTimes className="delete-icon" />
                </div>
                <h2>Vazio Branco</h2>
                <div className="date-container">
                  <FaRegClock className="clock-icon" />
                  <span>11 de Outubro, 2023</span>
                </div>
              </div>

              <div className="dashboard-container">
                <div className="action-icons">
                  <FaPen className="edit-icon" />
                  <FaTimes className="delete-icon" />
                </div>
                <h2>Vazio Branco</h2>
                <div className="date-container">
                  <FaRegClock className="clock-icon" />
                  <span>11 de Outubro, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </AuthRequired>
  )
}
