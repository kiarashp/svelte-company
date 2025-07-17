<script lang="ts">
	type Card = {
		imgUrl: string;
		title: string;
		desc: string;
	};
	const cards: Card[] = [
		{
			imgUrl: 'vector-1',
			title: 'Email Us',
			desc: 'contact@abccompany.com'
		},
		{
			imgUrl: 'vector-2',
			title: 'Call Us',
			desc: '+1 (XXX) XXX-XXXX'
		},
		{
			imgUrl: 'vector-3',
			title: 'Visit Us',
			desc: '123, Main Road, London, UK.'
		}
	];
</script>

<div class="mt-[96px] flex flex-col px-[7rem]">
	<p class="heading-xl">Get in Touch Today</p>
	<p class="body-lg w-9/12">
		Let’s create the future of your business together. Whether you need consulting, development, or
		robust digital solutions, ABC Company is here to help.
	</p>
	<div class="grid w-full grid-cols-12 gap-[30px]">
		{#each cards as card (card.title)}
			<div class="col-span-4 flex flex-col">
				<div class="flex h-[505px] w-full items-center justify-center">
					<img
						class=" h-full w-auto object-contain"
						src="/getInTouch/{card.imgUrl}.png"
						alt={card.title}
					/>
				</div>
				<p class="heading-md text-secondary mt-[24px]">{card.title}</p>
				<p class="body-lg text-accent mt-[11px]">{card.desc}</p>
			</div>
		{/each}
	</div>

	<!-- divider -->
	<div class="mt-[45px] h-0.5 w-full bg-[rgba(81,113,147,0.5)]"></div>

	<div
		class="flex w-full flex-col bg-[url('/decorative/footer-circle.png')] bg-contain bg-center bg-no-repeat"
	>
		<div class="mt-[45px] grid w-full grid-cols-12 gap-[30px]">
			<div class="col-span-6 flex flex-col">
				<!-- logo -->
				<div class="flex items-center gap-[9px]">
					<div class="bg-primary h-[48px] w-[48px] rounded-[4px]"></div>
					<p class="heading-l text-primary">ABC Company</p>
				</div>
				<!-- description about us -->
				<p class="text-accent body-lg mt-[30px]">
					We offers a comprehensive suite of digital marketing services that cover all aspects of
					our online presence. From SEO and social media marketing to content creation and PPC
					advertising, they have the expertise and resources to handle our diverse marketing needs.
				</p>
				<!-- social media icons -->
				<div class="mt-[30px] flex items-center gap-[12px]">
					<!--facebook-->
					<div
						class="flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full bg-white"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-1/2 w-1/2" viewBox="0 0 24 24"
							><!-- Icon from BoxIcons Logo by Atisa - https://creativecommons.org/licenses/by/4.0/ --><path
								fill="rgba(21, 29, 38, 1)"
								d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z"
							/></svg
						>
					</div>
					<!-- X -->
					<div
						class="flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full bg-white"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-1/2 w-1/2"
							><!-- Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt --><path
								fill="rgba(21, 29, 38, 1)"
								d="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z"
								><animate
									fill="freeze"
									attributeName="d"
									dur="0.8s"
									keyTimes="0;0.3;0.5;1"
									values="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z"
								/></path
							></svg
						>
					</div>
					<!-- Linkedin-->
					<div
						class="flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full bg-white"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-1/2 w-1/2"
							><!-- Icon from BoxIcons Logo by Atisa - https://creativecommons.org/licenses/by/4.0/ --><circle
								cx="4.983"
								cy="5.009"
								r="2.188"
								fill="rgba(21, 29, 38, 1)"
							/><path
								fill="rgba(21, 29, 38, 1)"
								d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"
							/></svg
						>
					</div>
					<!-- Instagram -->
					<div
						class="flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full bg-white"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-1/2 w-1/2" viewBox="0 0 24 24"
							><!-- Icon from BoxIcons Logo by Atisa - https://creativecommons.org/licenses/by/4.0/ --><path
								fill="rgba(21, 29, 38, 1)"
								d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008"
							/><circle cx="16.806" cy="7.207" r="1.078" fill="currentColor" /><path
								fill="rgba(21, 29, 38, 1)"
								d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419a4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688a3 3 0 0 1-1.712 1.711a5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311a3 3 0 0 1-1.719-1.711a5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311a3 3 0 0 1 1.712 1.712a5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"
							/></svg
						>
					</div>
				</div>
			</div>
			<div class="col-span-3">
				<p class="heading-md">Navigation</p>
				<div class="body-lg text-accent mt-[24px] flex flex-col gap-[12px]">
					<a class="hover:text-secondary active:text-primary duration-300" href="/">About Us</a>
					<a class="hover:text-secondary active:text-primary duration-300" href="/">Case Studies</a>
					<a class="hover:text-secondary active:text-primary duration-300" href="/">Careers</a>
					<a class="hover:text-secondary active:text-primary duration-300" href="/">Contact Us</a>
					<a class="hover:text-secondary active:text-primary duration-300" href="/">T&C</a>
					<a class="hover:text-secondary active:text-primary duration-300" href="/"
						>Privacy Policy</a
					>
				</div>
			</div>
			<div class="col-span-3">
				<p class="heading-md">Services</p>
				<div class="body-lg text-accent mt-[24px] flex flex-col gap-[12px]">
					<a class="hover:text-secondary active:text-primary duration-300" href="/"
						>Legacy System Migration</a
					>
					<a class="hover:text-secondary active:text-primary duration-300" href="/"
						>ERP Implementation</a
					>
					<a class="hover:text-secondary active:text-primary duration-300" href="/"
						>Engineering Consulting</a
					>
					<a class="hover:text-secondary active:text-primary duration-300" href="/"
						>Product Consulting</a
					>
					<a class="hover:text-secondary active:text-primary duration-300" href="/"
						>Automated Teams</a
					>
					<a class="hover:text-secondary active:text-primary duration-300" href="/"
						>Cybersecurity Services</a
					>
				</div>
			</div>
		</div>

		<!-- divider -->
		<div class="mt-[45px] h-0.5 w-full bg-[rgba(81,113,147,0.5)]"></div>

		<p class="text-accent body-lg mt-[45px] pb-[15px] text-center">
			© ABC Company 2024 | All Rights Reserved
		</p>
	</div>
</div>
