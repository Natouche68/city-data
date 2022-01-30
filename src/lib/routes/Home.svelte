<script>
	import { Link } from 'svelte-routing';
</script>

<h1>Bienvenue dans City Data !</h1>
<div class="home-link-container">
	<Link to="/all-cities">
		<div class="home-link-button">
			<div class="home-link-icon">
				<i class="bx bx-list-ul" />
			</div>
			<div class="home-link-text">Toutes les villes</div>
		</div>
	</Link>
	<Link to="/add-city">
		<div class="home-link-button">
			<div class="home-link-icon">
				<i class="bx bx-plus" />
			</div>
			<div class="home-link-text">Ajouter une ville</div>
		</div>
	</Link>
	<Link to="/compare-cities">
		<div class="home-link-button">
			<div class="home-link-icon">
				<i class="bx bx-line-chart" />
			</div>
			<div class="home-link-text">Comparer des villes</div>
		</div>
	</Link>
</div>
