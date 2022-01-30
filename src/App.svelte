<script>
	import { onMount } from 'svelte';
	import { userConnected, tryToConnect } from './lib/user';
	import { Router, Route, Link } from 'svelte-routing';
	import SignIn from './lib/routes/SignIn.svelte';
	import Home from './lib/routes/Home.svelte';
	import AllCities from './lib/routes/AllCities.svelte';
	import AddCity from './lib/routes/AddCity.svelte';
	import CompareCities from './lib/routes/CompareCities.svelte';
	import OneCity from './lib/routes/OneCity.svelte';

	onMount(() => {
		const loginFromStorage = localStorage.getItem('login');
		const passwordFromStorage = localStorage.getItem('password');
		tryToConnect(loginFromStorage, passwordFromStorage);
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="./style.css" />
	<link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
</svelte:head>

<Router>
	<Link to="/"><div class="navbar"><i class="bx bxs-buildings" /> City Data</div></Link>
	<div class="content">
		{#if $userConnected}
			<Route path="/"><Home /></Route>
			<Route path="/all-cities"><AllCities /></Route>
			<Route path="/add-city"><AddCity /></Route>
			<Route path="/compare-cities"><CompareCities /></Route>
			<Route path="/one-city/:id" let:params><OneCity id={params.id} /></Route>
		{:else}
			<SignIn />
		{/if}
	</div>
</Router>
