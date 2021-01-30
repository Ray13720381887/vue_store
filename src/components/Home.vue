<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script type="text/babel">
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped></style>
