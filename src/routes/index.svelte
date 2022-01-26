<script>
	import { createClient } from '@supabase/supabase-js';
	let src;
	let arlo;

	const supabaseUrl = 'https://dakzdewepryxwvgbrmpn.supabase.co';
	const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
	const supabase = createClient(supabaseUrl, supabaseKey);

	let getDogs = async () => {
		let response = await fetch('https://dog.ceo/api/breeds/image/random');
		let data = await response.json();
		setDogs(data);
	};

	let setDogs = (notArlo) => {
		src = notArlo.message;
		arlo = rdmArlo;
	};

	let rdmArlo = `/arlopix/${Math.floor(Math.random() * 10) + 1}.jpg`;

	let updateDatabase = async (e) => {
		const { data, error } = await supabase
			.from('arlocuterthan')
			.insert([{ yesno: e.target.dataset.yesno, arlo_photo: arlo, other_dog_url: src }]);
		getDogs();
	};

	getDogs();
	// TODO: adjust width according to tallest image
	// Make loading animation
</script>

<main>
	<h1>cuter than arlo?</h1>
	<div class="imgs">
		<img class="arlo" src={arlo} alt="pix of arlo" />
		<img class="dog" {src} alt="incoming other dog :)" />
	</div>
	<h3>is this dog cuter than arlo?</h3>
	<button data-yesno="true" on:click={updateDatabase}>yes</button>
	<button data-yesno="false" on:click={updateDatabase}>no</button>
	<nav><a href="./arlo-stats">arlo stats</a></nav>
</main>

<style>
	main {
		align-items: center;
		text-align: center;
		margin: 5% 10%;
	}
	h1 {
		font-size: 3rem;
	}
	h3 {
		font-size: 2rem;
	}
	img {
		width: auto;
		height: auto;
		max-height: 350px;
		max-width: 400px;
		align-self: center;
		border: 1px solid hotpink;
		box-shadow: 5px 5px aqua;
	}

	.imgs {
		/* justify-content: space-between; */
		display: grid;
		grid-template-columns: auto auto;
		gap: 5%;
		justify-content: space-evenly;
	}
	nav {
		margin-top: 40px;
	}
	button {
		font-family: syne;
		background-color: white;
		margin: 0px 10px;
		font-size: 3rem;
		border: 1px solid black;
		box-shadow: 4px 4px black;
		padding: 5px 10px 8px 10px;
		text-shadow: 1px 1px hotpink;
	}
	button:hover {
		background-color: aqua;
		box-shadow: 4px 4px hotpink;
		cursor: pointer;
	}
	a {
		padding: 5px 10px 8px 10px;
		font-size: 1.5rem;
		text-decoration: underline;
		color: black;
	}
	a:hover {
		border: 1px solid black;
		background-color: aqua;
		text-shadow: 0.5px 0.5px hotpink;
		box-shadow: 4px 4px hotpink;
	}
	@media (max-width: 500px) {
		main {
			margin: 5%;
		}
	}
</style>
