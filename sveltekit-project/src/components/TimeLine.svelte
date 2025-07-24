<script lang="ts">
	import timeLines from '$lib/db/timeLine';
</script>

<div class="paddingContainer mt-[96px] flex flex-col">
	<p class="heading-xl">Our Story</p>
	<p class="body-lg w-9/12">
		Founded on the principles of innovation and collaboration, ABC Company was created to bridge the
		gap between complex engineering challenges and simplified solutions. Over the years, we’ve grown
		into a global team of experts passionate about helping businesses scale, innovate, and thrive in
		an ever-changing digital landscape.
	</p>
	<!-- timeline -->
	<div class="relative mt-[48px] flex w-full flex-col">
		<div class="bg-secondary absolute left-[50%] h-full w-[5px] -translate-x-[50%]"></div>
		{#each timeLines as timeLine, index (timeLine.title)}
			<div
				class="flex flex-col xl:flex-row
			{index !== 0 ? 'mt-[48px]' : ''}
			{index % 2 === 0 ? 'pl-[50%]' : ' pr-[50%] xl:flex-row-reverse'}
			"
			>
				<!-- year-->
				<div class="flex items-center xl:justify-between {index % 2 === 0 ? 'justify-start' : 'justify-end'}">
					<span
						class="bg-secondary h-[5px] w-[20px] xl:block
						{index % 2 === 0 ? 'block' : 'hidden '}"
					></span>
					<p class="text-secondary heading-md px-[12px] py-[6px]">{timeLine.year}</p>
					<span
						class="bg-secondary h-[5px] w-[20px] xl:block
						{index % 2 === 0 ? 'hidden' : 'block '}"
					></span>
				</div>
				<!-- title / description -->
				<div
					class="flex flex-col gap-[11px]
				{index % 2 === 0 ? 'ps-[12px]' : 'pe-[12px] text-right'}
				"
				>
					<p class="heading-md text-secondary">{timeLine.title}</p>
					<p class="heading-sm text-accent">
						{timeLine.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
