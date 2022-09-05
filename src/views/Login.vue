<template>
  <div class="login">
    <h1 align="center">Log in</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputId">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="username"
                id="exampleInputEmail"
                aria-describedby="EmailHelp"
                placeholder="Enter your email"
              />
            </div>
            <div class="form group">
              <label for="exampleInputPassword">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                id="exampleInputPassword"
                placeholder="Password"
              />
            </div>
            <div align="center" class="odmakni">
              <button
                type="button"
                align="center"
                @click="login()"
                class="btn btn-primary"
              >
                Log in
              </button>
            </div>
          </form>
          <div class="text" align="center">
            <p>
              Dont have an account?<a href="/Registracija"> Sign up TODAY!</a>
            </p>
          </div>
        </div>

        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "/service";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async login() {
      if (
        this.username === "" ||
        this.username === null ||
        this.username.value === 0
      ) {
        alert("Unesite Vaš e-mail!");
        return;
      } else if (this.password === "" || this.password === null) {
        alert("Unesite Vašu lozinku!");
        return;
      }
      try {
        let success = await Auth.login(this.username, this.password);
        console.log("Rezultat prijave: ", success);
        if (success == true) {
          this.$router.replace({ name: "Store" });
          setTimeout(() => {
            document.location.reload();
          }, 50);
        } else {
          alert("Pogrešni podaci uneseni.");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  },
};
</script>


<style>
.odmakni {
  margin-top: 25px;
}
</style>
