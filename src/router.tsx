import NavBar from '@components/Navbar/NavBar'
import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
	Dashboard,
	ManageChapter,
	ManagePost
} from '@pages/index'

function RouterAllRoutes() {
	const location = useLocation()

	return (
		<>
			{location.pathname !== '/login' && <NavBar />}
			<Suspense fallback={<div> Loading ...</div>}>
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
					<Route path="/postagens" element={<ManagePost />} />
					<Route path="/capitulos" element={<ManageChapter />} />
					<Route path="/novo-post" element={<NewPost />} />
					<Route path="/novo-capitulo" element={<NewChapter />} />
				</Routes>
			</Suspense>
		</>
	)
}

export { RouterAllRoutes }
