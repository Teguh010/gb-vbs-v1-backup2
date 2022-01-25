/* eslint-disable no-unused-vars */
<template>
  <q-page class="home-page">
    <q-page-container class="main-container">
      <div class="hero-container bg-primary">
        <div class="flex flex-center">
          <div class="homebar-container bg-white">
            <div
              :class="
                $q.screen.xs
                  ? 'homebar q-px-sm q-py-md text-center'
                  : 'homebar q-px-lg q-py-xl text-center'
              "
            >
              <div
                :class="
                  $q.screen.xs
                    ? 'main-title q-pb-0 q-pt-sm'
                    : 'main-title q-pb-md'
                "
              >
                Where are you going?
              </div>
              <div
                :class="
                  $q.screen.xs
                    ? 'homebar-input-container items-center'
                    : 'homebar-input-container row items-center'
                "
              >
                <div class="col homebar-input q-px-md">
                  <div class="q-pr-sm text-bold text-dark">To</div>
                  <div class="homebar-subinput">
                    <q-input
                      class="home-input"
                      v-model="text"
                      placeholder="Address.."
                      borderless
                    />
                  </div>
                </div>
                <div class="col homebar-input q-px-md">
                  <div class="q-pr-sm text-bold text-dark">From</div>
                  <div class="homebar-subinput">
                    <q-input
                      class="home-input"
                      v-model="text"
                      placeholder="Current location"
                      borderless
                    />
                  </div>
                </div>
                <div class="col homebar-input-date q-px-md">
                  <div class="q-pr-sm">
                    <q-icon
                      name="tune"
                      class="text-secondary"
                      style="font-size: 20px"
                    />
                  </div>
                  <div class="homebar-subinput">
                    <q-input
                      class="text-bold home-input"
                      v-model="date"
                      borderless
                    />
                  </div>
                </div>
                <div
                  class="col q-px-md"
                  :style="$q.screen.xs ? 'display:none' : 'display:block'"
                >
                  <q-btn
                    flat
                    class="full-width bg-dark main-button text-white q-py-sm"
                    icon="search"
                    label="Take Me there"
                    borderless
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-text-container q-px-lg q-py-xl">
          <div class="hero-text text-white">
            <div class="hero-h1">brand name</div>
            <div class="hero-h2">Car rental on your fingertips.</div>
            <div class="hero-h3">
              Professional vehicle booking service offered
            </div>
            <div class="hero-h3">
              by our elite driver team. 1000+ vehicles to choose from.
            </div>
          </div>
        </div>
        <div class="row sub-hero">
          <div class="col-5"></div>
          <div class="col-7 text-right">
            <div class="hero-cars-container">
              <div class="hero-cars">
                <img
                  width="200px"
                  src="images/hero-car3.svg"
                  style="margin-bottom: -20px"
                />
                <img width="200px" src="images/hero-car2.svg" />
                <img width="200px" src="images/hero-car1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :style="$q.screen.xs ? 'display:none;' : 'padding: 100px 0 50px 0'">
        <q-separator />
      </div>
      <div class="submain-container">
        <div class="content-container">
          <div class="content">
            <div class="sub-content-title text-primary">
              <span class="content-title"> Best rentals for you </span>
              <span @click="right = !right" class="sub-content-title">
                10 result(s)
              </span>
            </div>
            <div class="card-product-container q-pt-md">
              <div class="card-product q-gutter-md flex">
                <q-card class="my-card" v-for="car in cars" :key="car.id">
                  <q-card-section class="car-card-section" :horizontal="$q.screen.xs ? true : false">
                    <div class="flex justify-center q-pt-md home-image-card">
                      <q-img
                        :width="$q.screen.xs ? '100px' : '200px'"
                        class="car-image"
                        style="background-size: contain"
                        :src="'images/' + car.carImage"
                      />
                    </div>
                    <!-- <q-card-section style="padding: 5px 16px !important">
                      <div class="row no-wrap items-center">
                        <div class="col card-title ellipsis">
                          {{ car.name }}
                        </div>
                      </div>
                    </q-card-section> -->

                    <q-card-section class="subcardsection-car">
                      <div class="row">
                        <div class="col card-title ellipsis">
                          {{ car.name }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-8 card-currency-container">
                          <span class="card-currency"> $ </span>
                          <span class="card-price"> 150 </span>
                          <span class="card-price-description"> per hour </span>
                        </div>
                        <div class="col text-right">
                          <q-btn
                            @click="right = true"
                            rounded
                            dense
                            class="card-action-btn"
                            icon="arrow_forward"
                            flat
                          />
                        </div>
                      </div>
                      <div class="q-pt-sm">
                       <q-separator  />
                       </div>
                        <div class="row q-pt-sm">
                      <div class="card-actions-container flex">
                        <div
                          v-for="timeslot in car.timeSlots"
                          :key="timeslot"
                          class="card-action q-px-sm q-py-xs q-ma-xs bg-grey-3 text-dark"
                        >
                          16:50
                        </div>
                      </div>
                    </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <q-drawer v-model="right" overlay :width="$q.screen.xs ? '' : 850" side="right">
          <car-drawer v-on:closeSidebar="isCloseSidebar($event)"></car-drawer>
        </q-drawer>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import CarDrawer from 'src/components/CarDrawer.vue'
import { HTTP } from 'boot/httpcommon'
export default {
  components: {
    CarDrawer
  },
  name: 'PageIndex',
  data () {
    return {
      text: '',
      date: '23 Des | 12:30',
      stars: 4,
      right: false,
      cars: [
        {
          id: '1',
          name: 'Minivan (8-seater)',
          carImage: 'hero-car1.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50', '17:50']
        },
        {
          id: '2',
          name: '4-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50']
        },
        {
          id: '3',
          name: 'Trailer',
          carImage: 'hero-car3.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50']
        },
        {
          id: '4',
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: '5',
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: '6',
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: '7',
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: '8',
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: '9',
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: '10',
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        }
      ]
    }
  },
  methods: {
    // clicked () {
    //   this.$emit('clicked')
    // },
    isCloseSidebar (event) {
      this.right = event
    }
  }
}
</script>

