import { writable } from 'svelte/store';

export const userConnected = writable(false);

/**
 * Check if the given login and password are correct
 * @param {string} login Login from localStorage or from form.
 * @param {string} password Password from localStorage or from form.
 * @returns void
 */
export function tryToConnect(login, password) {
	localStorage.setItem('login', login);
	localStorage.setItem('password', password);

	if (login === import.meta.env.VITE_LOGIN && password === import.meta.env.VITE_PASSWORD) {
		userConnected.set(true);
	} else {
		userConnected.set(false);
	}
}
