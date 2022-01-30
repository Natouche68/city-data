<script>
	import { onMount } from 'svelte';
	import { Link } from 'svelte-routing';
	import { gun } from '../db.js';

	export let id;

	let city;
	let isEditing = false;
	let isDeleting = false;

	let cityName;
	let cityResidents;
	let cityArea;
	$: cityDensity = parseInt((cityResidents / cityArea).toString());
	let cityCountry;
	let cityRegion;

	onMount(loadCityData);

	function loadCityData() {
		gun
			.get('cities')
			.get(id)
			.once((cityFromDb) => {
				if (cityFromDb) {
					city = cityFromDb;
				}
			});
	}

	function editingCity() {
		isEditing = true;
		cityName = city.name;
		cityResidents = city.residents;
		cityArea = city.area;
		cityCountry = city.country;
		cityRegion = city.region;
	}

	function editCity() {
		gun.get('cities').get(id).put({
			name: cityName,
			residents: cityResidents,
			area: cityArea,
			density: cityDensity,
			country: cityCountry,
			region: cityRegion,
		});

		isEditing = false;
		cityName = '';
		cityResidents = '';
		cityArea = '';
		cityCountry = '';
		cityRegion = '';

		loadCityData();
	}

	function deleteCity() {
		gun.get('cities').get(id).put(null);

		location.assign('/all-cities');
	}
</script>

<Link to="all-cities">
	<div class="return-button">
		<i class="bx bx-chevron-left" /> Retour
	</div>
</Link>

{#if city}
	{#if !isEditing && !isDeleting}
		<h1>Infos sur {city.name}</h1>
		<div class="city-numbers">
			<div class="city-info">
				<div class="label">Nombre d'habitants :</div>
				<div class="number">
					{city.residents}
				</div>
			</div>
			<div class="city-info">
				<div class="label">Superficie :</div>
				<div class="number">
					{city.area} km²
				</div>
			</div>
			<div class="city-info">
				<div class="label">Densité :</div>
				<div class="number">
					{city.density} habitant{city.density < 2 ? '' : 's'}/km²
				</div>
			</div>
			<div class="city-info">
				<div class="label">Pays :</div>
				<div class="number">
					{city.country}
				</div>
			</div>
			<div class="city-info">
				<div class="label">Région / département / Bundesland :</div>
				<div class="number">
					{city.region}
				</div>
			</div>
		</div>
	{/if}

	{#if isEditing}
		<h1>Modifier {city.name}</h1>
		<form on:submit|preventDefault={editCity}>
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
				<button on:click={() => (isEditing = false)}>Annuler</button>
			</div>
		</form>
	{/if}

	{#if isDeleting}
		<h1>Êtes-vous bien sûr de vouloir supprimer cette ville ({city.name}) ?</h1>
		<div class="buttons-container">
			<button on:click={deleteCity}>Oui</button>
			<button on:click={() => (isDeleting = false)}>Non</button>
		</div>
	{/if}

	{#if !isEditing && !isDeleting}
		<div class="buttons-container">
			<button on:click={editingCity}>Modifier</button>
			<button on:click={() => (isDeleting = true)}>Supprimer</button>
		</div>
	{/if}
{:else}
	<h1>Cette ville n'existe pas.</h1>
{/if}
