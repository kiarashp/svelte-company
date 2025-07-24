<script lang="ts">
import type { SuccessStory } from '$lib/types/sanity';

	import ButtonOutline from './ButtonOutline.svelte';


	interface Props {
		stories: SuccessStory[];
	}

	let { stories }: Props = $props();


	// const {stories} = $props<{ stories: SuccessStory[]; }>();

</script>

<div
	class="mt-[96px] flex flex-col  paddingContainer"
>
	<p class="heading-xl">Success Stories</p>
	<p class="body-lg xl:w-9/12 w-12/12">Discover the milestones that define our success.</p>
	<div class="mt-[45px] grid grid-cols-12 xl:gap-x-[30px] gap-x-1.5">
		{#each stories as story (story.title)}
			<div class="text-primary  flex flex-col items-start justify-start gap-[14px] md:col-span-4 col-span-12">
				<p class=" text-secondary heading-md">{story.title}</p>
				<p class="body-lg text-accent">{story.desc}</p>
				<p class="text-secondary body-lg">{story.writer}</p>
			</div>
		{/each}
		<div class="col-span-12 flex items-center justify-center mt-8">
			<ButtonOutline buttonTxt="View Case Studies" />
		</div>
	</div>
</div>
