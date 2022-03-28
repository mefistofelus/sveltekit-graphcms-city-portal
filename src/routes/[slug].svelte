<script context="module">
	export const load = async ({ fetch, params }) => {
		const response = await fetch(`/pages/${params.slug}.json`);

		if (response.ok) {
			const { page } = await response.json();

			return {
				props: { page }
			};
		}
	};
</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>{page.title} | Korsun Online</title>
</svelte:head>

<div class="container mx-auto text-center pt-10">
	<h1 class="font-bold text-2xl">{page.title}</h1>
	<hr />
	<p>{@html page.content.html}</p>
</div>
