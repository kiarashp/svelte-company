<script lang="ts">
	import Header from './Header.svelte';
	import ButtonPrimary from './ButtonPrimary.svelte';
	import logos from '$lib/db/logos';

	const {
		title,
		subtitle,
		description,
		showGrowingClients = false
	} = $props<{
		title: string;
		subtitle: string;
		description: string;
		showGrowingClients: boolean;
	}>();
</script>

<div
	class="relative flex flex-col justify-start bg-[url('/decorative/shady-circle.png')] bg-contain bg-top bg-no-repeat
	  pb-[20px] xl:min-h-screen paddingContainer xl:pb-[30px]"
>
	<Header />

	<p class="heading-xxl w-12/12 mt-[105px] xl:w-10/12">{title}</p>
	<p class="body-lg w-12/12 mt-[24px] xl:w-10/12">
		{subtitle}
	</p>
	<p class="body-lg w-12/12 mt-[68px] self-end xl:w-6/12">
		{description}
	</p>
	<div class="w-12/12 mt-[24px] flex flex-col md:flex-row items-center gap-[24px] self-end xl:w-6/12">
		<ButtonPrimary btnTxt="Get a consultation" />
		<a
			class="body-md hover:decoration-secondary hover:text-accent active:text-primary active:decoration-primary font-semibold underline duration-300"
			href="/">View Case Studies</a
		>
	</div>
	{#if showGrowingClients}
		<div class="heading-sm mt-9 self-center font-semibold xl:mt-[138px]">
			Join in our ever growing client list
		</div>
		<div class="mt-[26px] grid w-full grid-cols-12 justify-items-center gap-3.5 xl:gap-[1.8rem]">
			{#each logos as logo (logo)}
				<div class="col-span-6 md:col-span-4 xl:col-span-2">
					<img class="h-full w-full object-contain" src={logo} alt="" />
				</div>
			{/each}
		</div>
	{/if}
</div>
