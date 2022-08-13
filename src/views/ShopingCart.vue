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
                          <th scope="col">Price</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Iphone</td>
                          <td>999.99</td>
                          <td>1</td>
                          <td>999.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <a
                href="#"
                class="btn btn-primary btn-lg active"
                role="button"
                aria-pressed="true"
                >Primary link</a
              >

              <a
                href="#"
                class="btn btn-primary btn-lg active"
                role="button"
                aria-pressed="true"
                >Primary link</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
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