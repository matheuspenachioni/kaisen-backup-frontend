import Navbar from '@components/Navbar/Navbar'
import React, { Suspense } from 'react'
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

function RouterAllRoutes() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga />} />
            <Route path="/comunidade" element={<Community />} />
            <Route path="/guia" element={<Guide />} />
            <Route path="/universo" element={<Universe />} />
            <Route path="/capitulo/:id" element={<Chapter />} />
            {/* Admin Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/novo-post" element={<NewPost />} />
            <Route path="/novo-capitulo" element={<NewChapter />} />
            {/* 1- Fazer um AuthGuard para essas 3 rotas */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export { RouterAllRoutes }
