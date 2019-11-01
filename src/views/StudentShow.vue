<template>
  <div class="student-show">
    <h1>{{ message }}</h1>
    <h2> {{ student.id }}</h2>
    <h2> {{ student.first_name }}</h2>

     <div class="container">

       <div v-for="participation in student.participations ">
        

          <router-link class="btn btn-success" v-bind:to="'/participations/' + participation.id">{{ participation.course.course_name}} / {{ participation.course.teacher.first_name}}</router-link>

          
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
      },
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {
    axios
      .get("/api/students/" + this.$route.params.id)
      .then(response => {
        this.student = response.data;
      });

    // axios
    //   .get("/api/participations")
    //   .then(response => {
    //     this.participations === response.data
    //   });
  },
  methods: {}
};
</script>





<!-- <template>
  <div class="student">
    <h1>{{ message }}</h1>

    <h2> {{ studentId }}</h2>
    <h2> {{ studentFirstName }}</h2>

    <div class="container">
      
      <form v-on:getCourses.prevent="getCourses()">
      
      <div v-for="course in participations ">
          <p>{{ course.course_id }}</p>
          
          <input type="submit" class="btn btn-primary" value=course.course_id>
      </div>

      <input type="submit" class="btn btn-primary" value="Refresh">
      </form>
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
      message: "Welcome back,"
      participations: {},
      studentId: localStorage.getItem("userId"),
      studentFirstName: localStorage.getItem("userFirstName"),
      studentLastName: localStorage.getItem("userLastName")
        };
      },
      created: function() 
      {
        var params = 
        {
          student_id: localStorage.getItem("userId")
        }
        axios
          .get("api/participations/", + this.$route.params.id)
          .then(response => 
          {
            this.participations = response.data;
          })

      },
      methods: 
      { 
        getCourses: function() 
        {
        
          
        }
      }
     
    };

</script> -->

    <!-- import axios from "axios";
    export default {
      data: function() {
        return {
          participations: {},
          studentId: localStorage.getItem("userId"),
          studentFirstName: localStorage.getItem("userFirstName"),
          studentLastName: localStorage.getItem("userLastName")
          message: `Welcome back, ${localStorage.getItem("userFirstName")} ${localStorage.getItem("userLastName")}`
          message: "Welcome to Vue.js!"


        };
      },
      created: function() 
      {
        var params = 
        {
          student_id: localStorage.getItem("userId")
        }
        axios
          .get("api/participations/", + this.$route.params.id)
          .then(response => 
          {
            this.participations = response.data;
          })

      },
      methods: 
      { 
        getCourses: function() 
        {
        
          
        }
      }
     
    }; --> <!-- </script>  -->




    <!-- contacts.map((contact) => {
       this.selectedContacts.push(contact.id);
    });

    Students name
    classes: name/teacher
    classes: name/teacher
    classes: name/teacher
    classes: name/teacher

    type: 'Student'

    find these by looping through participations for student -->




            <!-- <template>
              <div class="products-new">
                <div class="container">
                  
                  <h1>Enrolled Courses</h1>

                  <form v-on:getCourses.prevent="getCourses()">
                  
                  <div v-for="course in participations ">
                      <p>{{ course.course_id }}</p>
                      
                      <input type="submit" class="btn btn-primary" value=course.course_id>
                  </div>

                  <input type="submit" class="btn btn-primary" value="Refresh">
                  </form>

                </div>

                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>

                  <form v-on:submit.prevent="submit()">
                  <div>
                     Teacher ID: <input type="text" v-model="teacherId">
                    
                   </div>

                   <div>
                     Course Name: <input type="text" v-model="courseName">
                   </div>   

                </form>
              </div>
            </template>

            <script>
              var axios = require("axios");


              export default {
                data: function() {
                  return {
                    participations: {},
                    courses: [],
                    errors: [],
                    teacherId: "",
                    courseName: "",
                    currentStudent: {}

                  };
                },
                created: function() {},
                methods: {
                  getCourses: function() {

                  },

                  submit: function() {
                    var clientParams = {
                      teacher_id: this.teacherName,
                      course_name: this.courseName,
                    };
                    axios
                      .get("/api/participations", params)
                      .then(response => {
                        this.participations = response.data;
                      })
                      .catch(error => {
                        this.errors = error.response.data.errors;
                      });
                  }
                }
              };
              </script>
            </script> -->