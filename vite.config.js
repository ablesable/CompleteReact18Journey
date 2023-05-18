import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [react()],
    root: "src", //if file is in src folder, we don't need to put that
});