<style lang="scss">
.home-page {
  background: #f6f6f6;
}
.main-container {
  padding-top: 0px !important;
}
.homebar-container {
  margin-top: 50px;
  // width: 80%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
}
.main-title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  /* identical to box height, or 83% */

  letter-spacing: -0.005em;

  color: #248271;
}
.homebar-input {
  display: flex;
  align-items: center;
  background: #f6f6f6;
  border-radius: 50px;
  justify-content: center;
  margin: 10px;
  height: 55px;
}
.homebar-input-date {
  display: flex;
  align-items: center;
  border: 2px solid #f6f6f6;
  box-sizing: border-box;
  border-radius: 50px;
  justify-content: center;
  margin: 10px;
  height: 55px;
}
.main-button {
  border-radius: 50px;
}
.hero-container {
  padding: 0 50px 0 50px;
}
.hero-h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
}
.hero-h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
}
.hero-h3 {
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
}
.hero-cars-container {
  position: relative;
}
.hero-cars {
  position: absolute;
  right: 20px;
  top: 30px;
}
.sub-hero {
  height: 120px;
}
.content-title {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
}
.content-title {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  opacity: 0.5;
}
.submain-container {
  padding: 30px 120px 20px 120px;
}
.card-product {
  justify-content: center;
}
.home-input .q-field__native,
.q-field__input {
  font-weight: bold;
  color: grey;
}

//car products

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
.subcardsection-car {
  padding: 5px 16px !important;
  width: 100%;
  position: relative;
}
.car-image {
  height: 130px !important;
}
.home-image-card {
     .q-img__image {
    background-size: contain !important;
  }
}
// .car-card-section {
//   height: 170px;
// }
@media only screen and (max-width: 600px) {
  .homebar-container {
    margin-top: 10px;
    width: 85%;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  .hero-container {
    padding: 0px;
  }
  .homebar-input {
    display: flex;
    align-items: center;
    background: #f6f6f6;
    border-radius: 50px;
    justify-content: center;
    margin: 13px 10px;
    height: 35px;
  }
  .homebar-input-date {
    display: flex;
    align-items: center;
    border: 2px solid #f6f6f6;
    box-sizing: border-box;
    border-radius: 50px;
    justify-content: center;
    margin: 10px;
    margin-left: 40px;
    margin-right: 40px;
    height: 35px;
  }
  .hero-h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
  }
  .hero-h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }
  .hero-h3 {
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
  }
  .sub-hero {
    display: none;
  }
  .submain-container {
    padding: 30px 5px 20px 20px;
  }
  .my-card {
    width: 100%;
    max-width: 400px;
    box-shadow: none !important;
    background: #fcfcfc;
    border-radius: 5px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px 0px 10px 10px;
  }
  .content-title {
    padding-left: 10px;
  }
  .card-action-btn {
    position: absolute;
    top: 3px;
    right: 13px;
  }
  .home-image-card {
     .q-img__image {
    background-size: contain !important;
  }
  .car-image {
  height: 100px !important;
}
  }
}
</style>
