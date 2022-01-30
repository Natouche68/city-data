<script>
	import { Link } from 'svelte-routing';

	export let id;
	export let data;
</script>

<Link to="/one-city/{id}">
	<div class="city-line">
		<div class="city-line-name">
			{data.name}
		</div>
		<div class="city-line-country">
			{data.country}
		</div>
		<div class="city-line-residents">
			{data.residents} habitants
		</div>
	</div>
</Link>
