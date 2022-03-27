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
	import { formatDistance } from 'date-fns';
	import uk from 'date-fns/locale/uk';

	export let posts;
</script>

<svelte:head>
	<title>Blog | Korsun Online</title>
</svelte:head>

<div class="hero">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
			<p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-success btn-outline">Get Started</button>
		</div>
	</div>
</div>

<div class="container mx-auto p-5">
	<div class="flex items-center space-x-5">
		{#each posts as { title, slug, createdAt, excerpt, coverImage, featured, content }}
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure class="px-10 pt-10">
					<img
						class="rounded w-full h-44 object-cover"
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
						<a href={slug} class="btn btn-success">Read post</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
