<script lang="ts">
	import ButtonOutline from './ButtonOutline.svelte';
	import experties from '$lib/db/experties';
	import SimpleCards from './SimpleCards.svelte';
</script>

<SimpleCards
	title="Our Expertise"
	subtitle="We specialize in delivering tailored solutions to address your business needs across these key
		areas:"
	contents={experties}
	consultation={true}
/>
