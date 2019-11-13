<template>
  <div class="participations-show">
    <div class="spacer"></div>
    <div class="row mt-2">
      <div class="col-lg-4 offset-lg-2">
        <div class="help-request-button">
          <div class="text-center mb-4">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">{{ participation.student.first_name }} {{ participation.student.last_name }}</h1>
                <br>
                <br>
                <p class="lead">Course: {{ participation.course.course_name}}</p>
                <br>
                <p>Instructor: {{ participation.course.teacher.last_name}}, {{ participation.course.teacher.first_name}}</p>
              </div>
            </div>
            <!-- <h1>{{ participation.student.first_name }} {{ participation.student.last_name }}</h1> -->
          </div>
          <div class="d-flex justify-content-center">
            <button v-on:click="handRaised()" class="btn btn-secondary btn-lg btn-block ">Hand Raised</button>
          </div>
        </div>
        
      </div>
      <div class="col-lg-3 offset-lg-1 timestamps-scroll">
        <ul>
          <li class="text-center timestamp-item" v-for="help_request in participation.help_requests" v-bind:class="{'open-request': !help_request.completed_time, 'closed-request': help_request.completed_time }">{{ help_request.formatted.created_at }}</li>
        </ul>
      </div>
    </div>


    <div class="row mt-4 mb-4">
      
    </div>
      

  </div>
</template>

<style>

.help-request-button {
  margin-top: 80px;
}

.spacer {
  height: 5px;
  background-color: #009688;
}

.timestamps-scroll {
  height: 400px;
  overflow: scroll;
  padding: 0px;
  margin-top: 80px;
  border: 2px solid black; 
  border-radius: 10px;
}

.timestamp-item {
  border: 1px solid black;
  padding: 4px;
  font-size: 22px;
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
    border-radius: 20px;
    width: 80%;
  }

.col-lg-3 {

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