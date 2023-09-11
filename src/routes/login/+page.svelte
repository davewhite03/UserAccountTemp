<script>
  import { goto } from '$app/navigation';
  import axios from 'axios';
	import { isAuthenticated } from '../../stores/store';
 

  let email = '';
  let password = '';
  // @ts-ignore
  /**
	 * @type {null}
	 */
  let responseData = null;
  // @ts-ignore
  /**
	 * @type {null}
	 */
  let errorData = null;

  async function login() {
      try {
          const response = await axios.post('http://localhost:7000/login', {email: email, password: password }, {
              headers: {
                  'Content-Type': 'application/json',
              },
          });
          responseData = response.data;
          localStorage.setItem('authToken', response.data.token); // Store the token in local storage
          $isAuthenticated = true;
          goto('/userProfile');
          console.log('Login successful:', response.data);
          // Navigate to a different page, if necessary
          // goto('/some-page');
      } catch (/** @type {any} */ error) {
          errorData = error.response ? error.response.data : error.message;
          console.error('Error logging in:', errorData);
      }
  }

  function navigateToRegister() {
      goto('/register');
  }
</script>

<style>
  .login-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      background-color: var(--color-bg-2);
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-width: var(--column-width);
      margin: var(--column-margin-top) auto;
    }
  
    .login-container input {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid var(--color-theme-2);
      border-radius: 4px;
      width: 100%;
    }
  
    .login-container button {
      padding: 0.5rem 1rem;
      border: none;
      background-color: var(--color-theme-1);
      color: white;
      cursor: pointer;
      border-radius: 4px;
    }
  
    .login-container button:hover {
      background-color: var(--color-theme-2);
    }
  
    .login-container .signup-button {
      margin-top: 1rem;
      background-color: transparent;
      color: var(--color-theme-1);
    }
  
    .login-container .signup-button:hover {
      text-decoration: underline;
    }
</style>

<div class="login-container">
<h1>Login</h1>
<input type="email" placeholder="Email" bind:value="{email}" required />
<input type="password" placeholder="Password" bind:value="{password}" required />
<button on:click="{login}">Login</button>
<button class="signup-button" on:click={navigateToRegister}>Not a Member? Sign Up Now!</button>

{#if responseData}
  <div class="response">
    <pre>{JSON.stringify(responseData, null, 2)}</pre>
  </div>
{/if}

{#if errorData}
  <div class="error">
    Error: {errorData}
  </div>
{/if}
</div>
