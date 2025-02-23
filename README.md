# FSD Sneakers

## Description
A simple React project created with Vite and TypeScript.

## Installation
```sh
pnpm install
```

## Run the Project
```sh
pnpm start
```

## Project Structure
The project follows the Feature-Sliced Design (FSD) architecture.

## Used Technologies
- React 19
- TypeScript
- Vite
- pnpm
- React Router DOM 7.2.0

## Vite Configuration
The project is configured with Vite to enable fast development and hot module replacement. The `vite.config.ts` file includes:
```ts
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
```

## Contact
Author: [gatzxx](https://github.com/gatzxx)
