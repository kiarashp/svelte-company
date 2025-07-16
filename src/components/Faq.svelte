<script lang="ts">
	type Faq = {
		id: string;
		question: string;
		answer: string;
	};
	const Faqs: Faq[] = [
		{
			id: '1',
			question: 'What industries do you serve?',
			answer:
				'We serve clients across industries, including technology, healthcare, finance, retail, and more.'
		},
		{
			id: '2',
			question: 'How do you ensure security and reliability?',
			answer:
				'We ensure security and reliability through a multi-layered approach including end-to-end encryption, regular security audits, compliance with industry standards, and robust disaster recovery protocols. Our infrastructure is designed for high availability, with continuous monitoring and automated failovers to maximize uptime.'
		},
		{
			id: '3',
			question: 'Can your solutions scale with my business?',
			answer:
				'Yes, our solutions are built with scalability in mind, utilizing cloud-native architectures and flexible technologies that can seamlessly grow alongside your business demands. We design for elasticity, allowing you to easily expand capacity as your needs evolve.'
		},
		{
			id: '4',
			question: 'Do you offer dedicated teams for ongoing projects?',
			answer:
				'Yes, we offer dedicated teams tailored to your ongoing project needs. This ensures consistent expertise, deep project understanding, and seamless collaboration throughout the project lifecycle, from development to maintenance and continuous improvement.'
		}
	];
	let openedFaq = $state<string | null>(null);
	function accordionClicked(faqId: string) {
		// is it the same opened one
		if (faqId === openedFaq) {
			openedFaq = null;
		} else {
			openedFaq = faqId;
		}
	}
</script>

<div class="mt-[96px] flex flex-col bg-[url(/decorative/faq-bg.png)] bg-cover bg-center px-[7rem]">
	<p class="heading-xl">FAQs</p>
	<p class="body-lg w-9/12">
		Find clear, concise answers about our services, processes, and how we help businesses achieve
		their goals.
	</p>
	<div class="bg-accent mt-[45px] h-0.5 w-full"></div>

	{#each Faqs as faq, index (faq.id)}
		<!-- each faq -->
		<div class="flex w-full flex-col bg-white">
			<button
				class="mt-[26px] flex justify-between px-[24px] cursor-pointer"
				onclick={() => accordionClicked(faq.id)}
				aria-expanded={faq.id === openedFaq}
				aria-controls={`faq-panel-${faq.id}`}
				id={`faq-button-${faq.id}`}
			>
				<p class="heading-md text-primary cursor-pointer duration-300 active:scale-95">
					{faq.question}
				</p>

				{#if faq.id != openedFaq}
					<!-- plus -->
					<div
						class=" flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center transition-transform duration-100 active:scale-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="pointer-events-none h-full w-full"
							><!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE --><path
								fill="#151D26"
								d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
							/></svg
						>
					</div>
				{:else}
					<!-- minus -->
					<div
						class="flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center transition-transform duration-100 active:scale-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="pointer-events-none h-full w-full"
							><!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE --><path
								fill="#151D26"
								d="M19 12.998H5v-2h14z"
							/></svg
						>
					</div>
				{/if}
			</button>
			<div
				id={`faq-panel-${faq.id}`}
				role="region"
				aria-labelledby={`faq-button-${faq.id}`}
				class="eachFaq text-accent body-lg overflow-hidden px-[24px] {faq.id !== openedFaq
					? 'closed'
					: 'opened'}"
			>
				<p class="pt-[22px]">{faq.answer}</p>
			</div>
			<div class="bg-accent mt-[26px] h-0.5 w-full"></div>
		</div>
	{/each}
</div>

<style>
	.eachFaq.closed {
		animation: closeFaq 0.4s ease-out forwards;
	}

	.eachFaq.opened {
		animation: openFaq 0.8s ease-in;
	}
	@keyframes openFaq {
		from {
			max-height: 0;
			opacity: 0;
		}
		to {
			max-height: 1000px;
			opacity: 1;
		}
	}
	@keyframes closeFaq {
		from {
			max-height: 1000px;
			opacity: 1;
		}
		to {
			max-height: 0px;
			opacity: 0;
		}
	}
</style>
