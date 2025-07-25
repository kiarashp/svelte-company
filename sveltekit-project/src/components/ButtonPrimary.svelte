<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	interface button extends HTMLButtonAttributes {
		btnTxt: string;
		customClass?: string;
	}
	let { btnTxt, customClass, ...others }: button = $props();
</script>

<!-- button -->
<button
	class={`relative z-10 flex min-h-[54px] min-w-[100px] items-center justify-center bg-gradient-to-b from-[#3398DB]
      to-[#BDDEF3] p-[2px] xl:min-w-[200px] ${customClass}`}
	{...others}
>
	<!-- noise overlay -->
	<div
		class="pointer-events-none absolute inset-0 z-10 m-[2px] bg-[url('/decorative/noise.png')] opacity-50"
	></div>

	<div
		class="z-15 flex h-full w-full cursor-pointer items-center justify-center gap-[6px]
            bg-gradient-to-b from-[#151D26] to-[#2B3D4F] p-[14px] font-semibold text-white transition-colors duration-300
             hover:from-[#253547] hover:to-[#445d79]
                 active:from-[#0f151c] active:to-[#1f2d3d] active:ring-2"
	>
		<p class="body-md select-none">{btnTxt}</p>

		<div>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
				><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
					fill="currentColor"
					d="M9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3q-.275-.275-.275-.7t.275-.7zm6.6 0L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3q-.275-.275-.275-.7t.275-.7z"
				/></svg
			>
		</div>
	</div>
</button>
