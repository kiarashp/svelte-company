<script lang="ts">
	import ButtonOutline from './ButtonOutline.svelte';
import whyAbcs from '$lib/db/whyAbc';
import SimpleCards from './SimpleCards.svelte';
</script>

<SimpleCards
	title="Why Choose ABC Company?"
	subtitle="We provide end-to-end solutions to help businesses across industries overcome challenges,
		innovate, and scale."
	contents={whyAbcs}
	gridCols="md:col-span-4 xl:col-span-4"
/>


