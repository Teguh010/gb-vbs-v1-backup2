<template>
  <q-page class="a-driver-page">
    <div class="a-driver-container">
      <div class="a-top-container">
        <div class="a-header-label">Manage drivers</div>
        <div class="a-top-acations">
          <div class="a-sub-header-label q-pt-md">Orders (37 pending)</div>
          <div class="a-sub-header-info q-pt-sm q-pb-lg">
            Select to view detailed driver info.
          </div>
        </div>
      </div>
      <div class="driver-image-container q-pt-lg">
        <div class="flex q-gutter-lg">
          <template v-for="driver in drivers">
            <div :key="driver.id" class="driver-image-container">
              <div class="driver-image">
                <q-img
                  width="120px"
                  class="a-car-image"
                  style="background-size: contain; border-radius: 50%"
                  :src="'images/' + driver.photo"
                />
              </div>
              <div class="driver-label text-center q-pt-sm">Driver Name</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      drivers: [
        {
          id: 1,
          name: 'fist name',
          photo: 'driver-image.jpg'
        },
        {
          id: 2,
          name: 'fist name',
          photo: 'driver-image.jpg'
        },
        {
          id: 3,
          name: 'fist name',
          photo: 'driver-image.jpg'
        },
        {
          id: 4,
          name: 'fist name',
          photo: 'driver-image.jpg'
        },
        {
          id: 5,
          name: 'fist name',
          photo: 'driver-image.jpg'
        },
        {
          id: 7,
          name: 'fist name',
          photo: 'driver-image.jpg'
        },
        {
          id: 8,
          name: 'fist name',
          photo: 'driver-image.jpg'
        },
        {
          id: 9,
          name: 'fist name',
          photo: 'driver-image.jpg'
        },
        {
          id: 10,
          name: 'fist name',
          photo: 'driver-image.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.a-driver-page {
  .feature-item {
    opacity: 0.5;
  }
  .a-driver-container {
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
  .header-color {
    background-color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: rgba(87, 87, 87, 0.5);
  }
  .driver-label {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;

    color: #575757;

    opacity: 0.8;
  }
}
</style>
