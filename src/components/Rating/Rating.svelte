<script>
	import { STATES, state, rating } from '../../store';
	import Card from '../Card/Card.svelte';
	import Star from '../../images/icon-star.svg';
	let ratings = Array.from(Array(5).keys());

	/**
	 * @param {number} v
	 */
	function updateRating(v) {
		if (v === $rating) {
			rating.update(() => 0);
			return;
		}
		rating.update(() => v);
	}

	function submitRating() {
		console.log('hi');
		state.set(STATES.thankyou);
	}
</script>

<Card class="rating">
	<figure class="star">
		<Star />
	</figure>
	<h1 class="title">How did we do?</h1>
	<p class="text">
		Please let us know how we did with your support request. All feedback is appreciated to help us
		improve our offering!
	</p>
	<div class="ratings">
		{#each ratings as r}
			<button
				class="rating-btn"
				on:click={() => updateRating(r + 1)}
				data-selected={$rating === r + 1}
			>
				{r + 1}
			</button>
		{/each}
	</div>
	<button class="submit" type="submit" disabled={$rating === 0} on:click={submitRating}
		>Submit</button
	>
</Card>

<style lang="scss" module>
	@use 'sass:color' as *;
	@use '../../scss/functions' as *;
	@use '../../scss/mixins' as *;
	@use '../../scss/helpers' as *;

	.star {
		@extend %btn;
		color: v('accent');
		cursor: default;
	}

	.title {
		margin-block: 1.5rem;
		line-height: 1.25;
		color: v('white');
	}

	.ratings {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-block: 2rem 1.5rem;
		gap: 0.5rem;
		overflow-x: auto;
	}

	.rating-btn {
		@extend %btn;
		color: v('off-white');
		flex: 0 0 3.5rem;

		&:hover {
			background-color: adjust-color(c('off-black'), $lightness: 20%);
		}

		&[data-selected='true'] {
			background-color: v('accent');
			color: v('white');
		}
	}

	.submit {
		@extend %btn;
		display: flex;
		width: 100%;
		background-color: v('accent');
		font-weight: 700;
		text-transform: uppercase;
		color: v('white');

		&:hover {
			background-color: v('white');
			color: v('accent');
		}

		&[disabled] {
			pointer-events: none;
			background-color: transparent;
			border: 2px solid adjust-color(c('off-black'), $lightness: 16%);
			color: adjust-color(c('off-black'), $lightness: 16%);
		}
	}
</style>
