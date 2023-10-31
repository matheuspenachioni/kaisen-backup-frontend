import { useEffect, useState } from 'react'

export function useBreakpoints() {
	const [windowSize, setWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth
	})

	const handleResize = () => {
		setWindowSize({
			height: window.innerHeight,
			width: window.innerWidth
		})
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [windowSize.width])

	return {
		isMobile: windowSize.width <= 580,
		isTablet: windowSize.width <= 768,
		isLaptop: 960 <= windowSize.width,
		isDesktop: 1280 <= windowSize.width,
		isLargeDesktop: windowSize.width >= 1920
	}
}
