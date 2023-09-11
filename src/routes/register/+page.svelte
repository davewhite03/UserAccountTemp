<script>
  let firstname = '';
  let lastname = '';
  let email = '';
  let password = '';
  /**
	 * @type {null}
	 */
  let responseData = null;
  /**
	 * @type {null}
	 */
  let errorData = null;

  import axios from 'axios';

  async function register() {
  try {
    const response = await axios.post(
      'http://localhost:7000/register',
      { firstName: firstname, lastName: lastname, email: email, password: password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    responseData = response.data; // Store the response data to show in the UI
  } catch (/** @type {any} */ error) {
  errorData = error.response ? error.response.data : error.message;
}
}
</script>

<style>
  .register-form {
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto;
    background-color: var(--color-bg-2);
    padding: 2rem;
    border-radius: 8px;
  }

  .register-form label {
    display: block;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  .register-form input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .register-form button {
    background-color: var(--color-theme-1);
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .register-form button:hover {
    background-color: #d63300;
  }

  .response {
    margin-top: 1rem;
    color: green;
  }

  .error {
    margin-top: 1rem;
    color: red;
  }
</style>

<form class="register-form" on:submit|preventDefault={register}>
  <div>
    <label>
      First Name:
      <input type="text" bind:value="{firstname}" required />
    </label>
  </div>
  <div>
    <label>
      Last Name:
      <input type="text" bind:value="{lastname}" required />
    </label>
  </div>
  <div>
    <label>
      Email:
      <input type="email" bind:value="{email}" required />
    </label>
  </div>
  <div>
    <label>
      Password:
      <input type="password" bind:value="{password}" required />
    </label>
  </div>
  <button type="submit">Register</button>

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
</form>
