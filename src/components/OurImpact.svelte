<script lang="ts">
	type Impact = {
		title: string;
		desc: string;
	};
	const impacts: Impact[] = [
		{
			title: '95%',
			desc: 'Client Satisfaction Rate'
		},
		{
			title: '300+',
			desc: 'Successful Projects Delivered'
		},
		{
			title: '40%',
			desc: 'Faster MVP Delivery'
		},
		{
			title: '10+',
			desc: 'Years of Combined Expertise'
		}
	];
</script>

<div class="mt-[96px] flex flex-col px-[7rem] bg-[url(/decorative/impact-bg.png)] bg-cover bg-center">
	<p class="heading-xl">Our Impact</p>
	<p class="body-lg w-9/12">Discover the milestones that define our success.</p>
	<div class="mt-[45px] grid grid-cols-12 gap-[30px]">
		{#each impacts as impact (impact.title)}
			<div class="text-primary col-span-3 flex flex-col items-center justify-center gap-[24px]">
				<p class="heading-xl font-bold">{impact.title}</p>
				<p class="body-lg">{impact.desc}</p>
			</div>
		{/each}
	</div>

	<p class="heading-xxl text-secondary mt-[45px] self-center font-bold">99.9%</p>
	<p class="text-secondary mt-[10px] self-center">Uptime Guarantee</p>
</div>
