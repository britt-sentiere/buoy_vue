<!-- <template>
  <div class="courses-index">
    <h1>Welcome back, {{ teacher.first_name }} !</h1>

     <div class="container">

       <div v-for="participation in teacher.participations ">
        

          <router-link class="btn btn-success" v-bind:to="'/participations/' + participation.id">{{ participation.course.course_name}} / {{ participation.course.teacher.last_name}}</router-link>

          
           <br>
       </div>
     </div>
  </div>
</template>

<style>
</style>

<script>
  import axios from "axios";

export default {
  data: function() {
    return {
      
      student: {
        participations: []
      }
    };
  },
  created: function() {
    axios
      .get("/api/teachers/" + this.$route.params.id)
      .then(response => {
        this.student = response.data;
      });
  },
  methods: {}
};
</script> -->