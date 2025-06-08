import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const isLibMode = mode === 'lib'
  
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: isLibMode ? {
      lib: {
        entry: resolve(__dirname, "src/lib/index.ts"),
        name: "VueTiptapUI",
        fileName: (format) => `vue-tiptap-ui.${format}.js`,
      },
      rollupOptions: {
        external: ["vue", "@tiptap/vue-3", "@tiptap/core"],
        output: {
          globals: {
            vue: "Vue",
            "@tiptap/vue-3": "TiptapVue3",
            "@tiptap/core": "TiptapCore",
          },
        },
      },
      emptyOutDir: true,
    } : {
      rollupOptions: {
        input: resolve(__dirname, "src/example/index.html"),
      },
    },
    root: isLibMode ? undefined : resolve(__dirname, "src/example"),
  }
});
