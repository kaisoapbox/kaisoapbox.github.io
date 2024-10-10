import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";
import { rehypeSidenotes } from "./src/plugins/sidenotes";

// https://astro.build/config
export default defineConfig({
  site: "https://kaisoapbox.com",
  integrations: [
    mdx({
      rehypePlugins: [[rehypeSidenotes]],
    }),
    sitemap(),
    react(),
  ],
  redirects: {
    "/faa_biographical_assessment": "/projects/faa_biographical_assessment",
  },
});
