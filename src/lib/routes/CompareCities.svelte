<script>
	import { Link } from 'svelte-routing';
</script>

<div class="warning">
	Cette fonctionnalité est encore en dévelopement.
	<Link to="/">
		<div class="link">Retourner à l'accueil</div>
	</Link>
</div>

<style>
	.warning {
		font-size: 1.4em;
		font-weight: 600;
		margin: 50px;
		text-align: center;
		color: #ff5722;
	}

	.link {
		text-decoration: underline;
		color: #ff5722;
	}
</style>
