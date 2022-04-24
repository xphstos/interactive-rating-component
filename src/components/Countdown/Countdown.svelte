<script>
	import { state, STATES, rating } from '../../store';
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLDivElement}
	 */
	let counter;

	onMount(() => {
		counter.addEventListener('animationend', () => {
			rating.update(() => 0);
			state.set(STATES.rating);
		});
	});
</script>

<div
	class="countdown"
	bind:this={counter}
	style="--play-state: {$state === STATES.thankyou
		? `running`
		: `paused`}; --duration: {$$props.duration}s"
/>

<style lang="scss">
	@use 'sass:color' as *;
	@use '../../scss/colors' as *;
	@use '../../scss/functions' as *;

	.countdown {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0.5rem;
		background: linear-gradient(
			to right,
			adjust-color(c('off-black'), $lightness: 16%),
			adjust-color(c('off-black'), $lightness: 16%)
		);
		animation: count var(--duration) forwards linear;
		animation-play-state: var(--play-state, paused);
		transform-origin: top left;
		clip-path: inset(0 0 0 0);
	}

	@keyframes count {
		to {
			clip-path: inset(0 100% 0 0);
		}
	}
</style>
