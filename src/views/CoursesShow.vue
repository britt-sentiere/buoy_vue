<template>
  <div class="courses-show">
    <h1>Help Requests: </h1>

   <!--  <ul>
      <li v-for="help_request in participation.help_requests" v-bind:class="{'open-request': !help_request.completed_time, 'closed-request': help_request.completed_time }">{{ help_request.created_at }}></li>
    </ul> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      students: {
        participation: {
          help_requests: []
        }
      }
    };
  },
  created: function() {
    axios 
      .get("/api/courses/" + this.$route.params.id)
      .then(response => {
        this.course = response.data;
      });
  },
  methods: {}
};
</script>