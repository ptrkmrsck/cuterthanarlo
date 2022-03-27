<script context="module">
	import supabase from '$lib/supabase';
	export async function load() {
		let { data: arlocuterthan, error } = await supabase.from('arlocuterthan').select('*');
		return {
			props: { arlocuterthan }
		};
	}
</script>

<script>
	import { loading } from '$lib/loading';
	export let arlocuterthan;
	let topToggle = false;

	$loading = true;

	let total = arlocuterthan.length;
	let howManyCuter = arlocuterthan.filter((x) => x.yesno == false).length;
	let cuters = arlocuterthan.filter((x) => x.yesno == true).reverse();
	let delay = () => setTimeout(() => ($loading = false), 1000);
	delay();

	//aggregate duplicates
	let reducedList = (arr) => {
		return arr.reduce((m, e) => {
			m[e.other_dog_url] = (+m[e.other_dog_url] || 0) + 1;
			return m;
		}, {});
	};

	// decending sort
	let sorted = Object.entries(reducedList(cuters))
		.filter((x) => x[1] > 1)
		.sort(([, a], [, b]) => b - a);
</script>

<main>
	<a href="./">home</a>
	<h1>arlo is cuter than at least {howManyCuter} out of {total} dougs</h1>
	{#if cuters.length}
		<h2>
			giving him a <span class="percent">{Math.floor((howManyCuter / total) * 100)}%</span> cuteness
			rating
		</h2>
		{#if topToggle}
			<h3>
				↓the {sorted.length} dougs that have been voted cuter than arlo more than once↓
			</h3>
		{:else}
			<h3>
				↓the {cuters.length} doug{cuters.length < 2 ? '' : 's'} that {cuters.length < 2
					? 'is'
					: 'are'} "cuter" than arlo↓
			</h3>
		{/if}
		<div class="buttons">
			<button class:topToggle on:click={() => (topToggle = false)}>all</button>
			<button class:topToggle={!topToggle} on:click={() => (topToggle = true)}>top</button>
		</div>
	{/if}
	{#if cuters.length < 1}
		<h3 style:margin="30vh">NONE DOUGS ARE CUTER THAN ARLO !!!</h3>
	{:else if !topToggle}
		{#each cuters as { other_dog_url }}
			<img class:loading={$loading} src={other_dog_url} alt="random dog" loading="lazy" />
		{/each}
	{:else}
		{#each sorted as x}
			<figure class:loading={$loading}>
				<img src={x[0]} alt="random dog" loading="lazy" />
				<figcaption>voted cuter *{x[1]} times!*</figcaption>
			</figure>
		{/each}
	{/if}
</main>

<style>
	main {
		justify-content: center;
		text-align: center;
		margin: 7% 5%;
		gap: 30px;
	}

	img {
		margin: 1vw;
		border: 1px solid hotpink;
		box-shadow: 5px 5px aqua;
		max-width: 33vw;
		max-height: 33vh;
	}
	figure img {
		margin: 0;
		margin-bottom: 0.3em;
		width: 50%;
		max-width: 50%;
		max-height: none;
	}
	figcaption {
		/* margin-top: 0.3em; */
		margin-bottom: 2em;
	}
	a {
		position: fixed;
		top: 10px;
		right: 10px;
		padding: 5px 10px 8px 10px;
		font-size: 1.5rem;
		text-decoration: underline;
		border: 1px solid black;
		color: black;
		background-color: white;
	}
	a:hover {
		border: 1px solid black;
		background-color: aqua;
		text-shadow: 0.5px 0.5px hotpink;
		box-shadow: 4px 4px hotpink;
	}
	.percent {
		padding: 3px 5px;
		color: hotpink;
		border: 1px solid black;
		background-color: aqua;
		text-shadow: 0.5px 0.5px black;
		box-shadow: 3px 3px hotpink;
		line-height: 50px;
	}
	.loading {
		opacity: 0;
	}

	button {
		font-family: inherit;
		font-size: 1.2rem;
		border-radius: 0;
		padding: 1px 6px;
		color: black;
		background-color: white;
		border: 1px solid black;
	}

	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.7%;
		margin-bottom: 1em;
	}

	.topToggle {
		color: white;
		background-color: black;
		cursor: pointer;
		transform: scale(82%);
	}
	@media (max-width: 650px) {
		main {
			margin: 15% 3%;
			gap: 10px;
		}
		figure img {
			width: 90%;
			max-width: 90%;
			max-height: none;
		}
	}
</style>
