<script>
	import { Link } from 'svelte-routing';
	import { gun } from '../db.js';

	let cityName;
	let cityResidents;
	let cityArea;
	$: cityDensity = parseInt((cityResidents / cityArea).toString());
	let cityCountry;
	let cityRegion;

	function addCity() {
		const cityToAdd = {
			name: cityName,
			residents: cityResidents,
			area: cityArea,
			density: cityDensity,
			country: cityCountry,
			region: cityRegion,
		};

		gun.get('cities').set(cityToAdd);

		cityName = '';
		cityResidents = '';
		cityArea = '';
		cityCountry = '';
		cityRegion = '';
	}
</script>

<h1>Ajouter une ville</h1>
<form on:submit|preventDefault={addCity}>
	<div class="form-control">
		<label for="name">Nom</label>
		<input type="text" bind:value={cityName} id="name" required />
	</div>
	<div class="form-row">
		<div class="form-control">
			<label for="residents">Nombre d'habitants</label>
			<input type="number" bind:value={cityResidents} id="residents" required />
		</div>
		<div class="form-control">
			<label for="area">Superficie (en km²)</label>
			<input type="number" bind:value={cityArea} id="area" required />
		</div>
	</div>
	<div class="density-container">
		Densité: {cityDensity ? cityDensity : '...'} habitant{cityDensity < 2 ? '' : 's'}/km²
	</div>
	<div class="form-control">
		<label for="country">Pays</label>
		<input type="text" bind:value={cityCountry} id="country" required />
	</div>
	<div class="form-control">
		<label for="region">Région / département / Bundesland</label>
		<input type="text" bind:value={cityRegion} id="region" required />
	</div>
	<div class="buttons-container">
		<button type="submit">Ajouter</button>
		<Link to="/">Annuler</Link>
	</div>
</form>
