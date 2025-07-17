<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<div class="relative mx-auto flex min-h-screen max-w-[1800px] flex-col bg-[url(/decorative/experties-bg.png)] bg-center bg-repeat">
	<!-- noise overlay -->
	<div
		class="pointer-events-none absolute inset-0 z-10 m-[2px] bg-[url('/decorative/noise.png')] opacity-10"
	></div>
	<div class="z-20">{@render children()}</div>
	<Footer/>
</div>
