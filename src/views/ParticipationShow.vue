<template>
  <div class="dock">


    <div class="jumbotron">
      <h1 class="display-4">Hello</h1>
      <p class="lead">Welcome back to Buoy!</p>
      <hr class="my-4">
      <p>Your next exam is Monday, November 4, 2019</p>
    </div>

    <button v-on:click="handRaised()" class="btn btn-primary btn-lg btn-block mt">Hand Raised</button>
    


  </div>
</template>

<style>

.btn-block {

    padding: 20px 30px;
    font-size: 38px;
    /*word-spacing: 10px;*/
    /*text-shadow: 3px 2px teal;*/
    border-radius: 20px;
    width: 80%;
  }

</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      participation: {
        help_requests: []
      },
      helpRequestsCount: 0


    };
  },
  created: function() {
    axios
      .get("/api/participations/" + this.$route.params.id)
      .then(response => {
        this.participation = response.data;
      })
  },
  methods: {
    handRaised() {
      axios
        .post("/api/help_requests", params)
        .then(response => {
          console.log("success", response.data);
          this.help_requests.push(response.data);
          this.participation = ""
        });
    }
  }
};
</script>