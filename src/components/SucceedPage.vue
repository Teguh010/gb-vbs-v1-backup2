<template>
  <div class="succeed-page">
    <q-header v-if="$q.screen.xs" class="bg-transparent text-dark">
        <q-toolbar class="q-py-sm cb-toolbar-mobile">
          <q-toolbar-title class="q-ml-xs">
            <q-btn flat round icon="chevron_left" label="back" to="/" />
          </q-toolbar-title>
          <q-space />
        </q-toolbar>
      </q-header>
    <div class="header-description q-py-lg">
      Booking success! <br />
      Your ride is coming to you on 13 Feb 2022. <br />
      Please check email inbox and SMS for confirmation.
    </div>
    <div class="succeed-image text-center">
      <q-img src="~assets/images/succeed-page.svg" :width="$q.screen.xs? '85%' : '55%'" />
    </div>
    <div class="succeed-action-container">
      <div class="succeed-action">
        <div class="q-py-lg q-gutter-y-md text-center">
          <div class="text-center">
            <q-btn
              to="/"
              flat
              class="succeed-button-action1 text-white q-px-xl text-capitalize"
              label="Rent another ride"
              borderless
            />
          </div>
          <div class="text-center">
            <q-btn
              to="/"
              flat
              class="succeed-button-action2 text-dark q-px-xl text-capitalize"
              label="Back to homepage"
              borderless
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.succeed-button-action1 {
  background: #248271;
  border-radius: 50px;
  border: 3px solid #248271;
}
.succeed-button-action2 {
  border-radius: 50px;
  border: 3px solid #248271;
  box-sizing: border-box;
  border-radius: 50px;
}
.header-description {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  /* or 146% */
  text-align: center;
  letter-spacing: -0.005em;

  color: #248271;
}
@media only screen and (max-width: 600px) {
  .header-description {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    /* or 146% */
    text-align: center;
    letter-spacing: -0.005em;

    color: #248271;
    padding: 30px 10px;
  }
  .succeed-action-container {
    padding-top: 20%;
  }
}
</style>
