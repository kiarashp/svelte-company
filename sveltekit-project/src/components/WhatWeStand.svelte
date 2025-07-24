<script lang="ts">
	import whatWeStandFors from '$lib/db/whatWeStandFor';
	import SimpleCards from './SimpleCards.svelte';
</script>

<SimpleCards
	title="What We Stand For"
	subtitle="Our unwavering values shape our approach to delivering impactful solutions."
	contents={whatWeStandFors}
	gridCols="md:col-span-6 xl:col-span-3"
/>

