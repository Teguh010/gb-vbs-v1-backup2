<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="250"
      content-class="bg-grey-1"
      class="a-sidebar"
    >
      <q-list class="q-pt-md ">
        <q-item clickable v-ripple to="/admin" class="text-center sidebar-list-item">
          <div class="a-sidebar-label-container text-center">
            <div class="a-sidebar-icon">
              <q-icon name="pending_actions" class="a-sidebar-subicon" />
            </div>
            <div class="a-sidebar-label">Mange Slots</div>
          </div>
        </q-item>
        <q-item clickable v-ripple to="/driverCollections" class="text-center sidebar-list-item">
          <div class="a-sidebar-label-container text-center">
            <div class="a-sidebar-icon">
              <q-icon name="o_directions_car_filled" class="a-sidebar-subicon" />
            </div>
            <div class="a-sidebar-label">Mange Slots</div>
          </div>
        </q-item>
        <q-item clickable v-ripple to="/orderRecords" class="text-center sidebar-list-item">
          <div class="a-sidebar-label-container text-center">
            <div class="a-sidebar-icon">
              <q-icon name="o_receipt_long" class="a-sidebar-subicon" />
            </div>
            <div class="a-sidebar-label">Order Records</div>
          </div>
        </q-item>
        <q-item clickable v-ripple to="/manageDriver" class="text-center sidebar-list-item">
          <div class="a-sidebar-label-container text-center">
            <div class="a-sidebar-icon">
              <q-icon name="o_person" class="a-sidebar-subicon" />
            </div>
            <div class="a-sidebar-label">Manage Driver</div>
          </div>
        </q-item>
         <q-item clickable v-ripple to="/orderReport" class="text-center sidebar-list-item">
          <div class="a-sidebar-label-container text-center">
            <div class="a-sidebar-icon">
              <q-icon name="o_summarize" class="a-sidebar-subicon" />
            </div>
            <div class="a-sidebar-label">Order Report</div>
          </div>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
.a-sidebar {
    background: #F6F6F6;
    .sidebar-list-item {
        justify-content: center;
    }
    .a-sidebar-subicon {
        font-size: 30px;
        color: #575757;
        opacity: 0.8;
    }
    .a-sidebar-icon {
        padding-top: 20px;
    }
    .a-sidebar-label {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        color: #575757;

        opacity: 0.8;
        padding-top: 20px;
    }
}
      .q-page-container {
  padding-right: 0px !important;
}
</style>
