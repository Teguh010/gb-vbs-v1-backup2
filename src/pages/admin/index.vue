<template>
  <q-page class="a-home-page">
    <div class="a-home-container">
      <div class="a-top-container">
        <div class="a-header-label">Manage slots</div>
        <div class="a-top-acations">
          <div class="a-sub-header-label q-pt-lg">Create</div>
          <div class="a-top-action-button-container q-pt-sm">
            <q-btn
              @click="showCar()"
              class="a-top-action-button text-capitalize"
              flat
              label="Add Vihacle"
            />
          </div>
          <div class="a-sub-header-label q-pt-md">Vihcles(37)</div>
          <div class="a-sub-header-info q-pt-sm q-pb-lg">
            Select to manage slots and vehicle info.
          </div>
        </div>
      </div>
      <div class="a-content-container">
        <div class="card-product q-gutter-sm flex">
          <q-card
            class="a-car-cards"
            v-for="car in cars"
            :key="car.id"
            @click="showCar()"
          >
            <q-card-section class="a-car-card-section" horizontal>
              <div class="flex justify-center a-home-image-card">
                <q-img
                  width="100px"
                  class="a-car-image"
                  style="background-size: contain"
                  :src="'images/' + car.carImage"
                />
              </div>
              <q-card-section
                class="a-subcardsection-car"
                style="padding-top: 0px"
              >
                <div class="row">
                  <div class="col a-card-title ellipsis">
                    {{ car.name }}
                  </div>
                </div>
                <div class="row">
                  <div class="col acard-currency-container q-pt-sm">
                    <span class="a-card-currency"> $ 150 /hour </span>
                  </div>
                </div>
                <div class="a-description-section">
                  <div class="a-feature-items flex q-gutter-x-sm">
                    <div class="a-feature-item flex items-center q-pt-sm">
                      <div class="a-feature-icon">
                        <q-img src="~assets/images/person.svg" width="18px" />
                      </div>
                      <div class="a-feature-description q-pt-xs">4</div>
                    </div>
                    <div
                      class="a-feature-item flex items-center q-pt-sm q-pl-lg"
                    >
                      <div class="a-feature-icon">
                        <q-img
                          src="~assets/images/briefcase.svg"
                          width="18px"
                        />
                        <!-- <q-icon name='img:~/assets/images/briefcase.svg' style="font-size: 30px;" width="20px" /> -->
                      </div>
                      <div class="a-feature-description q-pt-xs">2</div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <q-dialog v-model="addEditCar">
      <add-car></add-car>
    </q-dialog>
  </q-page>
</template>

<script>
import AddCar from 'components/AddCar.vue'
export default {
  components: { AddCar },
  name: 'PageIndex',
  data () {
    return {
      addEditCar: false,
      cars: [
        {
          id: 1,
          name: 'Minivan (8-seater)',
          carImage: 'hero-car1.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50', '17:50']
        },
        {
          id: 2,
          name: '4-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50']
        },
        {
          id: 3,
          name: 'Trailer',
          carImage: 'hero-car3.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50']
        },
        {
          id: 4,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 5,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 6,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 7,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 8,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 9,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 10,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 11,
          name: 'Minivan (8-seater)',
          carImage: 'hero-car1.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50', '17:50']
        },
        {
          id: 12,
          name: '4-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50']
        },
        {
          id: 13,
          name: 'Trailer',
          carImage: 'hero-car3.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['13:30', '16:50']
        },
        {
          id: 14,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 15,
          name: '6-seater',
          carImage: 'hero-car2.svg',
          pirce: '150',
          status: 'available',
          timeSlots: ['09:00', '13:30']
        },
        {
          id: 16,
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
    showCar () {
      this.addEditCar = true
    }
  }
}
</script>
<style lang="scss">
.a-home-page {
  .feature-item {
    opacity: 0.5;
  }
  .a-home-container {
    padding: 30px;
  }
  .a-header-label {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #575757;
  }
  .a-sub-header-label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #575757;
  }
  .a-top-action-button {
    border: 2px solid #248271;
    border-radius: 10px;
    color: #248271;
  }
  .a-sub-header-info {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #575757;
    opacity: 0.5;
  }
  .a-car-cards {
    width: 285px;
    box-shadow: none !important;
    background: #fcfcfc;
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px 0px 10px 10px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    height: 105px;
  }
  .content-title {
    padding-left: 10px;
  }
  .card-action-btn {
    position: absolute;
    top: 3px;
    right: 13px;
  }
  .a-home-image-card {
    .q-img__image {
      background-size: contain !important;
    }
    .a-car-image {
      height: 100px !important;
    }
  }
  .a-card-title {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #575757;
  }
  .a-card-currency {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #575757;
    opacity: 0.5;
  }
  .a-description-section {
    margin-top: -8px;
  }
  .a-feature-description {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #575757;
    opacity: 0.5;
    padding-left: 10px;
  }

  @media (min-width: 600px) {
    .q-dialog__inner--minimized > div {
      max-width: 960px;
    }
  }
}
</style>
