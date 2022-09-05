<template>
  <section class="intro">
    <div class="bg-image h-100" style="background-color: #f5f7fa">
      <div class="mask d-flex align-items-center h-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="card">
                <div class="card-body p-0">
                  <div
                    class="table-responsive table-scroll"
                    data-mdb-perfect-scrollbar="true"
                    style="position: relative; height: 700px"
                  >
                    <table class="table table-striped mb-0">
                      <thead style="background-color: #002d72">
                        <tr>
                          <th scope="col">Item</th>
                          <th scope="col">Model</th>
                          <th scope="col">Price</th>

                          <th scope="col">Best use</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody
                        v-for="shopingcart in shopingcart"
                        v-bind:key="shopingcart.Auth"
                      >
                        <tr v-if="shopingcart.Auth == this.auth">
                          <td>{{ shopingcart.Proizvod }}</td>
                          <td>{{ shopingcart.ProizvodModel }}</td>
                          <td>{{ shopingcart.Cijena }}$</td>

                          <td>{{ shopingcart.NajboljaUporaba }}</td>
                          <td>
                            <button
                              class="btn btn-primary btn-lg active"
                              @click="deleteItems(shopingcart.id)"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div align="right">
                <a
                  href="payment"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                  >Purchase</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ShopingCart, Auth } from "/service";

export default {
  data() {
    return {
      shopingcart: {},
      auth: Auth.getUser().username,
    };
  },

  created() {
    this.pozovibackendshopingcart();
  },

  methods: {
    async pozovibackendshopingcart(term) {
      this.shopingcart = await ShopingCart.getAll(term);
    },
    async deleteItems(id) {
      await ShopingCart.deleteitems(id);
      this.pozovibackendshopingcart();
    },
  },
};
</script>

<style>
.netko {
  margin-top: 15px;
  margin-bottom: 15px;
}
.intro {
  height: 100%;
}

table td,
table th {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

thead th {
  color: #fff;
}

.card {
  border-radius: 0.5rem;
}

.table-scroll {
  border-radius: 0.5rem;
}

.table-scroll table thead th {
  font-size: 1.25rem;
}
thead {
  top: 0;
  position: sticky;
}
.odmakni {
  margin-right: 40px;
  margin-bottom: 20px;
}
</style>
