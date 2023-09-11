import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);

if (!import.meta.env.SSR) {
  // Initializing the store based on the local storage
  const token = localStorage.getItem('authToken');
  if (token) {
    isAuthenticated.set(true);
  }
}
