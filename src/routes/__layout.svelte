<script context="module">
	export const load = async ({ fetch, params }) => {
		const slug = params.slug;
		const response = await fetch('/pages.json');

		if (response.ok) {
			const { pages } = await response.json();

			return {
				props: { pages, slug }
			};
		}
	};
</script>

<script>
	import PageTransition from '$lib/PageTransition.svelte';
	export let pages;
	export let slug;
	import '../app.css';
</script>

<div class="navbar shadow-2xl sticky top-0 z-10">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">Korsun Online</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			{#each pages as page}
				<li><a sveltekit:prefetch href={`/${page.slug}`}>{page.title}</a></li>
			{/each}
		</ul>
	</div>
</div>

<PageTransition {slug}>
	<slot />
</PageTransition>
