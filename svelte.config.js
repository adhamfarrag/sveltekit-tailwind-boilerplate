import adapter from '@sveltejs/adapter-auto';
import autoImport from 'vite-plugin-autoimport';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			plugins: [
				autoImport({
					include: ['**/*.svelte'],
					components: ['./src/components'],
					module: {
						svelte: ['onMount']
					}
				})
			]
		},
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
