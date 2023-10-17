import './App.css'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
//Admin Screens
const Login = lazy(() => import('./screens/admin/Login/Login'));
const Dashboard = lazy(() => import('./screens/admin/Dashboard/Dashboard'));
const NewPost = lazy(() => import('./screens/admin/NewPost/NewPost'));
const NewChapter = lazy(() => import('./screens/admin/NewChapter/NewChapter'));
//User Screens
const Home = lazy(() => import('./screens/user/Home/Home'));
const Anime = lazy(() => import('./screens/user/Anime/Anime'));
const Chapter = lazy(() => import('./screens/user/Chapter/Chapter'));
const Manga = lazy(() => import('./screens/user/Manga/Manga'));
const Community = lazy(() => import('./screens/user/Community/Community'));
const Guide = lazy(() => import('./screens/user/Guide/Guide'));
const Universe = lazy(() => import('./screens/user/Universe/Universe'));
//Loading Screen
import Loading from './screens/loading/Loading/Loading';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga />} />
            <Route path="/comunidade" element={<Community />} />
            <Route path="/guia" element={<Guide />} />
            <Route path="/universo" element={<Universe />} />
            <Route path="/chapter/:chapterId" element={<Chapter />} />
            {/* Admin Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/new-chap" element={<NewChapter />} />
            {/* 1- Fazer um AuthGuard para essas 3 rotas */}
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;