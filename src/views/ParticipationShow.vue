<template>
  <div class="dock">



    <button v-on:click="handRaised()" class="btn btn-primary btn-lg btn-block mt">Hand Raised</button>
    
    <ul>
      <li v-for="help_request in participation.help_requests" v-bind:class="{'open-request': !help_request.completed_time, 'closed-request': help_request.completed_time }">{{ help_request.created_at }}</li>
    </ul>

  </div>
</template>

<style>

.open-request {
  color: teal;
}

.closed-request {
  background-color: green;
}

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
    handRaised: function() {
      console.log("Raised Hand");

      var studentParams = {
        participation_id: this.participation.id
      }
      axios
        .post("/api/help_requests", studentParams)
        .then(response => {
          console.log("success", response.data);
          this.participation.help_requests.push(response.data);
        });

    }
  }
};
</script>