<script>
	import { loading } from '$lib/loading';
</script>

{#if $loading}
	<body on:click={() => ($loading = false)}>
		<div>
			<figure>
				<img src="/favicon.png" alt="" />
				<figcaption>loading...</figcaption>
			</figure>
		</div>
	</body>
{/if}

<style>
	body {
		margin: 0;
		padding: 0;
	}
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 255, 255, 0.76);
		z-index: 9999;
	}

	@keyframes spinning {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	img {
		margin: 0;
		padding: 0;
		width: 60px;
		animation-name: spinning;
		animation-duration: 3.5s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		border: 1px solid aqua;
		box-shadow: 4px 4px hotpink;
	}
	figure {
		animation-name: spinning;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-out;
	}
	figcaption {
		padding-top: 15px;
	}
</style>
