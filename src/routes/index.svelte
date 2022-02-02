<script>
	import { loading } from '$lib/loading';
	import supabase from '$lib/supabase';

	let src;
	let arlo;
	let active = true;

	let getDogs = async () => {
		$loading = true;
		let response = await fetch('https://dog.ceo/api/breeds/image/random');
		let data = await response.json();
		setDogs(data);
	};

	let setDogs = (notArlo) => {
		src = notArlo.message;
		setArlo();
		let delay = setTimeout(() => ($loading = false), 1000);
	};

	let setArlo = () => {
		let newArlo = `/arlopix/${Math.floor(Math.random() * 10) + 1}.jpg`;
		newArlo !== arlo ? (arlo = newArlo) : setArlo();
	};

	let updateDatabase = async (e) => {
		const { data, error } = await supabase
			.from('arlocuterthan')
			.insert([{ yesno: e.target.dataset.yesno, arlo_photo: arlo, other_dog_url: src }]);
		getDogs();
	};

	getDogs();
</script>

<main>
	<h1>cuter than arlo?</h1>
	<div class="imgs" class:loading={$loading}>
		<button class:active={!active} on:click={() => (active = true)} class="left-right left"
			>&lt;</button
		>
		<!-- button alternatives:  ◀ ▶ -->
		<figure class:active>
			<img class="dog" {src} alt="incoming other dog :)" />
			<figcaption>(not arlo)</figcaption>
		</figure>
		<figure class:active={!active}>
			<img
				class="arlo"
				src={arlo}
				alt="pix of arlo"
				style:cursor="pointer"
				on:click={setArlo}
				title="click for more arlo"
			/>
			<figcaption>(arlo)</figcaption>
		</figure>
		<button class:active on:click={() => (active = false)} class="left-right right">&gt;</button>
	</div>
	<h3>is this dog cuter than arlo?</h3>
	<button data-yesno="true" on:click={updateDatabase}>yes</button>
	<button data-yesno="false" on:click={updateDatabase}>no</button>
	<nav><a href="./arlo-stats">arlo stats</a></nav>
</main>

<style>
	main {
		text-align: center;
		margin: 2% 10%;
	}
	h1 {
		font-size: 3rem;
		margin: 0 0 2% 0;
	}
	h3 {
		font-size: 2rem;
		margin-top: 60px;
	}
	img {
		width: auto;
		height: 40vh;
		max-width: 100%;
		object-fit: contain;
		margin-bottom: 3px;
	}
	figure {
		margin: 0;
		padding: 0;
	}
	.imgs {
		/* justify-content: space-between; */
		display: flex;
		justify-content: center;
		height: 40vh;
		gap: 3vw;
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
	}
	@media (hover: hover) {
		button:hover {
			background-color: aqua;
			box-shadow: 4px 4px hotpink;
			text-shadow: 1px 1px hotpink;
			cursor: pointer;
		}
		a:hover {
			border: 1px solid black;
			background-color: aqua;
			text-shadow: 0.5px 0.5px hotpink;
			box-shadow: 4px 4px hotpink;
		}
	}
	a {
		padding: 5px 10px 8px 10px;
		font-size: 1.5rem;
		text-decoration: underline;
		color: black;
	}

	.left-right {
		display: none;
	}
	.loading {
		opacity: 0;
	}
	@media (max-width: 650px) {
		main {
			margin: 5%;
		}
		button {
			font-size: 1.9rem;
		}
		h1 {
			font-size: 2.2rem;
		}
		h3 {
			font-size: 1.5rem;
		}
		a {
			font-size: 1.2rem;
		}

		.imgs {
			position: relative;
			height: 50vh;
			width: 90%;
			margin: 0 auto;
		}
		figure {
			display: none;
		}
		.left-right {
			color: white;
			font-size: 2rem;
			position: absolute;
			top: 50%;
			height: 120px;
			transform: translateY(-50%);
			background-color: aqua;
			box-shadow: 4px 4px hotpink;
			text-shadow: 1px 2px hotpink;
			cursor: pointer;
			border-radius: 0;
			border: none;
			display: inherit;
			display: none;
		}
		.active {
			display: initial;
		}
		.left {
			left: -43px;
		}
		.right {
			right: -40px;
		}
		button:active {
			background-color: aqua;
			box-shadow: 4px 4px hotpink;
			text-shadow: 1px 1px hotpink;
			cursor: pointer;
		}
		a:active {
			border: 1px solid black;
			background-color: aqua;
			text-shadow: 0.5px 0.5px hotpink;
			box-shadow: 4px 4px hotpink;
		}
	}
</style>
