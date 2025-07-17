<script lang="ts">
	import ButtonOutline from './ButtonOutline.svelte';
	type Card = {
		imgUrl: string;
		title: string;
		desc: string;
	};
	const cards: Card[] = [
		{
			imgUrl: 'why-1',
			title: 'Global Reach',
			desc: 'Serving clients worldwide, from startups to enterprises.'
		},
		{
			imgUrl: 'why-2',
			title: 'Scalable Solutions',
			desc: 'Flexible services tailored to businesses of all sizes.'
		},
		{
			imgUrl: 'why-3',
			title: 'Expertise You Can Trust',
			desc: 'Decades of experience delivering quality solutions for complex problems.'
		}
	];
</script>

<div class="mt-[96px] flex flex-col  px-[7rem]">
	<p class="heading-xl">Why Choose ABC Company?</p>
	<p class="body-lg w-9/12">
		We provide end-to-end solutions to help businesses across industries overcome challenges,
		innovate, and scale.
	</p>
	<div class="grid w-full grid-cols-12 gap-[30px]">
		{#each cards as card (card.title)}
			<div class="col-span-4 flex flex-col">
				<div class="flex h-[505px] w-full items-center justify-center">
					<img
						class=" h-full w-auto object-contain"
						src="/why-choose/{card.imgUrl}.png"
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
