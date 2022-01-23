<template>
  <div>
    <div style="height: calc(100% - 150px); border-right: 1px solid #ddd">
      <div class="text-center" v-if="!confirmDetail">
        <div
          class="bg-accent sidebar-top-image-container"
        >
          <div class="bg-transparent">
            <q-btn
              @click="closeSidebar"
              flat
              icon="arrow_back"
              class="sidebar-top-image-back text-dark"
            />
            <img width="50%" src="~assets/images/hero-car1.svg" class="q-pt-lg" />
          </div>
        </div>
      </div>
      <div class="drawer-content-container q-py-lg" :style="$q.screen.xs ? 'width: 100vw' : ''">
        <div v-if="!confirmDetail" class="dawer-input-form-content">
          <div class="drawer-content">
            <div class="top-list flex">
              <div class="main-title sidebar-title">
                Car brand car model car type
              </div>
              <div class="sidebar-side flex items-center" :class="$q.screen.xs? 'q-pl-0 q-pt-md' : 'q-pl-md'">
                <div class="label-timeslot">Next slot:</div>
                <div class="sidebar-timeslot-side q-ml-md q-pa-xs">
                  <div class="sidebar-label-timeslot">
                    25-11-2021 (Today) | 16:50
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="drawer-card-currency-container">
            <span class="drawer-card-currency"> $ </span>
            <span class="drawer-card-price"> 150 </span>
            <span class="drawer-card-price-description"> per day </span>
          </div>
          <div class="feature-section q-pt-md">
            <div class="feature-title">Features</div>
            <div class="feature-items flex q-gutter-x-md">
              <div class="feature-item flex items-center q-pt-sm">
                <div class="feature-icon">
                  <q-img src="~assets/images/person.svg" width="18px" />
                </div>
                <div class="feature-description q-pt-xs">4 passengers</div>
              </div>
              <div class="feature-item flex items-center q-pt-sm">
                <div class="feature-icon">
                  <q-img src="~assets/images/briefcase.svg" width="18px" />
                  <!-- <q-icon name='img:~/assets/images/briefcase.svg' style="font-size: 30px;" width="20px" /> -->
                </div>
                <div class="feature-description q-pt-xs">2 luggages</div>
              </div>
              <div class="feature-item flex items-center q-pt-sm">
                <div class="feature-icon">
                  <q-img src="~assets/images/foot.svg" width="18px" />
                </div>
                <div class="feature-description q-pt-xs">Pet friendly</div>
              </div>
            </div>
          </div>
          <div class="feature-section q-pt-lg">
            <div class="feature-title">Description</div>
            <div class="sidebar-description q-pt-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              blandit consectetur ipsum urna dignissim pharetra. Quam mattis
              faucibus viverra varius sed erat interdum eu. Neque sed nulla arcu
              vel nunc turpis consequat consectetur arcu. Nunc, sagittis tortor
              ullamcorper vitae dolor risus. Nulla mauris arcu feugiat elit. At
              ultrices lectus viverra consequat, odio congue arcu proin.
            </div>
          </div>
          <div class="q-py-lg sidebar-separator">
            <q-separator />
          </div>
          <div class="calendar-section">
            <div class="step-container flex items-center">
              <div>
                <q-btn round flat class="step-number" dense label="1" />
              </div>
              <div class="step-label q-pl-md">Pick Your Timeslot</div>
            </div>
            <div class="row">
              <div class="col-lg-7 col-sm-12">
                <q-date
                  flat
                  color="primary"
                  v-model="date"
                  :options="optionsFn"
                  minimal
                />
              </div>
              <div class="col">
                 <div v-if="$q.screen.xs" class="sidebar-separator">
                <q-separator />
              </div>
                <div
                  class="side-timeslot-container q-gutter-md flex q-pt-lg"
                >
                  <div class="side-timeslot">
                    <div class="timeslot-inner">
                      <span class="tsp"> 17: 20 </span>
                    </div>
                  </div>
                  <div class="side-timeslot">
                    <div class="timeslot-inner">
                      <span class="tsp"> 17: 20 </span>
                    </div>
                  </div>
                  <div class="side-timeslot">
                    <div class="timeslot-inner">
                      <span class="tsp"> 17: 20 </span>
                    </div>
                  </div>
                  <div class="side-timeslot">
                    <div class="timeslot-inner-active">
                      <span class="tsp-active"> 17: 20 </span>
                    </div>
                  </div>
                  <div class="side-timeslot">
                    <div class="timeslot-inner">
                      <span class="tsp"> 17: 20 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-5 col-sm-12">
                <div class="sidebar-side flex items-center sidebar-timeslot">
                  <div class="label-timeslot-selected">Selected Slots:</div>
                  <div class="sidebar-timeslot-side q-ml-md q-pa-xs">
                    <div class="sidebar-label-timeslot">25-11-2021 | 16:50</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-7">
                <div class="sidebar-side flex items-center sidebar-timeslot">
                  <div class="label-timeslot-selected">
                    (Estimatetd arrival time : 17:15)
                  </div>
                </div>
              </div>
            </div>
            <div class="step-container flex items-center q-pt-lg">
              <div>
                <q-btn round flat class="step-number" dense label="2" />
              </div>
              <div class="step-label q-pl-md">Your Destination</div>
            </div>
            <div class="row q-pt-lg q-pl-sm">
              <div class="col-2">
                <div class="label-timeslot">To</div>
                <!-- <div class="label-timeslot q-pt-sm">From</div> -->
              </div>
              <div class="col">
                <div class="destination-container flex items-center">
                  <div >
                    <span class="label-timeslot">Street name, District name, Kowloon</span>
                  <span class="change-action">(Change)</span>
                  </div>
                  <!-- <div class="change-action">(Change)</div> -->
                </div>
              </div>
            </div>
             <div class="row q-pt-sm q-pl-sm">
              <div class="col-2">
                <div class="label-timeslot">From</div>
                <!-- <div class="label-timeslot q-pt-sm">From</div> -->
              </div>
              <div class="col">
                <div class="destination-container flex items-center">
                  <div >
                    <span class="label-timeslot">15 Street name, District name, Hong Kong Line 2</span>
                  <span class="change-action">(Change)</span>
                  </div>
                  <!-- <div class="change-action">(Change)</div> -->
                </div>
              </div>
            </div>
            <div class="step-container flex items-center q-pt-lg">
              <div>
                <q-btn round flat class="step-number" dense label="3" />
              </div>
              <div class="step-label q-pl-md">Input Your Information</div>
            </div>
            <div class="row q-pt-lg q-pl-md">
              <div  :class="$q.screen.xs ? 'col-sm-12 q-pl-0 q-pt-md' : 'col-lg-6'">
                <div class="sidebar-form-input row">
                  <div class="col">
                    <div class="label-timeslot">No. of passenger(s)*</div>
                  </div>
                  <div class="col">
                    <div class="q-pl-md">
                      <q-input
                        v-model="inputSidebar"
                        borderless
                        class="sidbar-form-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="sidebar-form-input row q-pt-md">
                  <div class="col">
                    <div class="label-timeslot">No. of luggage(s)*</div>
                  </div>
                  <div class="col">
                    <div class="q-pl-md">
                      <q-input
                        v-model="inputSidebar"
                        borderless
                        class="sidbar-form-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="sidebar-form-input row q-pt-md">
                  <div class="col">
                    <div class="label-timeslot">Airline name</div>
                  </div>
                  <div class="col">
                    <div class="q-pl-md">
                      <q-input
                        v-model="inputSidebar"
                        borderless
                        class="sidbar-form-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div  :class="$q.screen.xs ? 'col-sm-12 q-pl-0 q-pt-md' : 'col-lg-6 q-pl-lg'">
                <div class="sidebar-form-input row">
                  <div class="col">
                    <div class="label-timeslot">Flight no <span v-if="$q.screen.xs">&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</span> </div>
                  </div>
                  <div class="col">
                    <div class="q-pl-md">
                      <q-input
                        v-model="inputSidebar"
                        borderless
                        class="sidbar-form-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="sidebar-form-input row q-pt-md">
                  <div class="col">
                    <div class="label-timeslot">Flight departure</div>
                  </div>
                  <div class="col">
                    <div class="q-pl-md">
                      <q-input
                        v-model="inputSidebar"
                        borderless
                        class="sidbar-form-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="sidebar-form-input row q-pt-md">
                  <div class="col">
                    <div class="label-timeslot">Flight arrival</div>
                  </div>
                  <div class="col">
                    <div class="q-pl-md">
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
            <div class="q-pt-lg q-pl-md">
              <div class="special-remarks-container">
                <div class="label-timeslot">Special Remarks</div>
                <div class="q-pt-md">
                  <q-input
                    v-model="text"
                    class="bg-grey-3 q-pa-md sidebar-text-area"
                    type="textarea"
                    borderless
                  />
                </div>
              </div>
              <div class="q-pt-lg">
                <div class="textfields-bottom q-pt-xs">
                  (Fields marked with a * is required.)
                </div>
              </div>
              <div class="q-pt-lg text-center">
                <q-btn
                  @click="setConfirmDetail"
                  flat
                  class="bg-dark main-button text-white"
                  label="Rent Your Ride"
                  borderless
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="confirmDetail" class="drawer-payment-content">
          <div class="input-payment-container">
            <div class="back-button">
              <q-icon
                name="chevron_left"
                style="font-size: 25px"
                @click="confirmDetail = false"
              />
              Back
            </div>
            <div class="main-title sidebar-title q-py-lg">
              One more step to finish booking...
            </div>
            <div class="step-container flex items-center q-py-lg">
              <div>
                <q-btn round flat class="step-number" dense label="4" />
              </div>
              <div class="step-label q-pl-md">Confirm information</div>
            </div>
            <div class="col">
              <div class="sidebar-form-input row">
                <div class="col-4">
                  <div class="label-payment">Car</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">Car Title</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-md">
                <div class="col-4">
                  <div class="label-payment">Time slot</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">02 - 12 - 2021 | 12:00</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-md">
                <div class="col-4">
                  <div class="label-payment">To</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">
                      Street name, District name, Kowloon
                    </div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-md">
                <div class="col-4">
                  <div class="label-payment">To</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">
                      Street name, District name, Kowloon
                    </div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-md">
                <div class="col-4">
                  <div class="label-payment">From</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">
                      15 Street name, District name, Hong Kong
                    </div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">Name</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">Firstname Lastname</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">Phone contact</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">+852 9876 5432</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">Email</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">samplemail@mail.com</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">No. of passenger(s)</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">5</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">No. of luggage(s)</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">2</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">Airline name</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">--</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">Flight no.</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">--</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">Flight departure</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">--</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">Flight arrival</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">--</div>
                  </div>
                </div>
              </div>
              <div class="sidebar-form-input row q-pt-lg">
                <div class="col-4">
                  <div class="label-payment">Special remarks</div>
                </div>
                <div class="col">
                  <div class="q-pl-md">
                    <div class="sublabel-payment">--</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="q-pt-lg">
              <q-separator />
            </div>
            <div class="step-container flex items-center q-py-lg">
              <div>
                <q-btn round flat class="step-number" dense label="5" />
              </div>
              <div class="step-label q-pl-md">Pay With</div>
            </div>
            <div class="payment-tab-container">
              <PaymentTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentTab from 'components/PaymentTab.vue'
