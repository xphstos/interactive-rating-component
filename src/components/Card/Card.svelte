<div class={$$props.class}>
	<slot />
</div>

<style lang="scss">
	@use 'sass:color' as *;
	@use '../../scss/colors' as *;
	@use '../../scss/functions' as *;

	div {
		border-radius: 1.75rem;
		background: radial-gradient(
			circle at center top,
			adjust-color(c('off-black'), $lightness: 5%),
			adjust-color(c('off-black'), $lightness: 2%)
		);
		padding: 2rem;
		width: min(100vw - 4rem, 28rem);
	}
</style>
