<template>
  <div class="courses-show">
    <h1>Help Requests: </h1>

    <button v-for="participation in course.participations" v-on:click="completeRequest(participation.student.open_help_request.id)" class="btn btn-primary btn-lg block m-2" >{{ participation.student.first_name }} {{ participation.student.last_name}} - {{ participation.student.open_help_request.formatted.created_at }}</button>

    <!-- {{ course.participations }} -->
  </div>
</template>

<style>

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

  // var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
  //   cable.subscriptions.create("MessagesChannel", {
  //     connected: () => {
  //       // Called when the subscription is ready for use on the server
  //       console.log("Connected to MessagesChannel");
  //     },
  //     disconnected: () => {
  //       // Called when the subscription has been terminated by the server
  //     },
  //     received: data => {
  //       // Called when there's incoming data on the websocket for this channel
  //       console.log("Data from MessagesChannel:", data);
  //       this.messages.unshift(data); // update the messages in real time
  //     }
  //   });







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