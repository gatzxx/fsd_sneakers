import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
    },
    resolve: {
        alias: {
            "@/app": path.resolve(__dirname, "src/app"),
            "@/shared": path.resolve(__dirname, "src/shared"),
            "@/entities": path.resolve(__dirname, "src/entities"),
            "@/features": path.resolve(__dirname, "src/features"),
            "@/widgets": path.resolve(__dirname, "src/widgets"),
            "@/pages": path.resolve(__dirname, "src/pages"),
        },
    },
});
