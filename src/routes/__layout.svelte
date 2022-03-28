<script context="module">
	export const load = async ({ fetch, params }) => {
		const response = await fetch('/pages.json');

		if (response.ok) {
			const { pages } = await response.json();

			return {
				props: { pages }
			};
		}
	};
</script>

<script>
	export let pages;
	import '../app.css';
</script>

<div class="navbar shadow-2xl sticky top-0 z-10">
	<div class="flex-none">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a href="/">Homepage</a></li>
					{#each pages as page}
						<li><a sveltekit:prefetch href={`/${page.slug}`}>{page.title}</a></li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">Korsun Online</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			{#each pages as page}
				<li><a sveltekit:prefetch href={`/${page.slug}`}>{page.title}</a></li>
			{/each}
		</ul>
	</div>
</div>
<slot />
