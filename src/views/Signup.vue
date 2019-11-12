<template>
  <div class="signup">
  <div class="spacer"></div>


    <!-- Login area start -->
    <div class="login_area section_padding_100">
        <div class="container">
            <div class="row">
                <!-- Login thumb -->
                <div class="col-12 col-lg-5 col-xl-6">
                    <div class="login_thumb" style="background-image: url(img/gallery/signup.jpg);">
                        <!-- Login thumb caption -->
                        <div class="login_thumb_caption">
                            <h3>Registering is Easy!</h3>
                            <p>Register &amp; start learning.</p>
                        </div>
                    </div>
                </div>

                <!-- Register form area start  -->
                <div class="col-12 col-lg-7 col-xl-6">
                    <div class="register_form">
                        <form v-on:submit.prevent="submit()">
                            <!-- Single Register input area start  -->
                            <div class="form-group">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input type="text" name="First name" id="first_name" placeholder="First name">
                            </div>
                            <!-- Single Register input area start  -->
                            <div class="form-group">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input type="text" name="Last name" id="last_name" placeholder="Last name">
                            </div>
                            <!-- Single Register input area start  -->
                            <div class="form-group">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <input type="email" name="email" id="email" placeholder="Email">
                            </div>
                            <!-- Single Register input area start  -->
                            <div class="form-group">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <input type="text" name="name" id="pass_a" placeholder="Password">
                            </div>
                            <!-- Single Register input area start  -->
                            <div class="form-group">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <input type="text" name="name" id="pass_b" placeholder="Confirm Password">
                            </div>
                            <!-- Single Register input area start  -->
                            <button type="submit" class="btn btn-default" id="login_submit">Sign Up</button>
                        </form>
                        <div class="already_have_account">
                            <a href="/login"><i class="fa fa-user-plus" aria-hidden="true"></i> Already have a account? Login</a>
                        </div>
                    </div>
                </div>
                <!-- Register form area end  -->

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "", 
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };

      axios
        .post("/api/students", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>