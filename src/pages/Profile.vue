<template>
  <q-page class="profile-page">
    <div>
      <div
        :class="
          $q.screen.xs
            ? 'profile-container q-py-lg q-px-sm'
            : 'profile-container q-py-lg q-px-lg'
        "
      >
        <q-card flat class="card-profile-tabs card-profile-container">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey profile-main-tabs"
            active-color="primary"
            indicator-color="transparent"
            align="left"
            narrow-indicator
          >
            <q-tab
              class="profile-tab"
              name="profile"
              label="Profile Settings"
            />
            <q-tab
              class="profile-tab"
              name="bookingHistory"
              label="Booking History"
            />
            <q-tab class="profile-tab" name="cupons" label="Cupons" />
          </q-tabs>

          <!-- <q-separator /> -->

          <q-tab-panels
            v-model="tab"
            animated
            class="card-profile-tabs profile-tab-panels"
          >
            <q-tab-panel class="profile-tab-panels" name="profile">
              <div
                :class="
                  $q.screen.xs ? 'row q-pt-lg q-pl-sm' : 'row q-pt-lg q-pl-lg'
                "
              >
                <div class="col-xs-12 col-lg-6">
                  <div class="sidebar-form-input row">
                    <div :class="$q.screen.xs ? 'col-3' : 'col-2'">
                      <div class="label-timeslot">Name</div>
                    </div>
                    <div class="col">
                      <div class="q-pl-md">
                        <div class="destination-container flex items-center">
                          <div>
                            <span class="label-timeslot-profile"
                              >Firstname Lastname</span
                            >
                            <span class="change-action">(Change)</span>
                          </div>
                          <!-- <div class="change-action">(Change)</div> -->
                        </div>
                        <!-- <div class="destination-container flex items-center">
                          <div class="label-timeslot-profile">
                            Firstname Lastname
                          </div>
                          <div class="change-action">(Change)</div>
                        </div> -->
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-form-input row q-pt-md">
                    <div :class="$q.screen.xs ? 'col-3' : 'col-2'">
                      <div class="label-timeslot">Email</div>
                    </div>
                    <div class="col">
                      <div class="q-pl-md">
                        <div class="destination-container flex items-center">
                          <div class="label-timeslot-profile">
                            sampleemail@email.com
                          </div>
                          <div class="change-action">(Change)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-form-input row q-pt-md">
                    <div :class="$q.screen.xs ? 'col-3' : 'col-2'">
                      <div class="label-timeslot">Phone</div>
                    </div>
                    <div class="col">
                      <div class="q-pl-md">
                        <div class="destination-container flex items-center">
                          <div class="label-timeslot-profile">
                            +852 9876 5432
                          </div>
                          <div class="change-action">(Change)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-form-input row q-pt-md">
                    <div :class="$q.screen.xs ? 'col-3' : 'col-2'">
                      <div class="label-timeslot">Password</div>
                    </div>
                    <div class="col">
                      <div class="q-pl-md">
                        <div class="destination-container flex items-center">
                          <div class="label-timeslot">********</div>
                          <div class="change-action">(Change)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel class="profile-tab-panels" name="bookingHistory">
              <div class="profile-card-container upcoming-events">
                <div class="q-pb-md profile-card-title">Upcoming Events</div>
                <div class="card-profile-container q-gutter-md flex">
                  <div
                    class="profile-card"
                    v-for="upcoming in upcomingEvents"
                    :key="upcoming.index"
                  >
                    <q-card class="profile-card text-black">
                      <q-card-section class="q-pt-none">
                        <div class="text-card-title q-pt-md q-pb-sm">
                          {{ upcoming.timeSlot }} | {{ upcoming.date }}
                        </div>
                        <div class="text-card">
                          <div class="flex items-center">
                            <div class="">From :</div>
                            <div class="q-pl-sm">
                              {{ upcoming.from }}
                            </div>
                          </div>
                          <div class="flex items-center">
                            <div class="">To :</div>
                            <div class="q-pl-sm">
                              {{ upcoming.to }}
                            </div>
                          </div>
                          <div class="flex items-center">
                            <div class="">Vehicle :</div>
                            <div class="q-pl-sm">
                              {{ upcoming.vehicleName }}
                            </div>
                          </div>
                          <div class="flex items-center">
                            <div class="">Paid :</div>
                            <div class="q-pl-sm">{{ upcoming.price }}</div>
                          </div>
                          <div class="flex items-center">
                            <div class="">Arrival time :</div>
                            <div class="q-pl-sm">
                              {{ upcoming.arrivalTime }}
                            </div>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
              <div class="profile-card-container past-rent q-pt-xl">
                <div class="q-pb-md profile-card-title">Past Rent(s) 5</div>
                <div class="card-profile-container q-gutter-md flex">
                  <div
                    class="profile-card"
                    v-for="past in pastRent"
                    :key="past.index"
                  >
                    <q-card class="profile-card text-black">
                      <q-card-section class="q-pt-none">
                        <div class="text-card-title q-pt-md q-pb-sm">
                          {{ past.timeSlot }} | {{ past.date }}
                        </div>
                        <div class="text-card">
                          <div class="flex items-center">
                            <div class="">From :</div>
                            <div class="q-pl-sm">
                              {{ past.from }}
                            </div>
                          </div>
                          <div class="flex items-center">
                            <div class="">To :</div>
                            <div class="q-pl-sm">
                              {{ past.to }}
                            </div>
                          </div>
                          <div class="flex items-center">
                            <div class="">Vehicle :</div>
                            <div class="q-pl-sm">{{ past.vehicleName }}</div>
                          </div>
                          <div class="flex items-center">
                            <div class="">Paid :</div>
                            <div class="q-pl-sm">{{ past.price }}</div>
                          </div>
                          <div class="flex items-center">
                            <div class="">Arrival time :</div>
                            <div class="q-pl-sm">{{ past.arrivalTime }}</div>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel class="profile-tab-panels" name="cupons">
              <div class="card-profile-container q-gutter-md flex">
                <div class="profile-card">
                  <q-card class="profile-card text-black">
                    <q-card-section class="q-pt-none">
                      <div class="text-card-title q-pt-md q-pb-sm">$20 off</div>
                      <div class="text-card">
                        <div class="">Remaining usage : 5</div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="profile-card">
                  <q-card class="profile-card text-black">
                    <q-card-section class="q-pt-none">
                      <div class="text-card-title q-pt-md q-pb-sm">$20 off</div>
                      <div class="text-card">
                        <div class="">Remaining usage : 5</div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="profile-card">
                  <q-card class="profile-card text-black">
                    <q-card-section class="q-pt-none">
                      <div class="text-card-title q-pt-md q-pb-sm">$20 off</div>
                      <div class="text-card">
                        <div class="">Remaining usage : 5</div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'profile',
      inputSidebar: '',
      upcomingEvents: [
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        },
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        }
      ],
      pastRent: [
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        },
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        },
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        },
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        },
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        },
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        },
        {
          timeSlot: '16:50',
          date: '21/12/2021',
          from: '15 Street name, District name, Hong Kong',
          to: 'Street name, District name, Kowloon',
          vehicleName: 'Minivan (6-seater)',
          vehicleType: 'sedan',
          price: '$350',
          arrivalTime: '17:30'
        }
      ],
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="scss">
.profile-page {
  background: #f6f6f6;
  // height: 100vh;

  .card-profile-tabs {
    background: transparent !important;
  }
  .profile-tab {
    text-transform: capitalize;
  }
  .label-timeslot {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #575757;
    opacity: 0.5;
  }
  .label-timeslot-profile {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #575757;
  }
  .change-action {
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    text-decoration-line: underline;
    color: #248271;
    padding-left: 10px;
  }
  .label-timeslot-selected {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #575757;
  }
  .profile-card {
    width: auto;
    min-width: 256px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: none;
  }
  .profile-card-title {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    color: #248271;
  }
  .text-card-title {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #575757;
  }
  .text-card {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #575757;
    opacity: 0.8;
  }

  .q-tab {
    margin: 0 4px;
    padding: 0px 16px;
    border-radius: 30px !important;
    color: #606060;
  }
  .q-tab--active {
    background: #e1e1e1;
    border-radius: 30px !important;
    color: #606060 !important;
  }
  @media only screen and (max-width: 600px) {
    .q-tab {
      margin: 0 4px;
      padding: 0px 6px;
      border-radius: 30px !important;
      color: #606060;
    }
    .profile-card {
      width: 100%;
      min-width: 256px;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: none;
    }
     .label-timeslot-profile {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #575757;
  }
    .label-timeslot {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #575757;
  }
  .change-action {
    font-size: 14px;
  }
  }
}
</style>
