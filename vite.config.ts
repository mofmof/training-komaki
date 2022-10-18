import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import FullReload from "vite-plugin-full-reload";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 100 }),
    WindiCSS({
      root: "./",
      scan: {
        fileExtensions: ["erb", "haml", "html", "js", "ts", "jsx", "tsx"],
        dirs: ["app/views", "app/javascript"],
      },
    }),
  ],
});
