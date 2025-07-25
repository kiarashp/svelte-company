<script lang="ts">
	import ButtonOutline from './ButtonOutline.svelte';
	import caseStudies from '$lib/db/caseStudies';
</script>

<div class="mt-[96px] flex flex-col paddingContainer">
	<p class="heading-xl">Featured Case Studies</p>
	<p class="body-lg xl:w-9/12 w-12/12">
		Discover how our tailored solutions have transformed businesses across industries.
	</p>
	<div class="relative mt-[45px] grid w-full grid-cols-12 xl:gap-[30px] gap-3 bg-[#F5F5F5] md:px-[24px]">
		{#each caseStudies.slice(0, 3) as caseStudy (caseStudy.title)}
			<a
				href="/case-studies{caseStudy.slug}"
				class="group/eachPost md:col-span-4 col-span-12 flex flex-col gap-[11px] pb-5 duration-300 hover:bg-gray-200"
			>
				<div class="flex w-full items-center justify-center overflow-hidden">
					<img
						class="rounded-lg h-[300px] w-full md:h-full object-cover  md:object-contain transition-transform duration-[2s] ease-in-out group-hover/eachPost:scale-130"
						src="/case-studies/{caseStudy.imgUrl}.jpg"
						alt={caseStudy.title}
					/>
				</div>
				<p class="heading-md text-secondary mt-[24px] px-2">{caseStudy.title}</p>
				<p class="text-accent body-lg px-2">Challenge</p>
				<p class="text-accent body-sm px-2">{caseStudy.shortChallenge}</p>
				<p class="text-accent body-lg px-2">Solution</p>
				<p class="text-accent body-sm px-2">{caseStudy.shortSolution}</p>
			</a>
		{/each}
	</div>
	<div class="mt-[40px] flex items-center justify-center">
		<ButtonOutline buttonTxt="View More" />
	</div>
</div>
