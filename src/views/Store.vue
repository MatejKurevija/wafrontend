<template>
  <div class="about">
    <div align="center">
      <h1>Welcome to the store!</h1>
      <div>
        <div v-for="proizvodi in proizvodi" v-bind:key="proizvodi.id">
          <div class="nesto" style="width: 18rem">
            <img class="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Product: {{ proizvodi.Proizvod }}</h5>
              <p class="card-text">
                Model: <small>{{ proizvodi.ProizvodModel }}</small>
              </p>
              <p class="card-text">
                Price: <small>{{ proizvodi.Cijena }}$</small>
              </p>

              <p class="card-text">
                <small class="text-muted"
                  >Description: {{ proizvodi.Opis }}</small
                >
              </p>
              <p class="card-text">
                <small class="text-muted"
                  >Best use: {{ proizvodi.NajboljaUporaba }}</small
                >
              </p>

              <button
                class="px-5 btn btn-sm btn-primary"
                @click="AddToShopingCart()"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Proizvodi, ShopingCart, Auth } from "/service";

export default {
  data() {
    return {
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
    async AddToShopingCart(odabraniProizvod) {
      console.log(this.proizvodi);
      const proizvodiKojiSuVecUKosarici = this.ShopingCart.find(
        (shopingcart) => proizvodi.id === ShopingCart.id
      );
      if (!!shopingcart) return;
      const proizvodZaDodavanje = this.proizvodi.find(
        (proizvodi) => this.proizvodi === proizvodi.id
      );
      this.Cart = {
        Auth: this.auth,
        Proizvod: pro.Proizvod,
        ProizvodModel: pro.ProizvodModel,
        Cijena: pro.Cijena,
        Opis: pro.Opis,
        NajboljaUporaba: pro.NajboljaUporaba,
      };
      let newlist = await ShopingCart.add(this.Cart);
      console.log("Spremljen u Shoping Cart", newlist.data);
      this.feedback = "Added to Shoping cart";
    },
  },
};
</script>

<style >
.nesto {
  width: calc(50% - 100px);
  padding: 15px;
  text-align: center;
  font-size: 15px;
  color: black;
  display: block;
  border: 1px solid black;
  border-radius: 25px;
  margin-left: 25px;
  margin-top: 25px;
}
@media (min-width: 102px) {
  .nesto {
    float: left;
  }
}
</style>
     


     this.proizvodi.forEach((pro) => {
        this.Cart = {
          Auth: this.auth,
          Proizvod: pro.Proizvod,
          ProizvodModel: pro.ProizvodModel,
          Cijena: pro.Cijena,
          Opis: pro.Opis,
          NajboljaUporaba: pro.NajboljaUporaba,
        };
      });
      if (this.Cart.Proizvod == this.Cart.id) {
        let newlist = await ShopingCart.add(this.Cart);
        console.log("Spremljen u Shoping Cart", newlist.data);
        this.feedback = "Added to Shoping cart";
      }