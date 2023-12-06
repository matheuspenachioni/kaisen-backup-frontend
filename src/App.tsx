import './App.css'
//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { RouterAllRoutes } from './router'

function App() {
  return (
    <>
      <Navbar />
      <RouterAllRoutes />
      <Footer />
    </>
  )
}

export default App
