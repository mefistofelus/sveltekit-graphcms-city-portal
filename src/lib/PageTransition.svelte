<script>
	import { fly } from 'svelte/transition';
	export let slug = '';
	const pageTransitionDuration = 300;
</script>

{#key slug}
	<div
		in:fly={{ x: -5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
		out:fly={{ x: 5, duration: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
