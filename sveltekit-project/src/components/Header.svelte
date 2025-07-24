<script lang="ts">
	import ButtonPrimary from './ButtonPrimary.svelte';
	import { onMount } from 'svelte';

	import { fade, slide } from 'svelte/transition';

	let menuOpen = $state(false);
	let isScrolled: boolean = $state(false);
	let sentinel: HTMLDivElement | undefined = $state();
	let observer: IntersectionObserver | undefined = $state();

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
	// $effect(() => {
	// 	// Create intersection observer to watch when user scrolls past top
	// 	observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				// When sentinel is not visible, user has scrolled
	// 				isScrolled = !entry.isIntersecting;
	// 			});
	// 		},
	// 		{ threshold: 0 }
	// 	);

	// 	if (sentinel) {
	// 		observer.observe(sentinel);
	// 	}

	// 	// return () => {
	// 	// 	if (observer) observer.disconnect();
	// 	// };

	// });

	onMount(() => {
		// Create intersection observer to watch when user scrolls past top
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// When sentinel is not visible, user has scrolled
					isScrolled = !entry.isIntersecting;
				});
			},
			{ threshold: 1 }
		);

		if (sentinel) {
			observer.observe(sentinel);
		}

		return () => {
			if (observer) observer.disconnect();
		};
	});
</script>

<div bind:this={sentinel} class="pointer-events-none absolute left-0 top-0 h-1"></div>

<div
	class="font-nav fixed left-0 top-0 z-50 flex h-[102px] w-[100vw] items-center justify-between
	 transition-all duration-300 ease-in-out
	paddingContainer
	{isScrolled ? '   bg-white shadow-lg   backdrop-blur-sm' : 'bg-transparent '}
	"
>
	<!-- logo -->
	<a
		href="/"
		class="flex items-center gap-1 transition-transform duration-300 will-change-transform hover:scale-110 active:scale-100"
	>
		<div class="bg-primary h-[24px] w-[24px] rounded-[2px]"></div>
		<p class="text-primary text-nowrap">ABC Company</p>
	</a>
	<!-- menu -->
	<nav class="hidden items-center gap-[1.5rem] font-medium xl:flex">
		<a
			class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
			href="/">Home</a
		>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
		<a
			class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
			href="/about-us">About Us</a
		>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
		<a
			class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
			href="/case-studies">Case Studies</a
		>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
		<a
			class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
			href="/services">Services</a
		>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
		<a
			class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
			href="/contact-us">Contact Us</a
		>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
	</nav>

	<!-- mobile menu -->
	<div class="relative h-full w-1/2 xl:hidden flex items-center justify-end">
		{#if menuOpen}
			<div
				class="bg-primary heading-sm body-md fixed right-0 top-0 z-30 flex h-[100vh]
			 w-[40%] flex-col items-center gap-5 px-4 pt-[102px] text-white transition-all xl:hidden"
				transition:slide={{ duration: 300, axis: 'x' }}
			>
				<a
					class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
					href="/">Home</a
				>
				<div class="bg-secondary h-[2px] w-[98%] rounded-full"></div>
				<a
					class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
					href="/about-us">About Us</a
				>
				<div class="bg-secondary h-[2px] w-[98%] rounded-full"></div>
				<a
					class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
					href="/case-studies">Case Studies</a
				>
				<div class="bg-secondary h-[2px] w-[98%] rounded-full"></div>
				<a
					class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
					href="/services">Services</a
				>
				<div class="bg-secondary h-[2px] w-[98%] rounded-full"></div>
				<a
					class="active:text-secondary cursor-pointer transition duration-300 hover:text-gray-500"
					href="/contact-us">Contact Us</a
				>
				<div class="bg-secondary h-[2px] w-[98%] rounded-full"></div>
			</div>
		{/if}

		<!-- burger menu -->
		<button
			onclick={toggleMenu}
			class=" right-1  z-50  h-10 w-10  flex items-center justify-center"
			aria-label="Toggle navigation menu"
		>
			<div
				class=" active:scale-85 flex h-full w-full items-center justify-start transition-all duration-300"
			>
				<span
					class={`text-accent absolute block h-0.5 w-7 transform bg-current transition duration-500 ease-in-out ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
				></span>
				<span
					class={`text-accent absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${menuOpen ? 'opacity-0' : ''}`}
				></span>

				<span
					class={`text-accent absolute block h-0.5 w-7 transform bg-current transition duration-500 ease-in-out ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
				></span>
			</div>
		</button>
	</div>

	<ButtonPrimary btnTxt="Get a consultation" customClass="xl:flex hidden" />
</div>
