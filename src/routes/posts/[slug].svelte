<script context="module">
	export const load = async ({ fetch, params }) => {
		const response = await fetch(`/posts/${params.slug}.json`);

		if (response.ok) {
			const { post } = await response.json();

			return {
				props: { post }
			};
		}
	};
</script>

<script>
	import { format, formatDistance } from 'date-fns';
	import uk from 'date-fns/locale/uk';

	export let post;
</script>

<svelte:head>
	<title>{post.title} | Korsun Online</title>
</svelte:head>

<div class="container mx-auto pt-10">
	<div class="card w-1/2 bg-base-100 mx-auto">
		<figure><img src={post.coverImage.url} alt="Cover for {post.title}" /></figure>
		<div class="card-body">
			<div class="flex items-center justify-between">
				<div class="badge badge-secondary">
					{post.category.title}
				</div>
				<span class="text-xs font-light"
					>{format(new Date(post.createdAt), 'do MMMM yyyy', {
						locale: uk
					})}</span
				>
			</div>
			<h2 class="card-title justify-between">
				{post.title}
			</h2>
			<div>
				{@html post.content.html}
			</div>
			<div class="card-actions justify-end items-center">
				<img class="w-10" src={post.author.photo.url} alt="Avatar {post.author.name}" />
				<p>
					{post.author.name}
				</p>
			</div>
		</div>
	</div>
</div>
