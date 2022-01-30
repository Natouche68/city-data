<script>
	import { tryToConnect } from '../user.js';

	let login;
	let password;
</script>

<form on:submit|preventDefault={() => tryToConnect(login, password)}>
	<div class="form-control">
		<label for="login">Login</label>
		<input type="text" bind:value={login} id="login" />
	</div>
	<div class="form-control">
		<label for="password">Mot de passe</label>
		<input type="password" bind:value={password} id="password" />
	</div>
	<div class="buttons-container">
		<button type="submit">Se connecter</button>
	</div>
</form>
