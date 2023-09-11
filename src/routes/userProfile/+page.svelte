<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import axios from 'axios';
  
  // @ts-ignore
  /**
	 * @type {null}
	 */
  let userProfileData = null;
  
  onMount(async () => {
    const token = localStorage.getItem('authToken');
    console.log(token+"token");
    if (token) {
      try {
        const response = await axios.get(
          'http://localhost:7000/user',
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // JWT is sent in the Authorization header
            },
          }
        );
        userProfileData = response.data; // Axios automatically parses JSON responses
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    } else {
      // Redirect to login or show a message
    }
  });
</script>
<style>
  .user-profile {
      max-width: var(--column-width);
      margin: var(--column-margin-top) auto;
      background-color: var(--color-bg-2);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .user-profile h1 {
      margin-bottom: 1rem;
      color: var(--color-text);
  }

  .user-profile-info {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
  }

  .user-profile-info label {
      color: var(--color-text);
      font-weight: bold;
  }

  .user-profile-info span {
      padding: 0.5rem;
      background-color: #f9f9f9;
      border-radius: 4px;
  }

  .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: #555;
  }
</style>

{#if userProfileData}
<div class="user-profile">
  <h1>User Profile</h1>
  <div class="user-profile-info">
      <label>First Name:</label>
      <span>{userProfileData.firstName}</span>

      <label>Last Name:</label>
      <span>{userProfileData.lastName}</span>

      <label>Email:</label>
      <span>{userProfileData.email}</span>

      <label>Subscription:</label>
      <span>{userProfileData.subscription}</span>
  </div>
</div>
{:else}
<div class="loading">
  <p>Loading...</p>
</div>
{/if}

