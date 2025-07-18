<script lang="ts">
	import Hero from '../../components/Hero.svelte';
	import TimeLine from '../../components/TimeLine.svelte';
	import WhatWeStand from '../../components/WhatWeStand.svelte';
	import OurTeam from '../../components/OurTeam.svelte';
	import JoinUs from '../../components/JoinUs.svelte';
	import OurFocus from '../../components/OurFocus.svelte';
</script>

<Hero
	title="About Us"
	subtitle="Driving Innovation, Empowering Businesses Worldwide"
	description="At ABC Company, we are more than just a service provider—we’re your trusted partner in engineering success. With decades of experience and a commitment to excellence, we deliver tailored solutions that help businesses, from startups to global enterprises, achieve their goals."
	showGrowingClients={false}
/>
<TimeLine />
<WhatWeStand/>
<OurTeam/>
<JoinUs/>
<OurFocus/>