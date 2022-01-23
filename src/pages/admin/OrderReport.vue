<template>
  <q-page class="a-home-page">
    <div class="a-home-container">
      <div class="a-top-container">
        <div class="a-header-label">Order records</div>
      </div>
      <div class="a-content-container q-pt-lg">
        <div class="row q-gutter-md">
          <div class="col-3">
            <div class="a-sub-header-label">Daily Sales</div>
            <div class="daily-sales-container q-pt-lg">
              <div class="daily-sales q-pa-md">
                <div class="row">
                  <q-list style="width: 100%">
                    <q-item clickable v-ripple>
                      <q-item-section class="count-sales">567</q-item-section>
                      <q-item-section side class="sales-header-label">
                        bookings
                      </q-item-section>
                    </q-item>
                  </q-list>
                  <!-- <div class="col count-sales">1057</div>
                  <div class="col sales-header-label text-right">bookings</div> -->
                </div>
                <div class="row">
                  <q-list dense style="width: 100%">
                    <q-item clickable v-ripple>
                      <q-item-section class="sales-header-label"
                        >567</q-item-section
                      >
                      <q-item-section side class="sales-header-label-side">
                        Minivan (6-seater)
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section class="sales-header-label"
                        >567</q-item-section
                      >
                      <q-item-section side class="sales-header-label-side">
                        Minivan (6-seater)
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section class="sales-header-label"
                        >567</q-item-section
                      >
                      <q-item-section side class="sales-header-label-side">
                        Minivan (6-seater)
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section class="sales-header-label"
                        >567</q-item-section
                      >
                      <q-item-section side class="sales-header-label-side">
                        Minivan (6-seater)
                      </q-item-section>
                    </q-item>
                     <q-item clickable v-ripple>
                      <q-item-section class="sales-header-label"
                        >567</q-item-section
                      >
                      <q-item-section side class="sales-header-label-side">
                        Minivan (6-seater)
                      </q-item-section>
                    </q-item>
                     <q-item clickable v-ripple>
                      <q-item-section class="sales-header-label"
                        >567</q-item-section
                      >
                      <q-item-section side class="sales-header-label-side">
                        Minivan (6-seater)
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="a-sub-header-label">
              Monthly top performing vehicles
            </div>
            <div class="daily-sales-container q-pt-lg">
              <div class="daily-sales q-pa-md">
                <div class="">
                  <ApexColumn></ApexColumn>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="a-sub-header-label">Average ratings</div>
            <div class="daily-sales-container q-pt-lg">
              <div class="daily-sales-container">
                <div class="daily-sales q-pa-md">
                  <div class="col-12">
                    <div class="label-ratings text-center">4.7/5</div>
                    <div class="star-ratings text-center">
                      <q-rating
                        v-model="model2"
                        max="5"
                        size="30px"
                        color="yellow"
                        icon="star_border"
                        icon-selected="star"
                        icon-half="star_half"
                        no-dimming
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="a-sub-header-label q-pt-md">Daily Revenue</div>
            <div class="daily-sales-container q-pt-sm">
              <div class="daily-sales-container">
                <div class="daily-sales q-pa-md">
                  <div class="col-12">
                    <div class="label-ratings text-center">+130567</div>
                    <div class="sublabel-ratings text-center">+56.7%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexColumn from 'components/ApexBarCharts'
export default {
  name: 'PageIndex',
  components: {
    ApexColumn
  },
  data () {
    return {
      model2: 4.7,
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
          label: 'Client Name',
          field: 'clientName',
          sortable: true
        },
        {
          name: 'vehicle ',
          align: 'center',
          label: 'Vehicle ',
          field: 'vehicle',
          sortable: true
        },
        { name: 'date', align: 'center', label: 'Date', field: 'date' },
        { name: 'time', align: 'center', label: 'Time', field: 'time' },
        {
          name: 'arrivalTime',
          align: 'center',
          label: 'Arraival Time',
          field: 'arrivalTime'
        },
        {
          name: 'amountPaid',
          align: 'center',
          label: 'Amount Paid',
          field: 'amountPaid'
        },
        { name: 'status', align: 'center', label: 'Status', field: 'status' },
        { name: 'survey', align: 'center', label: 'Survey', field: 'survey' }
      ],
      data: [
        {
          name: '#1057',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1058',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1059',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1010',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1011',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1012',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1013',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1014',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1015',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1016',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
        },
        {
          name: '#1017',
          clientName: 'Firstname Last name',
          vehicle: 'Minivan (8-seater)',
          date: '21-12-2021',
          time: '10:30',
          arrivalTime: '13:20',
          amountPaid: 140,
          status: 'pending',
          survey: 'icon'
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
  },
  methods: {
    testClick (props) {
      console.log('see table click', props.row)
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
  .count-sales {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;

    color: #575757;
  }
  .sales-header-label {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    color: #575757;
  }
  .sales-header-label-side {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    color: #575757;
    opacity: 0.5;
  }
  .daily-sales {
    background: #f6f6f6;
    border-radius: 8px;
  }
  .label-ratings {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;

    color: #575757;
  }
  .sublabel-ratings {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    color: #248271;
  }
}
.a-sidebar-driver {
  //   background: blue !important;
  .q-drawer {
    background: #f6f6f6;
  }
}
</style>
