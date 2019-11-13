<template>
  <div class="login">

    <!-- ===================== login area start ===================== -->
    <section class="login_area section_padding_100">
        <div class="container">
            <div class="row">

                <div class="col-12 col-lg-5 col-xl-6 item">
                    <!-- Login thumb start -->
                    <div class="login_thumb" style="background-image: url('/img/gallery/bookpile.jpg');">
                        <!-- Login thumb caption -->
                        <div class="login_thumb_caption">
                            <h3>Welcome Back!</h3>
                            <p>Continue your learning by sign in.</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-7 col-xl-6 item">
                    <!-- login form start -->
                    <div class="login_form">
                        <!-- sign in facebok -->
                        <!-- <div class="sign_in_facebook">
                            <a class="btn btn-default" href="#" role="button"><i class="fa fa-facebook"></i>Sign in with Facebook</a>
                        </div> -->
                        <!-- sign in twitter -->
                        <!-- <div class="sign_in_twitter">
                            <a class="btn btn-default" href="#" role="button"><i class="fa fa-twitter"></i>Sign in with Twitter</a>
                        </div> -->
                        <!-- sign in manual form -->
                        <div class="login_manual_form">
                            <!-- <p>or</p> -->
                            <form v-on:submit.prevent="submit()">
                                <div class="form-group">
                                    <i class="fa fa-user"></i>
                                    <input type="text" class="form-control" v-model="email" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                    <input type="password" class="form-control" v-model="password" placeholder="Password">
                                </div>
                                   <button type="submit" class="btn btn-default" id="login_submit">Sign in</button>
                            </form>
                            <!-- forget password -->
                            <div class="forget_pass one">
                                <a href="#"><i class="fa fa-question-circle" aria-hidden="true"></i>Forget Password</a>
                            </div>
                            <div class="forget_pass">
                                <a href="/signup"><i class="fa fa-user-plus" aria-hidden="true"></i>Didn't have a account? Register</a>
                            </div>
                        </div>
                    </div>
                    <!-- login form end -->
                </div>
            </div>
        </div>
    </section>
    <!-- ===================== login area end ===================== -->
    <!-- <div class="spacer"></div> -->

    <!--  <div class="container">
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
      </div> -->

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
          this.$parent.userType = response.data.user_type;


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