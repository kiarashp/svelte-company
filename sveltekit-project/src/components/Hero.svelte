<script lang="ts">
	import Header from './Header.svelte';
	import ButtonPrimary from './ButtonPrimary.svelte';

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
	class="relative flex min-h-screen flex-col justify-start bg-[url('/decorative/shady-circle.png')] bg-contain bg-center
	 bg-no-repeat px-[1rem] pb-[20px] xl:px-[7rem] xl:pb-[30px]"
>
	<Header />

	<p class="heading-xxl mt-[105px] w-10/12">{title}</p>
	<p class="body-lg mt-[24px] w-10/12">
		{subtitle}
	</p>
	<p class="body-lg mt-[68px] w-6/12 self-end">
		{description}
	</p>
	<div class="mt-[24px] flex w-6/12 items-center gap-[24px] self-end">
		<ButtonPrimary btnTxt="Get a consultation" />
		<a
			class="body-md hover:decoration-secondary hover:text-accent active:text-primary active:decoration-primary font-semibold underline duration-300"
			href="/">View Case Studies</a
		>
	</div>
	{#if showGrowingClients}
		<div class="heading-sm mt-[138px] self-center font-semibold">
			Join in our ever growing client list
		</div>
		<div class="mt-[26px] grid w-full grid-cols-12 gap-[1.8rem]">
			<img class="col-span-2" src="/clients/logo1.svg" alt="" />
			<img class="col-span-2" src="/clients/logo2.svg" alt="" />
			<img class="col-span-2" src="/clients/logo3.svg" alt="" />
			<img class="col-span-2" src="/clients/logo4.svg" alt="" />
			<img class="col-span-2" src="/clients/logo5.svg" alt="" />
			<img class="col-span-2" src="/clients/logo6.svg" alt="" />
		</div>
	{/if}
</div>
