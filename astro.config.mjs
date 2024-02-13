import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://kaisoapbox.github.io",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
  redirects: {
    "/faa_biographical_assessment": "/projects/faa_biographical_assessment",
  },
});
