<script lang="ts">
	type TimeLine = {
		title: String;
		description: String;
		year: Number;
	};
	const timeLines: TimeLine[] = [
		{
			title: 'The Beginning',
			description:
				'ABC Company was founded with a vision to provide innovative engineering solutions to startups, focusing on reliability and affordability.',
			year: 2017
		},
		{
			title: 'Expanding Expertise',
			description:
				'We diversified our offerings to include legacy system migrations and ERP implementations, catering to small and medium-sized businesses.',
			year: 2018
		},
		{
			title: 'Going Global',
			description:
				'ABC Company expanded its reach by serving clients across multiple countries, building strong partnerships with multinational corporations.',
			year: 2019
		},
		{
			title: 'Autonomous Teams Launched',
			description:
				'We introduced fully autonomous development teams, enabling clients to scale their projects with ease and efficiency.',
			year: 2020
		},
		{
			title: 'Embracing Cybersecurity',
			description:
				'To address growing digital threats, we added comprehensive cybersecurity services, safeguarding our clients’ assets worldwide.',
			year: 2021
		},
		{
			title: '300+ Projects Completed',
			description:
				'With over 300 successful projects delivered globally, we solidified our reputation as a leading provider of tailored engineering solutions.',
			year: 2023
		},
		{
			title: 'A Trusted Partner',
			description:
				'ABC Company continues to innovate, serving startups, SMBs, and enterprises with a focus on scalable solutions, global collaboration, and unmatched reliability.',
			year: 2025
		}
	];
</script>

<div
	class="mt-[96px] flex flex-col bg-[url(/decorative/story-bg.png)] bg-cover bg-center px-[7rem]"
>
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
				class="flex {index}
			{index !== 0 ? 'mt-[48px]' : ''}
			{index % 2 === 0 ? 'pl-[50%]' : 'flex-row-reverse pr-[50%]'}
			"
			>
				<!-- year-->
				<div class="flex items-center justify-between">
					<span class="bg-secondary h-[5px] w-[20px]"></span>
					<p class="text-secondary heading-md px-[12px] py-[6px]">{timeLine.year}</p>
					<span class="bg-secondary h-[5px] w-[20px]"></span>
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
