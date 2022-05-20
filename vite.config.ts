import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
	plugins: [solidPlugin()],
	build: {
		rollupOptions: {
			input: { root: resolve(__dirname, 'index.html'), '404': resolve(__dirname, '404.html') }
		},

		target: 'esnext',
		polyfillDynamicImport: false
	},
	publicDir: 'public'
});
