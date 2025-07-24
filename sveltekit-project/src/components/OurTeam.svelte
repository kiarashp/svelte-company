<script lang="ts">
import ourTeams from "$lib/db/ourTeam";
</script>

<div class="mt-[96px] flex flex-col  paddingContainer">
	<p class="heading-xl">Meet Our Team</p>
	<p class="body-lg xl:w-9/12 w-12/12">
		Our global team of experienced engineers, consultants, and project managers is the backbone of
		ABC Company. With a shared passion for problem-solving and innovation, we’re dedicated to
		delivering exceptional results for every client.
	</p>
	<div class="mt-[45px] grid w-full grid-cols-12 xl:gap-x-[30px] gap-x-[10px]  gap-y-5">
		{#each ourTeams as ourTeam (ourTeam.title)}
			<div class="md:col-span-4 flex flex-col col-span-6">
				<div class="flex w-full items-center justify-center ">
					<img
						class=" h-full w-auto object-contain rounded-lg"
						src="/our-team/{ourTeam.imgUrl}.jpg"
						alt={ourTeam.title}
					/>
				</div>
				<p class="heading-md text-secondary mt-[24px]">{ourTeam.title}</p>
				<p class="body-lg text-accent mt-[11px]">{ourTeam.desc}</p>
			</div>
		{/each}
	</div>
</div>
