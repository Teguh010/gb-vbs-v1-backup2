<template>
  <q-page class="a-home-page">
    <div class="a-home-container">
      <div class="a-top-container">
        <div class="a-header-label">Assign Drivers</div>
        <div class="a-top-acations">
          <div class="a-sub-header-label q-pt-md">Orders (37 pending)</div>
          <div class="a-sub-header-info q-pt-sm q-pb-lg">
            Select to assign drivers.
          </div>
        </div>
      </div>
      <q-drawer
        v-model="driverCollections"
        side="right"
        :width="350"
        show-if-above
        class="a-sidebar-driver"
      >
        <div class="ar-sidebar-container q-pl-md">
          <div class="a-header-label q-pt-lg">Available drivers (150)</div>
          <div class="driver-image-container q-pt-lg">
            <div class="flex q-gutter-md">
              <template v-for="driver in drivers">
                <div :key="driver.id" class="driver-image">
                  <q-img
                    width="150px"
                    class="a-car-image"
                    style="background-size: contain; border-radius: 50%"
                    :src="'images/' + driver.photo"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </q-drawer>
      <div class="a-content-container" style="padding-right: 350px">
        <q-table
          :data="data"
          :columns="columns"
          row-key="name"
          table-header-class="header-color"
          flat
          :pagination="initialPagination"
          class="a-table"
          hide-bottom
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 15
        // rowsNumber: xx if getting data from a server
      },
      driverCollections: true,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Order no.',
          align: 'left',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true
        },
        {
          name: 'clientName',
          align: 'center',
          label: 'clientName',
          field: 'clientName',
          sortable: true
        },
        {
          name: 'vehicle ',
          label: 'Vehicle ',
          field: 'vehicle',
          sortable: true
        },
        { name: 'date', label: 'Date', field: 'date' },
        { name: 'time', label: 'Time', field: 'time' }
      ],
      data: [
        {
          name: '#1057',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1058',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1059',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1010',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1011',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1012',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1013',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1014',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1015',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1016',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        },
        {
          name: '#1017',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30'
        }
      ],
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
          id: 6,
          name: 'fist name',
          photo: 'driver-image.jpg'
        }
      ]
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
  .header-color {
    background-color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: rgba(87, 87, 87, 0.5);
  }
  .a-table {
    background: #f6f6f6;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    color: #575757;
    // border: 0.5px solid #FFFFFF;
    .q-table thead,
    .q-table tr,
    .q-table th,
    .q-table td {
      border-color: white;
    }
    // tbody {
    //     border-radius: 20px !important;
    // }
  }
}
.a-sidebar-driver {
  //   background: blue !important;
  .q-drawer {
    background: #f6f6f6;
  }
}
</style>
