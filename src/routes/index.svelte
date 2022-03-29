<script context="module">
	export const load = async ({ fetch }) => {
		const response = await fetch('/posts.json');

		if (response.ok) {
			const { posts } = await response.json();

			return {
				props: { posts }
			};
		}
	};
</script>

<script>
	import Hero from '$lib/Hero/index.svelte';
	import { formatDistance } from 'date-fns';
	import uk from 'date-fns/locale/uk';

	export let posts;
</script>

<svelte:head>
	<title>Blog | Korsun Online</title>
</svelte:head>

<Hero />
<div class="container mx-auto p-5">
	<div class="grid grid-cols-12 gap-10 items-center space-x-5">
		{#each posts as { title, slug, createdAt, excerpt, coverImage, featured, content }}
			<div class="col-span-4 card bg-base-100 shadow-xl">
				<figure class="px-5 pt-10">
					<img
						width="304"
						height="176"
						class="rounded w-full h-56 object-cover"
						src={coverImage.url}
						alt={`${title} - cover image`}
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{title} - {formatDistance(new Date(createdAt), new Date(), {
							addSuffix: true,
							locale: uk
						})}
					</h2>
					<p>{@html content.html}</p>
					<div class="card-actions justify-end">
						<a sveltekit:prefetch href={`/posts/${slug}`} class="btn btn-outline">Read post</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
