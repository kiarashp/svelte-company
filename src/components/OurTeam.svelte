<script lang="ts">
	type Card = {
		imgUrl: string;
		title: string;
		desc: string;
	};
	const cards: Card[] = [
		{
			imgUrl: 'team-1',
			title: 'Olivia Chen',
			desc: 'Co-Founder, ABC Company.'
		},
		{
			imgUrl: 'team-2',
			title: 'Liam Johnson',
			desc: 'Co-Founder, ABC Company'
		},
		{
			imgUrl: 'team-3',
			title: 'Noah Williams',
			desc: 'Co-Founder, ABC Company'
		},
		{
			imgUrl: 'team-4',
			title: 'Sophia Garcia',
			desc: 'Co-Founder & Head of Strategic Partnerships'
		},
		{
			imgUrl: 'team-5',
			title: 'Oliver Davis',
			desc: 'Co-Founder & Chief Talent and Culture Officer (CTCO)'
		},
		{
			imgUrl: 'team-6',
			title: 'Isabella Rossi',
			desc: 'Co-Founder & Director of Advanced Engineering Solutions'
		},
		{
			imgUrl: 'team-7',
			title: 'Elijah Brown',
			desc: 'Co-Founder & Chief Client Success Officer (CCSO)'
		},
		{
			imgUrl: 'team-8',
			title: 'Ava Rodriguez',
			desc: 'Co-Founder & VP of Global Growth'
		},
		{
			imgUrl: 'team-9',
			title: 'Mia Kim',
			desc: 'Co-Founder & Chief Innovation Officer (CINO)'
		}
	];
</script>

<div class="mt-[96px] flex flex-col  px-[7rem]">
	<p class="heading-xl">Meet Our Team</p>
	<p class="body-lg w-9/12">
		Our global team of experienced engineers, consultants, and project managers is the backbone of
		ABC Company. With a shared passion for problem-solving and innovation, we’re dedicated to
		delivering exceptional results for every client.
	</p>
	<div class="mt-[45px] grid w-full grid-cols-12 gap-[30px]">
		{#each cards as card (card.title)}
			<div class="col-span-4 flex flex-col">
				<div class="flex w-full items-center justify-center">
					<img
						class=" h-full w-auto object-contain"
						src="/our-team/{card.imgUrl}.jpg"
						alt={card.title}
					/>
				</div>
				<p class="heading-md text-secondary mt-[24px]">{card.title}</p>
				<p class="body-lg text-accent mt-[11px]">{card.desc}</p>
			</div>
		{/each}
	</div>
</div>
