<script lang="ts">
	import ButtonOutline from './ButtonOutline.svelte';

	type Story = {
		title: string;
		desc: string;
		writer: string;
	};
	const stories: Story[] = [
		{
			title: 'Streamlined Operations with Custom ERP',
			desc: 'ABC Company delivered exactly what we needed—a scalable and secure ERP system that streamlined our operations. Their team’s professionalism and expertise were evident every step of the way.',
			writer: 'Manager, Global Retail Company'
		},
		{
			title: 'MVP Delivered Ahead of Schedule',
			desc: 'As a startup, we were looking for a reliable partner to build our MVP. ABC Company exceeded our expectations, delivering a bug-free product ahead of schedule. Their team felt like an extension of ours!',
			writer: 'Founder, FinTech Startup'
		},
		{
			title: 'Seamless Legacy System Migration',
			desc: 'The legacy system migration ABC Company handled for us was seamless. We were impressed with their attention to detail, proactive communication, and ability to complete the project with zero downtime.',
			writer: 'CTO, Healthcare Enterprise'
		}
	];
</script>

<div
	class="mt-[96px] flex flex-col bg-[url(/decorative/stories-bg.png)] bg-cover bg-center px-[7rem]"
>
	<p class="heading-xl">Success Stories</p>
	<p class="body-lg w-9/12">Discover the milestones that define our success.</p>
	<div class="mt-[45px] grid grid-cols-12 gap-[30px]">
		{#each stories as story (story.title)}
			<div class="text-primary col-span-4 flex flex-col items-start justify-center gap-[14px]">
				<p class=" text-secondary heading-md">{story.title}</p>
				<p class="body-lg text-accent">{story.desc}</p>
				<p class="text-secondary body-lg">{story.writer}</p>
			</div>
		{/each}
		<div class="col-span-12 flex items-center justify-center">
			<ButtonOutline buttonTxt="View Case Studies" />
		</div>
	</div>
</div>
