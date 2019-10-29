<template>
  <div class="dock">


    <div class="jumbotron">
      <h1 class="display-4">Hello, Brittani</h1>
      <p class="lead">Welcome back to Buoy!</p>
      <hr class="my-4">
      <p>Your next exam is Monday, November 4, 2019</p>
    </div>



    <br>
    <br>
    <br>
    <br>
    <button v-on:click="handRaised()" class="btn btn-primary btn-lg btn-block">Hand Raised</button>
    


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
export default {
  data: function() {
    return {
      help_requests: [],
      errors: [],

    };
  },
  created: function() {
    // axios
    //   .get(/api/help_requests)
    //   .then(response => {
    //     this.help_requests = response.data;

    //   })
  },
  methods: {
    handRaised() {

    }
  }
};
</script>