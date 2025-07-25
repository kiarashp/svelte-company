<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import ButtonPrimary from '$components/ButtonPrimary.svelte';
	import { json } from '@sveltejs/kit';
;
	interface theInput {
		value: string;
		touched: boolean;
		isValid: boolean;
	}
	function checkValidity(event: Event, filedName: theInput) {
		filedName.touched = true;

		const target = event.target as HTMLInputElement;
		if (target.value.length > 0) {
			filedName.isValid = true;
		} else {
			filedName.isValid = false;
		}
	}
	let contactName: theInput = $state({
		value: '',
		touched: false,
		isValid: false
	});
	let contactEmail = $state({
		value: '',
		touched: false,
		isValid: false
	});
	let contactService = $state({
		value: '',
		touched: false,
		isValid: false
	});
	let contactBudget = $state({
		value: '',
		touched: false,
		isValid: false
	});
	let contactSubject = $state({
		value: '',
		touched: false,
		isValid: false
	});
	let contactMessage = $state({
		value: '',
		touched: false,
		isValid: false
	});
	let doesEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

	async function handleSubmitForm(e: Event) {
		e.preventDefault();
		if (
			contactName.isValid &&
			contactEmail.isValid &&
			contactService.isValid &&
			contactBudget.isValid &&
			contactSubject.isValid &&
			contactMessage.isValid
		) {
			console.log('form submited');
			isLoading = true;
			const response = await fetch('/api/send-mail', {
				method: 'POST',
				body: JSON.stringify({
					contactName: contactName.value,
					contactEmail: contactEmail.value,
					contactService: contactService.value,
					contactBudget: contactBudget.value,
					contactSubject: contactSubject.value,
					contactMessage: contactMessage.value
				}),
				headers: { 'Ccontent-Type': 'application/json' }
			});
			if (response.ok) {
				doesEmailSent = true;
			} else {
				showErrorMessage = true;
			}
			isLoading = false;

			console.log(response);
		} else {
			contactName.touched = true;
			contactEmail.touched = true;
			contactService.touched = true;
			contactBudget.touched = true;
			contactSubject.touched = true;
			contactMessage.touched = true;
		}
	}
</script>

<Hero
	title="Get In Touch"
	subtitle="Let’s create the future of your business together."
	description="Whether you need consulting, development, or robust digital solutions, ABC Company is here to help."
	showGrowingClients={false}
/>

<div class="mt-[96px] flex flex-col paddingContainer">
	<p class="heading-xl">Let's Talk Business</p>
	<p class="body-lg w-9/12">
		Your vision, our expertise. Discover how we can help you achieve sustainable growth and
		impactful solutions.
	</p>
	<form class=" text-primary relative mt-[45px] grid w-full grid-cols-12 md:gap-[30px] gap-3 p-5">
		{#if isLoading}
			<div
				class="absolute inset-0 z-20 col-span-12 flex h-full w-full items-center justify-center rounded-sm bg-[rgba(21,29,38,0.8)]"
			>
				<div
					class="border-secondary border-t-accent h-15 w-15 border-6 animate-spin rounded-full"
				></div>
			</div>
		{/if}

		{#if doesEmailSent}
			<div class="text-success body-lg col-span-12 w-full font-bold">
				Thanks for reaching out to ABC Company! Your message has been successfully sent. We'll get
				back to you within 1-2 business days.
			</div>
		{:else if showErrorMessage}
			<p class="text-errorRed body-lg col-span-12 w-full font-bold">
				Delivery Failed: Unfortunately, your email could not be sent at this time. This might be due
				to a temporary network issue. Please refresh the page and try sending your message again.
			</p>
		{:else}
			<!-- first name -->
			<div class="md:col-span-6 col-span-12 flex flex-col">
				<label class="text-primary" for="first-name-input">First Name</label>
				<div class="w-full">
					<input
						class="bg-mist border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
						class:bg-mist={contactName.isValid}
						class:inputError={!contactName.isValid && contactName.touched}
						type="text"
						id="first-name-input"
						name="first-name"
						placeholder="e.g. Jane"
						autocomplete="given-name"
						required
						bind:value={contactName.value}
						oninput={(e) => {
							checkValidity(e, contactName);
						}}
					/>
				</div>
			</div>
			<!-- Email -->
			<div class="md:col-span-6 col-span-12 flex flex-col">
				<label class="text-primary" for="email-input">Email</label>
				<div class="w-full">
					<input
						class="border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
						class:bg-mist={contactEmail.isValid}
						class:inputError={!contactEmail.isValid && contactEmail.touched}
						type="text"
						id="email-input"
						name="email"
						placeholder="e.g. JohnDoe@gmail.com"
						autocomplete="email"
						required
						bind:value={contactEmail.value}
						oninput={(e) => {
							checkValidity(e, contactEmail);
						}}
					/>
				</div>
			</div>
			<!-- Service  -->
			<div class="md:col-span-6 col-span-12 flex flex-col">
				<label class="text-primary" for="service-input">Service</label>
				<select
					class="border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
					class:bg-mist={contactService.isValid}
					class:inputError={!contactService.isValid && contactService.touched}
					name="service"
					id="service-input"
					bind:value={contactService.value}
					required
					oninput={(e) => {
						checkValidity(e, contactService);
					}}
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
			<div class="md:col-span-6 col-span-12 flex flex-col">
				<label class="text-primary" for="budget-input">Budget</label>
				<div class="relative w-full">
					<input
						class=" border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
						class:bg-mist={contactBudget.isValid}
						class:inputError={!contactBudget.isValid && contactBudget.touched}
						type="number"
						id="budget-input"
						name="budget"
						placeholder="900"
						bind:value={contactBudget.value}
						required
						oninput={(e) => {
							checkValidity(e, contactBudget);
						}}
					/>
					<div
						class="absolute right-0 top-[50%] z-20 flex aspect-square h-[50%] w-auto -translate-y-[50%] items-center justify-center"
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
						class="border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
						class:bg-mist={contactSubject.isValid}
						class:inputError={!contactSubject.isValid && contactSubject.touched}
						type="text"
						id="subject-input"
						name="subject"
						placeholder="e.g. The subject"
						autocomplete="off"
						bind:value={contactSubject.value}
						required
						oninput={(e) => {
							checkValidity(e, contactSubject);
						}}
					/>
				</div>
			</div>
			<!-- Message -->
			<div class="col-span-12 flex flex-col">
				<label class="text-primary" for="message-input">Message</label>
				<div class="w-full">
					<textarea
						class=" border-accent focus:ring-accent h-full w-full appearance-none border-[2px] focus:ring-2"
						class:bg-mist={contactMessage.isValid}
						class:inputError={!contactMessage.isValid && contactMessage.touched}
						name="message"
						id="message-input"
						placeholder="e.g. Your message..."
						bind:value={contactMessage.value}
						required
						oninput={(e) => {
							checkValidity(e, contactMessage);
						}}
					></textarea>
				</div>
			</div>
			<!-- button -->
			<div class="col-span-12 w-full">
				<ButtonPrimary type="submit" btnTxt="Send Message" onclick={handleSubmitForm} />
			</div>
		{/if}
	</form>
</div>

<style>
	.inputError {
		background-color: rgba(220, 53, 69, 1);
		color: rgba(251, 253, 254, 1);
	}
	.inputError::placeholder {
		color: rgba(251, 253, 254, 1);
	}
</style>
