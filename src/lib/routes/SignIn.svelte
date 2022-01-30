<script>
	import { tryToConnect } from '../user.js';

	let login;
	let password;
</script>

<form on:submit|preventDefault={() => tryToConnect(login, password)}>
	<div>
		<label for="login">Login</label>
		<input type="text" bind:value={login} id="login" />
	</div>
	<div>
		<label for="password">Mot de passe</label>
		<input type="password" bind:value={password} id="password" />
	</div>
	<div>
		<button type="submit">Se connecter</button>
	</div>
</form>
