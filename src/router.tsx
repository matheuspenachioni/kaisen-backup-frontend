import Navbar from '@components/Navbar/Navbar'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  Anime,
  Chapter,
  Community,
  Guide,
  Home,
  Login,
  Manga,
  NewChapter,
  NewPost,
  Universe,
  Dashboard
} from '@pages/index'
import Footer from '@components/Footer/Footer'
import Loading from './screens/loading/Loading/Loading'
import {
  ANIME_ROUTE,
  BASE_ROUTE,
  COMMUNITY_ROUTE,
  DASHBOARD_ROUTE,
  GUIDE_ROUTE,
  LOGIN_ROUTE,
  MANGA_ROUTE,
  NEW_CHAPTER_ROUTE,
  NEW_POST_ROUTE,
  UNIVERSE_ROUTE
} from '@constants/routes'

function RouterAllRoutes() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* User Routes */}
            <Route path={BASE_ROUTE} element={<Home />} />
            <Route path={ANIME_ROUTE} element={<Anime />} />
            <Route path={MANGA_ROUTE} element={<Manga />} />
            <Route path={COMMUNITY_ROUTE} element={<Community />} />
            <Route path={GUIDE_ROUTE} element={<Guide />} />
            <Route path={UNIVERSE_ROUTE} element={<Universe />} />
            <Route path="/capitulo/:id" element={<Chapter />} />
            {/* Admin Routes */}
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
            <Route path={NEW_POST_ROUTE} element={<NewPost />} />
            <Route path={NEW_CHAPTER_ROUTE} element={<NewChapter />} />
            {/* 1- Fazer um AuthGuard para essas 3 rotas */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export { RouterAllRoutes }
