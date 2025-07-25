<script lang="ts">
	import ButtonOutline from './ButtonOutline.svelte';
	import caseStudies from '$lib/db/caseStudies';

	import { backInOut } from 'svelte/easing';

	import { fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import {fly} from 'svelte/transition';

	let loadedItems = $state(new Set());

	let isMore = $state(true);
	let primaryStudies = $state(caseStudies.slice(0, 3));
	function loadMoreHandler() {
		let nextItems = caseStudies.slice(primaryStudies.length, primaryStudies.length + 3);
		nextItems.forEach((item) => {
			primaryStudies.push(item);
		});
		if (primaryStudies.length >= caseStudies.length) {
			isMore = false;
		}
	}
</script>

<div class="paddingContainer mt-[96px] flex flex-col">
	<p class="heading-xl">Featured Case Studies</p>
	<p class="body-lg w-12/12 xl:w-9/12">
		Discover how our tailored solutions have transformed businesses across industries.
	</p>
	<div
		class="relative mt-[45px] grid w-full grid-cols-12 gap-3 bg-[#F5F5F5] md:px-[24px] xl:gap-[30px]"
	>
		{#each primaryStudies as caseStudy (caseStudy.title)}
			<a
				href="/case-studies{caseStudy.slug}"
				class="group/eachPost col-span-12 flex flex-col gap-[11px] pb-5 duration-300 hover:bg-gray-200 md:col-span-4"
				in:fly={{ x: -100, y: 0, duration: 500, easing: backInOut }}
			>
				<div class="flex w-full items-center justify-center overflow-hidden">
					<img
						class="group-hover/eachPost:scale-130 h-[300px] w-full rounded-lg object-cover transition-transform duration-[2s] ease-in-out md:h-full md:object-contain"
						src="/case-studies/{caseStudy.imgUrl}.jpg"
						alt={caseStudy.title}
						onload={() => loadedItems.add(caseStudy.imgUrl)}
					/>
				</div>

				<p class="heading-md text-secondary mt-[24px] px-2">{caseStudy.title}</p>
				<p class="text-accent body-lg px-2">Challenge</p>
				<p class="text-accent body-sm px-2">{caseStudy.shortChallenge}</p>
				<p class="text-accent body-lg px-2">Solution</p>
				<p class="text-accent body-sm px-2">{caseStudy.shortSolution}</p>
			</a>
		{:else}{/each}
	</div>
	{#if isMore}
		<div class="mt-[40px] flex items-center justify-center">
			<ButtonOutline buttonTxt="View More" onclick={loadMoreHandler} />
		</div>
	{/if}
</div>
