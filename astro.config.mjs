import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  base: '/landing/ingreso-carreras-home/',  
  site: 'https://www.ucasal.edu.ar', 
  integrations: [tailwind(), react()],
});