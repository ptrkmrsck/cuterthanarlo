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
	let notCuters = arlocuterthan.filter((x) => x.yesno == false);

	let delay = () => setTimeout(() => ($loading = false), 1000);
	delay();

	let arloArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<main class:loading={$loading}>
	<h1>hbd from ptrk, arlo, and all the dogs arlo is cuter than!</h1>
	<br />
	<div>
		{#each arloArr as i}
			<img
				style:animation-duration={`${Math.random() * 2.5 + 1}s`}
				src={`/arlopix/${i}.jpg`}
				alt=""
			/>
		{/each}
		{#each notCuters as { other_dog_url }}
			<img style:animation-duration={`${Math.random() * 2.5 + 1}s`} ~src={other_dog_url} alt="" />
		{/each}
	</div>
</main>

<style>
	main {
		margin: 10%;
		gap: 30px;
		text-align: center;
	}
	div {
		display: grid;
		grid-template-columns: repeat(5, auto);
	}

	img {
		margin: 1vw;
		border: 1px solid hotpink;
		box-shadow: 5px 5px aqua;
		max-width: 150px;
		animation-name: spinning;
		/* animation-duration: 3.5s; */
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	.loading {
		opacity: 0;
	}

	@keyframes spinning {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 650px) {
		main {
			margin: 15% 3%;
			gap: 10px;
		}
	}
</style>
