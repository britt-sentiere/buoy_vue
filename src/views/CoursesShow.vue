<template>
  <div class="courses-show pb-5">
    

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Help Requests: </h1>
        <!-- <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> -->
      </div>
    </div>

    <button v-for="participation in course.participations" v-on:click="completeRequest(participation.student.open_help_request.id)" class="btn btn-secondary btn-lg block m-2" >{{ participation.student.first_name }} {{ participation.student.last_name}} - {{ participation.student.open_help_request.formatted.created_at }}</button>

    <!-- {{ course.participations }} -->
  </div>
</template>

<style>
.courses-show {
  text-align: center;
}

</style>

<script>
import ActionCable from "actioncable";
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      student: {},
      course: {
        participations: []
          }
  
    };
  },
  created: function() {
    axios 
      .get("/api/courses/" + this.$route.params.id)
      .then(response => {
        this.course = response.data;
      });
      var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
      cable.subscriptions.create("HelpRequestsChannel", {
        connected: () => {
          // Called when the subscription is ready for use on the server
          console.log("Connected to HelpRequestsChannel");
        },
        disconnected: () => {
          // Called when the subscription has been terminated by the server
        },
        received: data => {
          // Called when there's incoming data on the websocket for this channel
          console.log("Data from HelpRequestsChannel:", data);
          this.course.participations.push(data); // update the messages in real time
        }
      });
  },

  methods: {
    completeRequest: function(requestId) {
      axios
        .patch("/api/help_requests/" + requestId + "/complete")
        .then(response => {
          console.log("Help Request completed");
          this.course = response.data;
        });
    }
    }
  };
</script>