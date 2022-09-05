<template>
  <div class="container"></div>
  <div class="container mt-3">
    <div class="card p-3 text-center">
      <div class="d-flex flex-row justify-content-center mb-3"></div>
      <h4>Support Ticket</h4>
      <div class="row">
        <div class="col-md-6">
          <div class="inputs">
            <label>Name</label>
            <input
              v-model="ime"
              class="form-control"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="inputs">
            <label>Last name</label>
            <input
              class="form-control"
              v-model="prezime"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="inputs">
            <label>Email</label>
            <input
              class="form-control"
              v-model="email"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="about-inputs">
            <label>About</label>
            <textarea
              class="form-control"
              v-model="temaopis"
              type="text"
              placeholder="About your support ticket"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="odmakni">
        <button
          class="px-5 me-4 btn btn-sm btn-primary"
          @click="postNewSupportTicket()"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { support } from "/service";
export default {
  name: "Add",
  data() {
    return {
      ime: "",
      prezime: "",
      temaopis: "",
      email: "",
    };
  },
  methods: {
    async postNewSupportTicket() {
      let noviUnos = {
        ime: this.ime,
        prezime: this.prezime,
        temaopis: this.temaopis,
        email: this.email,
      };
      let newOne = await support.addNewsuppTicket(noviUnos);
      console.log("dodano", newOne.data);
      (this.ime = ""),
        (this.prezime = ""),
        (this.temaopis = ""),
        (this.email = "");
    },
  },
};
</script>


<style scoped>
</style>