export default {
  components: { PaymentTab },
  data () {
    return {
      date: '2019/02/01',
      inputSidebar: '',
      text: '',
      confirmDetail: false
    }
  },
  methods: {
    optionsFn (date) {
      return date >= '2019/02/03' && date <= '2019/02/15'
    },
    setConfirmDetail () {
      this.confirmDetail = true
    },
    closeSidebar () {
      // alert('hai')
      this.$emit('closeSidebar', false)
    }
  }
}
</script>

<style lang="scss">
.label-timeslot {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #575757;
  opacity: 0.5;
}
.label-timeslot-selected {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #575757;
}
.sidebar-label-timeslot {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #575757;
  opacity: 0.5;
}
.sidebar-timeslot-side {
  background: #f2f2f2;
  border-radius: 3px;
}
.drawer-card-currency {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #248271;
}
.drawer-card-price {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: #248271;
}
.drawer-card-price-description {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #575757;
  opacity: 0.5;
}
.feature-title {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  color: #575757;

  opacity: 0.8;
}
.feature-item {
  opacity: 0.5;
}
.feature-description {
  padding-left: 12px;
}
.sidebar-description {
  color: #575757;
  opacity: 0.5;
}
.drawer-content-container {
  padding-left: 8%;
  padding-right: 8%;
}
.step-number {
  border: 2.5px solid #248271;
  color: #248271;
  // font-size: 20px;
}
.step-label {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #248271;
}
.q-date__content .q-btn {
  font-weight: bold;
  color: #575757;
  opacity: 0.8;
  font-size: 20px !important;
}
.q-date {
  display: inline-flex;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
  border-radius: 4px;
  background: #fff;
  width: 100%;
  min-width: 290px;
  max-width: 100%;
}
.q-date__calendar-item--out {
  opacity: 0.18;
  font-size: 20px;
}
.q-date__calendar-weekdays > div {
  opacity: 0.38;
  font-size: 18px;
}
.q-date__calendar-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 14.285% !important;
  height: 12.5% !important;
  position: relative;
  padding: 12px 1px;
}
.timeslot-inner {
  background: rgba(87, 87, 87, 0.3);
  border-radius: 3px;
  padding: 2px 8px;
}
.timeslot-inner-active {
  background: #575757;
  border-radius: 3px;
  padding: 2px 8px;
}
.tsp {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #248271;
  opacity: 0.8;
}
.tsp-active {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: white;
}
.q-btn--dense .q-btn__container {
  padding: 0.285em;
  min-height: 1em;
}
.change-action {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  text-decoration-line: underline;
  color: #248271;
  padding-left: 10px;
}
.sidbar-form-input {
  background: rgba(87, 87, 87, 0.05);
  border: 1px solid rgba(87, 87, 87, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  height: 30px !important;
  .q-field__control {
    color: #248271;
    color: var(--q-color-primary);
    height: 30px;
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
  }
}
.sidebar-text-area {
  background: rgba(87, 87, 87, 0.05);
  border: 1px solid rgba(87, 87, 87, 0.1);
  border-radius: 5px;
}
.textfields-bottom {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #575757;
  opacity: 0.5;
}
.back-button {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #248271;
}
.sublabel-payment {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #575757;
  opacity: 0.8;
}
.label-payment {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #575757;
}
.sidebar-top-image-container {
  position: relative;
  height: 300px;
}
.sidebar-top-image-back {
  position: absolute;
  left: 0px;
  top: 15px;
}
.side-timeslot-container {
  padding-left: 20px;
}
.sidebar-timeslot {
  padding-left: 20px;
}

@media only screen and (max-width: 600px) {
  .q-date {
    display: inline-flex;
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
      0 3px 1px -2px rgb(0 0 0 / 12%);
    border-radius: 4px;
    background: #fff;
    width: 100%;
    min-width: 100px;
    max-width: 100%;
  }
  .q-date__calendar-item--out {
    opacity: 0.18;
    font-size: 16px;
  }
  .q-date__calendar-weekdays > div {
    opacity: 0.38;
    font-size: 14px;
  }
  .q-date__calendar-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 14% !important;
    height: 10.5% !important;
    position: relative;
    padding: 5px 1px;
  }
  .q-date__content .q-btn {
    font-weight: bold;
    color: #575757;
    opacity: 0.8;
    font-size: 16px !important;
  }
  .sidebar-separator {
    margin-left: -30px;
    margin-right: -30px;
  }
  .side-timeslot-container {
  padding-left: 0px;
}
.sidebar-timeslot {
  padding-top: 20px;
  padding-left: 0px;
}
.label-timeslot {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #575757;
  opacity: 0.5;
}
.sidebar-top-image-container {
  position: relative;
  height: 180px;
}
.change-action {
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  text-decoration-line: underline;
  color: #248271;
  padding-left: 10px;
}
.sidebar-title {
  line-height: 30px !important;
}
}
</style>
