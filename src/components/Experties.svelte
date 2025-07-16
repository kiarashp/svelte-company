<script lang="ts">
	import ButtonOutline from './ButtonOutline.svelte';
	type Card = {
		imgUrl: string;
		title: string;
		desc: string;
	};
	const cards: Card[] = [
		{
			imgUrl: 'vektor-1',
			title: 'Product Consulting',
			desc: 'Strategically position your digital products for success with actionable insights and market expertise.'
		},
		{
			imgUrl: 'vektor-2',
			title: 'Legacy System Migration',
			desc: 'Seamlessly transform outdated systems to enhance efficiency, scalability, and performance.'
		},
		{
			imgUrl: 'vektor-3',
			title: 'Automated Teams',
			desc: 'Drive productivity with fully autonomous, high-performing development teams for scalable solutions.'
		},
		{
			imgUrl: 'vektor-4',
			title: 'Engineering Consulting',
			desc: 'Overcome challenges and foster innovation with expert guidance from our engineering professionals.'
		},
		{
			imgUrl: 'vektor-5',
			title: '	ERP Implementation',
			desc: 'Deploy robust, customized ERP solutions to optimize and streamline your operations.'
		},
		{
			imgUrl: 'vektor-6',
			title: 'Cybersecurity Services',
			desc: 'Protect your digital assets with industry-leading security solutions, including comprehensive vulnerability assessments.'
		}
	];
</script>

<div
	class="mt-[96px] flex flex-col bg-[url(/decorative/experties-bg.png)] bg-cover bg-center px-[7rem]"
>
	<p class="heading-xl">Our Expertise</p>
	<p class="body-lg w-9/12">
		We specialize in delivering tailored solutions to address your business needs across these key
		areas:
	</p>
	<div class="grid w-full grid-cols-12 gap-[30px]">
		{#each cards as card (card.title)}
			<div class="col-span-4 flex flex-col">
				<div class="flex h-[505px] w-full items-center justify-center">
					<img
						class=" h-full w-auto object-contain"
						src="/experties/{card.imgUrl}.png"
						alt={card.title}
					/>
				</div>
				<p class="heading-md text-secondary mt-[24px]">{card.title}</p>
				<p class="body-lg text-accent mt-[11px]">{card.desc}</p>
			</div>
		{/each}
	</div>
	<div class="mt-[40px] flex items-center justify-center">
		<ButtonOutline buttonTxt="Get a consultation" />
	</div>
</div>
