<template>
  <div class="payment-tab">
    <q-card flat>
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="transparent"
        align="justify"
        :vertical="$q.screen.xs ? true : false"
        narrow-indicator
      >
        <q-tab name="creditCard">
          <div class="payment-tab-container">
            <div class="row">
              <div class="col">
                <q-img src="~assets/images/credit-card.svg" width="80px" />
              </div>
              <div class="col payment-tab-label q-pl-sm">Credit Cards</div>
            </div>
          </div>
        </q-tab>
        <q-tab name="aliPay">
          <div class="payment-tab-container">
            <div class="row">
              <div class="col">
                <q-img src="~assets/images/alipay.svg" width="70px" />
              </div>
              <div class="col payment-tab-label q-pl-md">AliPay</div>
            </div>
          </div>
        </q-tab>
        <q-tab name="weChatPay">
          <div class="payment-tab-container">
            <div class="row">
              <div class="col">
                <q-img src="~assets/images/wechat-pay.svg" width="70px" />
              </div>
              <div class="col payment-tab-label q-pl-sm">WeChat Pay</div>
            </div>
          </div>
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="tab-panel-payment" name="creditCard">
          <div class="c-card-input-container">
            <div class="row">
              <div class="col-7">
                <div class="c-card-container flex items-center">
                  <div class="c-card-label">Card Number</div>
                  <div
                    class="c-card-images flex items-center"
                    :class="$q.screen.xs ? 'q-pl-sm' : 'q-pl-md'"
                  >
                    <div class="c-card-image">
                      <q-img
                        src="~assets/images/visa2.png"
                        :width="$q.screen.xs ? '30px' : '40px'"
                      />
                    </div>
                    <div class="c-card-image">
                      <q-img
                        src="~assets/images/master.png"
                        :width="$q.screen.xs ? '45px' : '60px'"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col text-right">
                <div class="c-card-label-power">(Powered by Stripe)</div>
              </div>
            </div>
            <div class="c-card-content-container">
              <div class="c-card-input q-pt-sm">
                <q-input
                  v-model="inputSidebar"
                  borderless
                  class="sidbar-form-input"
                />
              </div>
            </div>
          </div>
          <div class="c-card-input-container q-pt-md">
            <div class="row q-gutter-x-md">
              <div class="col">
                <div class="c-card-content-container">
                  <div class="c-card-label">Expiration date</div>
                  <div class="c-card-input q-pt-sm">
                    <q-input
                      v-model="inputSidebar"
                      borderless
                      class="sidbar-form-input"
                    />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="c-card-content-container">
                  <div class="c-card-label">CCV</div>
                  <div class="c-card-input q-pt-sm">
                    <q-input
                      v-model="inputSidebar"
                      borderless
                      class="sidbar-form-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-card-input-container q-pt-md">
            <div class="c-card-content-container">
              <div class="c-card-label">Name on Card</div>
              <div class="c-card-input q-pt-sm">
                <q-input
                  v-model="inputSidebar"
                  borderless
                  class="sidbar-form-input"
                />
              </div>
            </div>
          </div>
          <div class="row c-card-input-container q-pt-md">
            <div class="col-6 c-card-content-container">
              <div class="c-card-label">Apply Cupon</div>
              <div class="c-card-input q-pt-sm">
                <q-input
                  v-model="inputSidebar"
                  borderless
                  class="sidbar-form-input"
                />
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel class="tab-panel-payment" name="aliPay">
          <div class="c-card-content-container">
            <div class="c-card-label">Expiration date</div>
            <div class="c-card-scan q-pt-sm text-center">
              <q-img src="~assets/images/alipay-hk.png" width="50%" />
            </div>
            <div class="row c-card-input-container q-pt-md">
              <div class="col-6 c-card-content-container">
                <div class="c-card-label">Apply Cupon</div>
                <div class="c-card-input q-pt-sm">
                  <q-input
                    v-model="inputSidebar"
                    borderless
                    class="sidbar-form-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel class="tab-panel-payment" name="weChatPay">
          <div class="c-card-content-container">
            <div class="c-card-label">Expiration date</div>
            <div class="c-card-scan q-pt-sm text-center">
              <q-img src="~assets/images/wechat-pay.png" width="50%" />
            </div>
            <div class="row c-card-input-container q-pt-md">
              <div class="col-6 c-card-content-container">
                <div class="c-card-label">Apply Cupon</div>
                <div class="c-card-input q-pt-sm">
                  <q-input
                    v-model="inputSidebar"
                    borderless
                    class="sidbar-form-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <div class="payment-action">
      <div class="q-pt-lg text-center">
        <q-btn
          to="/succeedPage"
          flat
          class="bg-dark main-button text-white q-px-lg"
          label="Pay HK$150"
          borderless
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'creditCard',
      inputSidebar: ''
    }
  }
}
</script>

<style lang="scss">
.payment-tab {
  .payment-tab-label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #575757;
    text-transform: capitalize;
  }
  .q-tab {
    padding: 0 16px;
    min-height: 64px;
    transition: color 0.3s, background-color 0.3s;
    text-transform: uppercase;
    white-space: nowrap;
    color: inherit;
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 10px;
  }
  .c-card-label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #575757;
  }
   .c-card-label-power {
       font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #575757;
  }
  @media only screen and (max-width: 600px) {
    .tab-panel-payment {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .c-card-label-power {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      color: #575757;
    }
  }
}
</style>
