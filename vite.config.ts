import { defineConfig, Plugin } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

function envChecker(): Plugin {
	return {
		name: 'env-checker',
		buildStart() {
			console.log('logging stuff');
			console.log(process.env);
		}
	};
}

export default defineConfig({
	plugins: [solidPlugin(), envChecker()],
	build: {
		rollupOptions: {
			input: { root: resolve(__dirname, 'index.html'), '404': resolve(__dirname, '404.html') }
		},

		target: 'esnext',
		polyfillDynamicImport: false
	},
	publicDir: 'public'
});
