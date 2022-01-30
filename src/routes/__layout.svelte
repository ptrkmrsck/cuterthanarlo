<script>
	import { navigating } from '$app/stores';
	import { loading } from '$lib/loading';
	import ArloSpin from '$lib/arlo-spin.svelte';
	$: $loading = !!$navigating;
</script>

<svelte:head>
	<title>cuter than arlo?</title>
</svelte:head>
<ArloSpin />
<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Syne&display=swap');
	:root {
		margin: 0;
		padding: 0;
		font-family: syne;
	}
</style>
