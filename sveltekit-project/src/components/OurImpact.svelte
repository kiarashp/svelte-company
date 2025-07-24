<script lang="ts">
	import impacts from '$lib/db/impacts';
</script>

<div class="xl:mt-[96px] mt-[50px] flex flex-col paddingContainer">
	<p class="heading-xl">Our Impact</p>
	<p class="body-lg w-9/12">Discover the milestones that define our success.</p>
	<div class="mt-[45px] grid grid-cols-12 xl:gap-[30px] gap-3">
		{#each impacts as impact (impact.title)}
			<div class="text-primary md:col-span-3 col-span-12 flex flex-col items-center justify-start  gap-x-[24px] mt-3 md:mt-0">
				<p class="heading-xl font-bold">{impact.title}</p>
				<p class="body-lg">{impact.desc}</p>
			</div>
		{/each}
	</div>

	<p class="heading-xxl text-secondary mt-[45px] self-center font-bold">99.9%</p>
	<p class="text-secondary mt-[10px] self-center">Uptime Guarantee</p>
</div>
