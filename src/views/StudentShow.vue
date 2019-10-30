
<template>
  <div class="student show">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      courseName: [],
      teacherId: [],
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {
  }
};
</script>


<!-- contacts.map((contact) => {
   this.selectedContacts.push(contact.id);
}); -->

<!-- Students name
classes: name/teacher
classes: name/teacher
classes: name/teacher
classes: name/teacher

type: 'Student'

find these by looping through participations for student -->