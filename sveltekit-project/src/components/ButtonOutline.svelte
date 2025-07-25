<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements";
		interface buttonOutLine extends HTMLButtonAttributes {
		buttonTxt: string;
	}
    let {buttonTxt,...others}:buttonOutLine = $props()
</script>
<button
	class="group/theButton flex cursor-pointer items-center justify-center gap-4 transition-all duration-300 active:scale-95"
	{...others}><span
		class="text-accent heading-sm group-hover/theButton:text-primary group-active/theButton:text-accent font-semibold duration-300"
		>{buttonTxt}</span
	>
	<span class="flex h-[18px] w-[18px] items-center justify-center">
		<svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.2305 17.8183C11.2305 17.8183 19.5486 11.692 19.5487 9.50001C19.5487 7.30801 11.2305 1.18188 11.2305 1.18188"
				stroke="#517193"
				stroke-width="2.2686"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				opacity="0.4"
				d="M1.52546 17.8183C1.52546 17.8183 9.84357 11.692 9.84358 9.50001C9.8436 7.30801 1.52539 1.18188 1.52539 1.18188"
				stroke="#517193"
				stroke-width="2.2686"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</span></button
>
