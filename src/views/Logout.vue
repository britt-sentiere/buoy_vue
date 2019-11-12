<template>
  <div class="logout">
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    this.$parent.userType = "";

    localStorage.removeItem("jwt");
    localStorage.removeItem("userType");
    this.$router.push("/login");
  }
};
</script>