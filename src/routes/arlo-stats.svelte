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

	$loading = true;

	let total = arlocuterthan.length;
	let howManyCuter = arlocuterthan.filter((x) => x.yesno == false).length;
	let cuters = arlocuterthan.filter((x) => x.yesno == true);

	let delay = () => setTimeout(() => ($loading = false), 1000);
	delay();
</script>

<main>
	<a href="./">home</a>
	<h1>arlo is cuter than at least {howManyCuter} out of {total} dougs</h1>
	<p>giving him a {(howManyCuter / total) * 100}% cuteness rating</p>

	<h3>
		↓the {cuters.length} doug{cuters.length < 2 ? '' : 's'} that {cuters.length < 2 ? 'is' : 'are'} "cuter"
		than arlo↓
	</h3>
	{#if cuters.length < 1}
		<h1 style:margin="30vh">NONE DOUGS ARE CUTER THAN ARLO</h1>
	{:else}
		{#each cuters as { other_dog_url }}
			<img class:loading={$loading} src={other_dog_url} alt="" />
		{/each}
	{/if}
</main>

<style>
	main {
		justify-content: center;
		text-align: center;
		margin: 5%;
		gap: 30px;
	}

	img {
		margin: 1vw;
		border: 1px solid hotpink;
		box-shadow: 5px 5px aqua;
		max-width: 33vw;
		max-height: 33vh;
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
	.loading {
		opacity: 0;
	}
	@media (max-width: 650px) {
		main {
			margin: 15% 3%;
			gap: 10px;
		}
	}
</style>
