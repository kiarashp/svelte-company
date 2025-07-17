<script>
	import ButtonPrimary from "./ButtonPrimary.svelte";
</script>

<div class="font-nav flex min-h-[102px] w-full items-center justify-between ">
	<!-- logo -->
	<a
		href="/"
		class="flex items-center gap-1 transition-transform duration-300 will-change-transform hover:scale-110 active:scale-100"
	>
		<div class="bg-primary h-[24px] w-[24px] rounded-[2px]"></div>
		<p class="text-primary">ABC Company</p>
	</a>
	<!-- menu -->
	<nav class="flex items-center gap-[1.5rem] font-medium">
		<a class="hover:text-gray-500 transition duration-300 cursor-pointer active:text-secondary" href="/">Home</a>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
		<a class="hover:text-gray-500 transition duration-300 cursor-pointer active:text-secondary" href="/about-us">About Us</a>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
		<a class="hover:text-gray-500 transition duration-300 cursor-pointer active:text-secondary" href="/case-studies">Case Studies</a>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
		<a class="hover:text-gray-500 transition duration-300 cursor-pointer active:text-secondary" href="/services">Services</a>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
		<a class="hover:text-gray-500 transition duration-300 cursor-pointer active:text-secondary" href="/contact-us">Contact Us</a>
		<div class="bg-primary h-[10px] w-[10px] rounded-full"></div>
	</nav>
<ButtonPrimary btnTxt="Get a consultation"/>
</div>
