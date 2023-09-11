<script>
	import { page } from '$app/stores';
	import { isAuthenticated }from '../stores/store.js';// Adjust path according to your project structure
	import { goto } from '$app/navigation';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';

	let showModal = false;

	function handleLogout() {
		localStorage.removeItem('authToken'); // Adjust with the key you used to store the token
		$isAuthenticated = false; // Update the authentication state in the store
		showModal = false;
		goto('/');
	}
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>

			{#if !$isAuthenticated}
				<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
					<a href="/login">Login</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/register') ? 'page' : undefined}>
					<a href="/register">Register</a>
				</li>
			{:else}
				<li aria-current={$page.url.pathname.startsWith('/userProfile') ? 'page' : undefined}>
					<a href="/userProfile">Profile</a>
				</li>
				<li>
					<a href="#" on:click={() => (showModal = true)}>Logout</a>
				</li>
			{/if}
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

{#if showModal}
<div class="modal">
	<div class="modal-content">
		<p>Are you sure you want to logout?</p>
		<button on:click={handleLogout}>Sign me out!</button>
		<button on:click={() => (showModal = false)}>Cancel</button>
	</div>
</div>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background: #fff;
		padding: 2em;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 1em;
		align-items: center;
	}
</style>
