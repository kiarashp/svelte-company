<script lang="ts">
	import joinUses from '$lib/db/joinUs';
	import SimpleCards from './SimpleCards.svelte';
</script>

<SimpleCards
	title="Join Us"
	subtitle="Looking for a career where you can innovate and make an impact? ABC Company is always on the lookout for passionate individuals to join our growing team."
	contents={joinUses}
	gridCols="md:col-span-4 xl:col-span-4"
/>

