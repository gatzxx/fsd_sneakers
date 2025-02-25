import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
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
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        exclude: ['node_modules', 'dist', '.cache'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
        },
    },
})
