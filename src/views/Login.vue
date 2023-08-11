<template>
    <div>
      <!-- Your login form here -->
      <form @submit.prevent="login">
        <!-- Input fields for email and password -->
        <input v-model="email" placeholder="Email">
        <input v-model="password" placeholder="Password" type="password">
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
            email: this.email,
            password: this.password,
          });
  
          // Assuming the API response structure is similar to your example
          const accessToken = response.data.access_token;
  
          // Save the token to your state, local storage, or vuex store
          // For simplicity, let's save it to the local storage
          localStorage.setItem('access_token', accessToken);
          console.log('Access Token:', accessToken);
          // Redirect the user to another page or perform any other action
          // after successful login
        } catch (error) {
          // Check if the error status is 422 (Unprocessable Entity)
          if (error.response && error.response.status === 422) {
            console.error('Login error: Incorrect Credentials');
          } else {
            console.error('Login error:', error);
          }
        }
      },
    },
  };
  </script>
  