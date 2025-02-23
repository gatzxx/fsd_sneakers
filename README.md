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
The project will follow the Feature-Sliced Design (FSD) architecture.

## Used Technologies
- React 19
- TypeScript
- Vite
- pnpm

## Vite Configuration
The project is configured with Vite to enable fast development and hot module replacement. The `vite.config.ts` file includes:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173
    }
});
```

## Contact
Author: [gatzxx](https://github.com/gatzxx)
