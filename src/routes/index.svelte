<script>
	let src;
	let arlo;

	let getDogs = async () => {
		let response = await fetch('https://dog.ceo/api/breeds/image/random');
		let data = await response.json();
		src = await data.message;
		arlo = `../static/arlopix/${Math.floor(Math.random() * 10) + 1}.jpg`;
	};

	getDogs();
	// TODO: data to send to server: cuterThanArlo?, url, date
	// build stats page
	// adjust width according to tallest image
</script>

<svelte:head>
	<title>cuter than arlo?</title>
</svelte:head>
<main>
	<h1>cuter than arlo?</h1>
	<div class="imgs">
		<img class="arlo" src={arlo} alt="pix of arlo" />
		<img class="dog" {src} alt="incoming other dog :)" />
	</div>
	<h4>is this dog cuter than arlo?</h4>
	<button on:click={getDogs}>yes</button>
	<button on:click={getDogs}>no</button>
</main>

<style>
	main {
		align-items: center;
		text-align: center;
		margin: 5% 10%;
	}
	img {
		width: 80%;
		height: auto;
		align-self: center;
	}

	.imgs {
		border: 1px solid red;

		/* justify-content: space-between; */
		display: grid;
		grid-template-columns: auto auto;
		gap: 5%;
	}
	/* .hidden {
		opacity: 0%;
	} */

	@media (max-width: 500px) {
		main {
			margin: 5%;
		}
	}
</style>
