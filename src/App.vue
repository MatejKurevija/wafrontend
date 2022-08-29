<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #008bce"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Skale</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Store" v-if="auth.authenticated">Store</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Support">Support</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="ShopingCart" v-if="auth.authenticated"
              >Shoping Cart</a
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="Login" v-if="!auth.authenticated"
              >Log in/Sign up</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="Login"
              v-if="auth.authenticated"
              @click="logout()"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { Auth } from "/service";
export default {
  data() {
    return {
      auth: Auth.state,
    };
  },
  name: "App.vue",
  components: {},
  methods: {
    logout() {
      Auth.logout();
      this.$router.go("Login");
    },
  },
};
</script>

<style>
img {
  float: right;
  margin-right: 25px;
  margin-top: -300px;
}

p {
  clear: right;
}
</style>
