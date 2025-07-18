<script lang="ts">
	import Header from '../../../components/Header.svelte';
	import type { CaseStudy } from '$lib/types';
	import type { PageProps } from './$types';
	import caseStudies from '$lib/db/caseStudies';

	let { data }: PageProps = $props();
</script>

<div class="bg-#F5F5F5 flex min-h-screen flex-col justify-start px-[7rem] pb-[30px]">
	<Header />
	<div class="mt-[40px] grid grid-cols-10 gap-[30px]">
		<div class=" col-span-7">
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

		<div class="col-span-3 flex flex-col">
			{#each caseStudies.slice(0, 2) as caseStudy, index (caseStudy.title)}
				<a
					href="/case-studies{caseStudy.slug}"
					class="group/eachPost hover:shadow-primary/30 active:shadow-primary/50 relative col-span-4 
					flex transform cursor-pointer flex-col gap-[11px] pb-5 transition-all duration-300
					 ease-out hover:translate-x-1 hover:shadow-lg active:translate-x-0.5 active:scale-98 active:shadow-md
           {index !== 0 ? 'mt-[20px]' : ''}
					"
				>
					<div class="flex w-full items-center justify-center overflow-hidden">
						<img
							class="h-full w-auto object-contain transition-transform duration-[2s] ease-in-out group-hover/eachPost:scale-130"
							src="/case-studies/{caseStudy.imgUrl}.jpg"
							alt={caseStudy.title}
						/>
					</div>
					<p class="body-lg text-secondary mt-[24px] px-2">{caseStudy.title}</p>
				</a>
			{/each}
		</div>
	</div>
</div>
