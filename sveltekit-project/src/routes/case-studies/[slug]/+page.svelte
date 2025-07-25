<script lang="ts">
	import Header from '../../../components/Header.svelte';
	import type { PageProps } from './$types';
	import caseStudies from '$lib/db/caseStudies';

	let { data }: PageProps = $props();
</script>

<div class="bg-#F5F5F5 paddingContainer flex min-h-screen flex-col justify-start pb-[30px]">
	<Header />
	<div class="mt-[105px] grid grid-cols-10 gap-4 xl:gap-[30px]">
		<div class=" col-span-10 md:col-span-7">
			<!-- single case study -->
			<div class="flex h-[400px] w-full items-center justify-center overflow-hidden">
				<img
					class="h-full w-full object-cover"
					src="/case-studies/{data.SingleCase.imgUrl}.jpg"
					alt=""
				/>
			</div>
			<p class="heading-md text-accent mt-[30px]">{data.SingleCase.title}</p>
			<div class="text-accent body-lg mt-[10px]">Challenge</div>
			<p class="body-md text-accent mt-[10px]">{data.SingleCase.challenge}</p>
			<div class="text-accent body-lg">Solution</div>
			<p class="body-md text-accent mt-[10px]">{data.SingleCase.solution}</p>
		</div>
		<div class="flex flex-col md:hidden col-span-10">
			<p class="heading-xl">Related Cases</p>
		</div>

		<div class="col-span-10 flex flex-row md:col-span-3 md:flex-col gap-3">
			{#each caseStudies.slice(0, 2) as caseStudy, index (caseStudy.title)}
				<a
					href="/case-studies{caseStudy.slug}"
					class="group/eachPost hover:shadow-primary/30 active:shadow-primary/50 active:scale-98 relative
					flex w-full transform cursor-pointer flex-col gap-[11px] pb-5 transition-all
					 duration-300 ease-out hover:translate-x-1 hover:shadow-lg active:translate-x-0.5 active:shadow-md
           {index !== 0 ? 'md:mt-[20px]' : ''}
					"
				>
					<div class="flex w-full items-center justify-center overflow-hidden">
						<img
							class="group-hover/eachPost:scale-130 h-[150px] w-full rounded-lg object-cover transition-transform duration-[2s] ease-in-out md:h-full md:object-contain"
							src="/case-studies/{caseStudy.imgUrl}.jpg"
							alt={caseStudy.title}
						/>
					</div>
					<p class="body-lg text-secondary md:mt-[24px] px-2">{caseStudy.title}</p>
				</a>
			{/each}
		</div>
	</div>
</div>
