<script>
	import { Link } from 'svelte-routing';
	import { onMount } from 'svelte';
	import { gun } from '../db.js';
	import CityLine from '../components/CityLine.svelte';

	let cities = [];

	onMount(() => {
		gun
			.get('cities')
			.map()
			.once((city, id) => {
				if (city) {
					cities = [...cities, { data: city, id }];
				}
			});
	});
</script>

<Link to="/">
	<div class="return-button">
		<i class="bx bx-chevron-left" /> Retour
	</div>
</Link>

<h1>Toutes les villes</h1>
{#if cities.length === 0}
	<div class="center-align">Aucune ville n'a été trouvé.</div>
{:else}
	<div class="cities-lines-header">
		<div class="city-line-name">Nom</div>
		<div class="city-line-country">Pays</div>
		<div class="city-line-residents">Nombre d'habitants</div>
	</div>
	{#each cities as city}
		<CityLine id={city.id} data={city.data} />
	{/each}
{/if}
