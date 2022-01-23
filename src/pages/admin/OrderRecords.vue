<template>
  <q-page class="a-home-page">
    <div class="a-home-container">
      <div class="a-top-container">
        <div class="a-header-label">Order records</div>
      </div>
      <div class="a-content-container q-pt-lg">
        <q-table
          :data="data"
          :columns="columns"
          row-key="name"
          table-header-class="header-color"
          flat
          :pagination="initialPagination"
          class="a-table"
          hide-bottom
          :table-style="{ fontSize: '30px' }"
        >
        <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div>
            <q-badge color="primary"  style="font-size: 16px;padding: 6px 17px" rounded :label="props.value" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-survey="props">
        <q-td :props="props">
          <div style="cursor:pointer;">
            <q-btn icon="open_in_new" class="text-primary" flat style="font-size: 14px;" @click="testClick(props)" />
            <!-- <q-icon name="thumb_up" size="1.5em"></q-icon> -->
          </div>
        </q-td>
      </template>
        </q-table>
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
        { name: 'arrivalTime', align: 'center', label: 'Arraival Time', field: 'arrivalTime' },
        { name: 'amountPaid', align: 'center', label: 'Amount Paid', field: 'amountPaid' },
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
    .q-table tbody td {
    font-size: 16px !important;
}
    .q-table th {
    font-weight: bold;
    font-size: 16px;
}
  }
}
.a-sidebar-driver {
  //   background: blue !important;
  .q-drawer {
    background: #f6f6f6;
  }
}
</style>
