<script>
	let text;

	let getText = async () => {
		let num = Math.floor(Math.random() * 2) + 1;
		let res = await fetch(`/html/${num}.html`);
		text = await res.text();
	};
</script>

<button on:click={getText}>click</button>

<p>{@html text}</p>
