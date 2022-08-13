<template>
  <div class="login">
    <h1 align="center">Log in for moderators</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputId">Id</label>
              <input
                type="Id"
                class="form-control"
                v-model="Id"
                id="exampleInputId"
                aria-describedby="IdHelp"
                placeholder="Enter Id"
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
              <button type="button" align="center" class="btn btn-primary">
                Log in
              </button>
            </div>
          </form>
        </div>

        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<style>
.odmakni {
  margin-top: 25px;
}
</style>