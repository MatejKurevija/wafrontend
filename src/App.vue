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
            <a class="nav-link" href="Store">Store</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Support">Support</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <div
    class="cart"
    style="z-index: 15; position: fixed; right: 0; top: 0; height: 83px"
  >
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a href="ShopingCart">
          <img
            src="https://www.freeiconspng.com/uploads/shopping-cart-icon-26.jpg"
            width="50"
            height="50"
            class="d-inline-block align-top"
            alt=""
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
img {
  float: right;
  margin-right: 25px;
  margin-top: 80px;
}

p {
  clear: right;
}
</style>
