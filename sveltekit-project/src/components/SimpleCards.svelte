<script lang="ts">
	import ButtonOutline from './ButtonOutline.svelte';
    interface Props {
        title: string;
        subtitle: string;
        contents: any[];
		gridCols?: string;
		consultation?: boolean;
    }
    let {title,subtitle,contents,gridCols="md:col-span-6 xl:col-span-4",consultation=false}:Props=$props();
</script>

<div class="paddingContainer mt-[30px] flex flex-col xl:mt-[96px]">
	<p class="heading-xl">{title}</p>
	<p class="body-lg w-12/12 xl:w-9/12">
		{subtitle}
	</p>
	<div class="grid w-full grid-cols-12 justify-items-center gap-4 xl:gap-[30px] mt-4">
		{#each contents as content (content.title)}
			<div
				class="col-span-12 flex flex-col items-center justify-start {gridCols}"
			>
				<div class="flex h-[300px] w-full max-w-[300px] items-center justify-center">
					<img class=" h-full max-w-full object-contain" src={content.imgUrl} alt={content.title} />
				</div>
				<p class="heading-md text-secondary mt-[24px]">{content.title}</p>
				<p class="body-lg text-accent mt-[11px]">{content.desc}</p>
			</div>
		{/each}
	</div>
	{#if consultation}
		<div class="mt-[40px] flex items-center justify-center">
			<ButtonOutline buttonTxt="Get a consultation" />
		</div>
	{/if}

</div>
