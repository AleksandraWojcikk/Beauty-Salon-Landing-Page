import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    adapter: vercelServerless({
        webAnalytics: {
            enabled: true
        }
    })
});
