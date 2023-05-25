// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets"
    },
    css: [
        "~/assets/main.scss",
    ],
    modules: ["@pinia/nuxt",],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    ssr: true,
    // Meta tags
    // app: {
    //     head: {
    //         title: "Work for CodeWithGuillaume's Nuxt 3 Course",
    //         meta: [
    //             {
    //                 name: "description",
    //                 content: "This is a hidden description",
    //             }
    //         ],
    //         link: [],
    //         style: [],
    //         script: [],
    //         noscript: [],
    //     }
    // },
    hooks: {
        ready: (ctx) => console.log(ctx),
    },
})
