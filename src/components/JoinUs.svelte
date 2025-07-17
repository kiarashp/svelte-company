<script lang="ts">
	type Card = {
		imgUrl: string;
		title: string;
		desc: string;
	};
	const cards: Card[] = [
		{
			imgUrl: 'vector-1',
			title: 'Inclusive Environment',
			desc: 'We celebrate diversity and foster a culture of respect and collaboration'
		},
		{
			imgUrl: 'vector-2',
			title: 'Flexible Work Options',
			desc: 'Work remotely, on-site, or in a hybrid setup that suits your lifestyle.'
		},
		{
			imgUrl: 'vector-3',
			title: 'Recognition & Rewards',
			desc: 'Your contributions are valued, and we celebrate achievements big and small.'
		}

	];
</script>

<div class="mt-[96px] flex flex-col bg-[url(/decorative/why-bg.png)] bg-cover bg-center px-[7rem]">
	<p class="heading-xl">Join Us</p>
	<p class="body-lg w-9/12">
		Looking for a career where you can innovate and make an impact? ABC Company is always on the lookout for passionate individuals to join our growing team.
	</p>
	<div class="grid w-full grid-cols-12 gap-[30px] mt-[45px]">
		{#each cards as card (card.title)}
			<div class="col-span-4 flex flex-col">
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
