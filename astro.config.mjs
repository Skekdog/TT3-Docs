// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://skekdog.github.io",
  base: "/Traitor-Docs",
  integrations: [
    starlight({
      title: "Traitor! Docs",
      favicon: "images/logo.svg",
      logo: {
        src: "./src/assets/logo.svg",
      },
      plugins: [starlightLinksValidator()],
      components: {
        Head: "./src/components/Head.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Skekdog/Traitor-Docs",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
