<template>
  <div class="participations-show">



    <button v-on:click="handRaised()" class="btn btn-secondary btn-lg btn-block mt-5">Hand Raised</button>
    
    <ul>
      <li v-for="help_request in participation.help_requests" v-bind:class="{'open-request': !help_request.completed_time, 'closed-request': help_request.completed_time }">{{ help_request.created_at }}</li>
    </ul>

  </div>
</template>

<style>

.particiations-show {
  text-align: center;
}

.open-request {
  color: #009688;
}

.closed-request {
  background-color: #00BCD4;
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
import ActionCable from "actioncable";
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
    console.log("created");
    axios
      .get("/api/participations/" + this.$route.params.id)
      .then(response => {
        console.log("response");
        this.participation = response.data;
      })
      var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
      cable.subscriptions.create("StudentsChannel", {
        connected: () => {
          // Called when the subscription is ready for use on the server
          console.log("Connected to StudentsChannel");
        },
        disconnected: () => {
          // Called when the subscription has been terminated by the server
        },
        received: data => {
          // Called when there's incoming data on the websocket for this channel
          console.log("Data from StudentsChannel:", data);
          this.participation.help_requests = data; // update the messages in real time
        }
      });
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