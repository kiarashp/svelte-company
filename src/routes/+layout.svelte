<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="relative mx-auto flex min-h-screen max-w-[1800px] flex-col ">
		<!-- noise overlay -->
		<div
			class="pointer-events-none absolute inset-0 z-10 m-[2px] bg-[url('/decorative/noise.png')] opacity-10"
		></div>
		<div class="z-20">	{@render children()}
</div>
</div>
