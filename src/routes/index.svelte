<script>
	import { pokemon, fetchPokemon } from '../store';
</script>

<div class=" flex flex-col space-y-3 min-h-screen items-center justify-center w-full">
	<div class=" flex flex-row items-center space-x-5">
		<img class=" h-32 w-32 object-cover" src="/favicon.png" alt="" />
		<img class=" h-28 w-auto" src="/tailwind.png" alt="" />
	</div>
	<p class=" font-mono text-xl">SvelteKit TailwindCSS Boiletplate</p>
	<Test />
</div>
