<script context="module">
	import { createClient } from '@supabase/supabase-js';

	const supabaseUrl = 'https://dakzdewepryxwvgbrmpn.supabase.co';
	const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
	const supabase = createClient(supabaseUrl, supabaseKey);
	export async function load() {
		let { data: arlocuterthan, error } = await supabase.from('arlocuterthan').select('*');
		return {
			props: { arlocuterthan }
		};
	}
</script>

<script>
	export let arlocuterthan;

	let total = arlocuterthan.length;
	let howCuter = arlocuterthan.filter((x) => x.yesno == false).length;
	let cuters = arlocuterthan.filter((x) => x.yesno == true);
</script>

<main>
	<h1>arlo is cuters than at least {howCuter} out of {total} dougs</h1>

	<h3>↓the {cuters.length} dougs that are "cuter" than arlo.↓</h3>
	<images>
		{#each cuters as { other_dog_url }}
			<img src={other_dog_url} alt="" />
		{/each}
	</images>
</main>

<style>
	main {
		justify-content: center;
		text-align: center;
	}

	img {
		margin: 1%;
		border: 1px solid hotpink;
		box-shadow: 5px 5px aqua;
		max-height: 350px;
		max-width: 400px;
	}
</style>
