import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//Toutes les requêtes à /api/* depuis votre frontend seront redirigées vers http://localhost:3000/api/*
// changeOrigin: true modifie l'en-tête Origin pour qu'il corresponde à l'URL cible
// secure: false permet les connexions à des serveurs HTTPS sans certificats valides (utile en développement)

// Toutes les requêtes à /api/* depuis votre frontend seront redirigées vers http://localhost:3000/api/*
// changeOrigin: true modifie l'en-tête Origin pour qu'il corresponde à l'URL cible
// secure: false permet les connexions à des serveurs HTTPS sans certificats valides (utile en développement)
// Vous devrez ajuster l'URL target pour qu'elle corresponde à l'adresse de votre backend. Si votre API n'utilise pas le préfixe /api, vous pouvez décommenter et ajuster la ligne rewrite.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
