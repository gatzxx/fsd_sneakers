import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],

    build: {
        sourcemap: false,
        minify: 'esbuild',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
            format: {
                comments: false,
            },
        },
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react')) return 'react-vendor'
                        if (id.includes('i18next')) return 'i18n-vendor'
                        return 'vendor'
                    }
                },
            },
        },
    },

    resolve: {
        alias: {
            '@/app': path.resolve(__dirname, 'src/app'),
            '@/pages': path.resolve(__dirname, 'src/pages'),
            '@/widgets': path.resolve(__dirname, 'src/widgets'),
            '@/features': path.resolve(__dirname, 'src/features'),
            '@/entities': path.resolve(__dirname, 'src/entities'),
            '@/shared': path.resolve(__dirname, 'src/shared'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
