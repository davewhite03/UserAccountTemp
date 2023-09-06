<script>
    let name = '';
    let email = '';
    let password = '';

    function register() {
        // Registration logic here
        console.log('Registration attempted:', name, email);
    }
</script>


  
  <style>
    .register-container {
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
  
    .register-container input {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid var(--color-theme-2);
      border-radius: 4px;
      width: 100%;
    }
  
    .register-container button {
      padding: 0.5rem 1rem;
      border: none;
      background-color: var(--color-theme-1);
      color: white;
      cursor: pointer;
      border-radius: 4px;
    }
  
    .register-container button:hover {
      background-color: var(--color-theme-2);
    }
  </style>
  
  <div class="register-container">
    <h1>Register</h1>
    <input type="text" placeholder="Username" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Register</button>
  </div>
  
