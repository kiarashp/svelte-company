<script lang="ts">
	import Hero from '../../components/Hero.svelte';
	import ButtonPrimary from '$components/ButtonPrimary.svelte';

	function handleSubmitForm(e) {
		e.preventDefault();
		console.log('jj');
	}
</script>

<Hero
	title="Get In Touch"
	subtitle="Let’s create the future of your business together."
	description="Whether you need consulting, development, or robust digital solutions, ABC Company is here to help."
	showGrowingClients={false}
/>

<div class="mt-[96px] flex flex-col px-[7rem]">
	<p class="heading-xl">Let's Talk Business</p>
	<p class="body-lg w-9/12">
		Your vision, our expertise. Discover how we can help you achieve sustainable growth and
		impactful solutions.
	</p>
	<form class="text-primary mt-[45px] grid w-full grid-cols-12 gap-[30px]" >
		<!-- first name -->
		<div class="col-span-6 flex flex-col">
			<label class="text-primary" for="first-name-input">First Name</label>
			<div class="w-full">
				<input
					class="bg-mist border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
					type="text"
					id="first-name-input"
					name="first-name"
					placeholder="e.g. Jane"
					autocomplete="given-name"
				/>
			</div>
		</div>
		<!-- Last Name -->
		<div class="col-span-6 flex flex-col">
			<label class="text-primary" for="last-name-input">Last Name</label>
			<div class="w-full">
				<input
					class="bg-mist border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
					type="text"
					id="last-name-input"
					name="last-name"
					placeholder="e.g. Doe"
					autocomplete="family-name"
				/>
			</div>
		</div>
		<!-- Service  -->
		<div class="col-span-6 flex flex-col">
			<label class="text-primary" for="service-input">Service</label>
			<select
				class="bg-mist border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
				name="service"
				id="service-input"
			>
				<option value="product-consulting">Product Consulting</option>
				<option value="legacy-system-migration">Legacy System Migration</option>
				<option value="automated-teams">Automated Teams</option>
				<option value="engineering-consulting">Engineering Consulting</option>
				<option value="erp-implementation">ERP Implementation</option>
				<option value="cybersecurity-services">Cybersecurity Services</option>
			</select>
		</div>
		<!-- Budget -->
		<div class="col-span-6 flex flex-col">
			<label class="text-primary" for="budget-input">Budget</label>
			<div class="relative w-full">
				<input
					class="bg-mist border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
					type="number"
					id="budget-input"
					name="budget"
					placeholder="900"
				/>
				<div
					class="absolute top-[50%] right-0 z-20 flex aspect-square h-[50%] w-auto -translate-y-[50%] items-center justify-center"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
						><!-- Icon from Bootstrap Icons by The Bootstrap Authors - https://github.com/twbs/icons/blob/main/LICENSE.md --><path
							fill="rgba(21, 29, 38, 1)"
							d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z"
						/></svg
					>
				</div>
			</div>
		</div>
		<!-- Subject -->
		<div class="col-span-12 flex flex-col">
			<label class="text-primary" for="last-name-input">Subject</label>
			<div class="w-full">
				<input
					class="bg-mist border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
					type="text"
					id="subject-input"
					name="subject"
					placeholder="e.g. The subject"
					autocomplete="off"
				/>
			</div>
		</div>
		<!-- Message -->
		<div class="col-span-12 flex flex-col">
			<label class="text-primary" for="message-input">Message</label>
			<div class="w-full">
				<textarea
					class="bg-mist border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
					name="message"
					id="message-input"
					placeholder="e.g. Your message..."
				></textarea>
			</div>
		</div>
		<!-- button -->
		<ButtonPrimary type="submit" btnTxt="Send Message" onclick={handleSubmitForm} />
	</form>
</div>
