import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import svgr from '@svgr/rollup'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
	css: {
		modules: { localsConvention: 'camelCase' }
	},
	plugins: [react(), eslintPlugin(), svgr({}), viteCompression({ filter: /\.(js|ts|css|html|svg)$/ })],
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@contexts': path.resolve(__dirname, './src/contexts'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@icons': path.resolve(__dirname, './src/assets/icons'),
			'@pages': path.resolve(__dirname, './src/pages')
		}
	}
})
