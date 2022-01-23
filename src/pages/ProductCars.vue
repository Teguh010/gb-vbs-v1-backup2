<template>
  <q-card class="my-card">
    <div class="flex justify-center q-pt-md">
      <q-img width="200px" src="~assets/images/hero-car1.svg" />
    </div>
    <q-card-section style="padding: 5px 16px !important">
      <div class="row no-wrap items-center">
        <div class="col card-title ellipsis">Minivan (8-seater)</div>
      </div>
    </q-card-section>

    <q-card-section style="padding: 5px 16px !important">
      <div class="row">
        <div class="col card-currency-container">
          <span class="card-currency"> $ </span>
          <span class="card-price"> 150 </span>
          <span class="card-price-description"> per hour </span>
        </div>
        <div class="col text-right">
          <q-btn
            rounded
            dense
            class="card-action-btn"
            icon="arrow_forward"
            flat
          />
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <div class="card-actions-container flex">
        <div class="card-action q-px-sm q-py-xs q-ma-xs bg-grey-3 text-dark">16:50</div>
        <div class="card-action q-px-sm q-py-xs q-ma-xs bg-grey-3 text-dark">17:50</div>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {}
</script>

<style lang="scss">
.my-card {
  width: 100%;
  max-width: 300px;
  box-shadow: none !important;
  background: #fcfcfc;
  border-radius: 5px;
}
.card-title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #575757;
}
.card-currency {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #248271;
}
.card-price {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #248271;
}
.card-price-description {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #575757;
  opacity: 0.5;
}
.card-action-btn {
  border: 2px solid #ffb800;
  color: #ffb800;
  font-size: 10px;
}
.card-action {
  border-radius: 4px;
}
</style>
