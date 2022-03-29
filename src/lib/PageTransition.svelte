<script>
	import { fly } from 'svelte/transition';
	export let slug = '';
	const pageTransitionDuration = 300;
</script>

{#key slug}
	<div
		in:fly={{ y: -5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
		out:fly={{ y: 5, duration: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
