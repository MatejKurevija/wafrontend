<template>
  <div class="about">
    <div align="center">
      <h1>Welcome to the store!</h1>

      <div
        class="nesto"
        style="width: 18rem"
        v-for="proizvodi in proizvodi"
        v-bind:key="proizvodi.Proizvodi"
      >
        <img class="popravi" :src="proizvodi.imgURL" alt="Card image cap" />
        <h5 class="card-title">Product: {{ proizvodi.Proizvod }}</h5>
        <p class="card-text">
          Model: <small>{{ proizvodi.ProizvodModel }}</small>
        </p>
        <p class="card-text">
          Price: <small>{{ proizvodi.Cijena }}$</small>
        </p>

        <p class="card-text">
          <small class="text-muted">Description: {{ proizvodi.Opis }}</small>
        </p>
        <p class="card-text">
          <small class="text-muted"
            >Best use: {{ proizvodi.NajboljaUporaba }}</small
          >
        </p>

        <button
          class="px-5 btn btn-sm btn-primary"
          @click="AddToShopingCart(proizvodi)"
          :value="proizvodi.id"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { Proizvodi, ShopingCart, Auth } from "/service";

export default {
  data() {
    return {
      id: this.$route.params.id,
      proizvodi: {},
      Cart: {},
      auth: Auth.getUser().username,
      ShopingCart: {},
    };
  },

  created() {
    this.pozovibackendproizvodi();
    this.pozovibackendshopingcart();
  },

  methods: {
    async pozovibackendproizvodi(term) {
      this.proizvodi = await Proizvodi.getAll(term);
    },

    async pozovibackendshopingcart(term) {
      this.shopingcart = await ShopingCart.getAll(term);
    },
    async AddToShopingCart(pro) {
      this.Cart = {
        Auth: this.auth,
        Proizvod: pro.Proizvod,
        ProizvodModel: pro.ProizvodModel,
        Cijena: pro.Cijena,
        Opis: pro.Opis,
        NajboljaUporaba: pro.NajboljaUporaba,
      };
      await ShopingCart.add(this.Cart);
      alert("Added to Shoping cart");
    },
  },
};
</script>

<style >
.nesto {
  padding: 15px;
  text-align: center;
  font-size: 15px;
  color: black;
  display: block;
  border: 1px solid black;
  border-radius: 25px;
  margin-left: 25px;
  float: left;
  margin-bottom: 15px;
}
.popravi {
  margin-top: 10px;

  height: 200px;
  width: 200px;
}
</style>
     


