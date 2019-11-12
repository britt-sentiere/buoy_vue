<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="text" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-secondary m-5" value="Submit">
      </form>
    </div>
  </div>
</template>


<style>
  .btn {

    background-color: #009688; /* Green */
     border: none;
     color: white;
     padding: 15px 32px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;

  }

  .login {

    text-align: center;
    
  }
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("userType", response.data.user_type);
          localStorage.setItem("userId", response.data.user_id);
          // localStorage.setItem("userFirstName", response.data.user_first_name);
          // localStorage.setItem("userLastName", response.data.user_last_name);


          if (response.data.user_type === 'Student') {
            this.$router.push("/students/" + response.data.user_id); // Student Path
          } else {
            this.$router.push("/courses"); // Teacher Path
          }
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>