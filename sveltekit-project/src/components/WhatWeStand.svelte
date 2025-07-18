<script lang="ts">
	type Card = {
		imgUrl: string;
		title: string;
		desc: string;
	};
	const cards: Card[] = [
		{
			imgUrl: 'vector-1',
			title: 'Innovation',
			desc: 'Pioneering solutions tailored to your unique needs.'
		},
		{
			imgUrl: 'vector-2',
			title: 'Reliability',
			desc: 'Delivering on promises with precision and excellence.'
		},
		{
			imgUrl: 'vector-3',
			title: 'Collaboration',
			desc: 'Partnering with clients to achieve shared success.'
		},
		{
			imgUrl: 'vector-4',
			title: 'Integrity',
			desc: 'Building trust through transparency and accountability.'
		}
	];
</script>

<div class="mt-[96px] flex flex-col px-[7rem]">
	<p class="heading-xl">What We Stand For</p>
	<p class="body-lg w-9/12">
		Our unwavering values shape our approach to delivering impactful solutions.
	</p>
	<div class="grid w-full grid-cols-12 gap-[30px] mt-[45px]">
		{#each cards as card (card.title)}
			<div class="col-span-3 flex flex-col">
				<div class="flex w-full items-center justify-center">
					<img
						class=" h-full w-auto object-contain"
						src="/what-we-stand/{card.imgUrl}.png"
						alt={card.title}
					/>
				</div>
				<p class="heading-md text-secondary mt-[24px]">{card.title}</p>
				<p class="body-lg text-accent mt-[11px]">{card.desc}</p>
			</div>
		{/each}
	</div>
</div>
