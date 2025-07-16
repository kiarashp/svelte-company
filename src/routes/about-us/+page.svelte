<script>
	import Hero from '../../components/Hero.svelte';
</script>

<Hero
	title="About Us"
	subtitle="Driving Innovation, Empowering Businesses Worldwide"
	description="At ABC Company, we are more than just a service provider—we’re your trusted partner in engineering success. With decades of experience and a commitment to excellence, we deliver tailored solutions that help businesses, from startups to global enterprises, achieve their goals."
	showGrowingClients={false}
/>

<div
	class="mt-[96px] flex flex-col bg-[url(/decorative/story-bg.png)] bg-cover bg-center px-[7rem]"
>
	<p class="heading-xl">Our Story</p>
	<p class="body-lg w-9/12">
		Founded on the principles of innovation and collaboration, ABC Company was created to bridge the
		gap between complex engineering challenges and simplified solutions. Over the years, we’ve grown
		into a global team of experts passionate about helping businesses scale, innovate, and thrive in
		an ever-changing digital landscape.
	</p>
	<!-- timeline -->
	<div class="relative mt-[48px] flex w-full flex-col">
		<div class="bg-secondary absolute h-full w-[5px] left-[50%] -translate-x-[50%]"></div>
		<div class="flex w-1/2 self-end">
			<!-- year-->
			<div class="flex items-center justify-between">
				<span class="bg-secondary h-[5px] w-[20px]"></span>
				<p class="text-secondary heading-md px-[12px] py-[6px]">2017</p>
				<span class="bg-secondary h-[5px]  w-[20px]"></span>
			</div>
			<!-- title / description -->
			<div class="flex flex-col gap-[11px] ps-[12px] ">
				<p class="heading-md text-secondary">The Beginning</p>
				<p class="heading-sm text-accent">
					ABC Company was founded with a vision to provide innovative engineering solutions to
					startups, focusing on reliability and affordability.
				</p>
			</div>
		</div>
	</div>
</div>
