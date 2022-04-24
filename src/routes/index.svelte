<script>
	import { STATES, state } from '../store';
	import Countdown from '../components/Countdown/Countdown.svelte';
	import ThankYou from '../components/ThankYou/ThankYou.svelte';
	import Rating from '../components/Rating/Rating.svelte';
	import '../scss/style.scss';
</script>

<main>
	{#if $state === STATES.rating}
		<Rating />
	{:else if $state === STATES.thankyou}
		<ThankYou />
	{/if}
</main>
{#if $state === STATES.thankyou}
	<Countdown duration={10} />
{/if}
