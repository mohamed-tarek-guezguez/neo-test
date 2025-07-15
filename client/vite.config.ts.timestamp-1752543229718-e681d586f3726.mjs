// vite.config.ts
import { defineConfig } from "file:///C:/Users/moham/Desktop/neo-test/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/moham/Desktop/neo-test/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/moham/Desktop/neo-test/client/node_modules/vite-plugin-svgr/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\moham\\Desktop\\neo-test\\client";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "."),
      "@src": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    port: 3e3
    // to get images from the server
    // proxy: {
    //   '^/users': {
    //     target: 'http://localhost:8000/',
    //   },
    // },
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtb2hhbVxcXFxEZXNrdG9wXFxcXG5lby10ZXN0XFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbW9oYW1cXFxcRGVza3RvcFxcXFxuZW8tdGVzdFxcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL21vaGFtL0Rlc2t0b3AvbmVvLXRlc3QvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgc3ZncigpXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuJyksXHJcbiAgICAgICdAc3JjJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG5cclxuICAgIC8vIHRvIGdldCBpbWFnZXMgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAvLyBwcm94eToge1xyXG4gICAgLy8gICAnXi91c2Vycyc6IHtcclxuICAgIC8vICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvJyxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVCxTQUFTLG9CQUFvQjtBQUM3VSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUFBLEVBQ3pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEdBQUc7QUFBQSxNQUNoQyxRQUFRLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
