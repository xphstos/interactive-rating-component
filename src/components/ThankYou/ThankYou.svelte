<script>
	import { STATES, state } from '../../store';
	import Card from '../Card/Card.svelte';
	import Illustration from '../../images/illustration-thank-you.svg';
	import Back from '../../images/arrow-back.svg';
	import { rating } from '../../store';

	function resetAndGoBack() {
		rating.update(() => 0);
		state.set(STATES.rating);
	}
</script>

<Card class="thanks">
	<figure class="graphicWrapper">
		<Illustration class="graphic" />
		<figcaption class="selected">You selected {$rating} out of 5</figcaption>
	</figure>
	<h1 class="title">Thank you!</h1>
	<p class="text">
		We appreciate you taking the time to give a rating. If you ever need more support, don’t
		hesitate to get in touch!
	</p>
	<button class="back" on:click={resetAndGoBack}>
		<Back />
	</button>
</Card>

<style lang="scss" module>
	@use 'sass:color' as *;
	@use '../../scss/colors' as *;
	@use '../../scss/functions' as *;
	@use '../../scss/helpers' as *;
	@use '../../scss/mixins' as *;

	:global(.thanks) {
		text-align: center;
		position: relative;
	}

	.graphicWrapper {
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.selected {
		display: inline-block;
		margin-top: 1rem;
		border-radius: 3rem;
		padding: 0.5rem 1rem;
		color: v('accent');
		background-color: adjust-color(c('off-black'), $lightness: 8%);
	}

	.title {
		font-size: 2rem;
		color: v('white');
		margin-block: 2rem 1.5rem;
		line-height: 1.25;
	}

	.back {
		@extend %btn;
		background: transparent;
		// border: 2px solid currentColor;
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		color: adjust-color(c('off-black'), $lightness: 12%);

		&:hover {
			color: v('accent');
		}
	}
</style>
