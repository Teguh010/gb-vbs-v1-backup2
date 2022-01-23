<template>
  <div class="addv-content-container q-py-lg">
    <div class="">
      <div class="row addv-top-container">
        <div class="col add-car-header-label">Create vehicle</div>
        <div class="text-right col">
          <q-btn icon="close" flat round dense v-close-popup />
        </div>
      </div>
      <div class="form-section">
        <div class="step-container col q-pt-lg">
          <div class="input-label">Input Your Information</div>
          <div class="q-pt-sm">
            <q-input v-model="inputAddv" borderless class="addv-form-input" />
          </div>
        </div>
        <div class="step-container col q-pt-md">
          <div class="input-label">Input Your Information</div>
          <div class="q-pt-sm">
            <q-editor v-model="editor" min-height="300px" />
          </div>
        </div>
        <div class="step-container col q-pt-lg">
          <div class="input-label">Input Your Information</div>
          <div class="q-pt-sm">
            <div class="col">
              <div class="subinput-container flex items-center q-gutter-md">
                <div class="addv-input">
                  <q-input
                    v-model="inputAddv"
                    borderless
                    class="addv-form-input"
                  />
                </div>
                <div class="addv-subinput-label">per</div>
                <div class="addv-input">
                  <q-btn
                    label="hour"
                    flat
                    class="text-capitalize text-primary subinput-btn"
                  />
                  <q-btn
                    label="day"
                    flat
                    class="q-ml-md text-capitalize text-primary subinput-btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step-container col q-pt-lg">
          <div class="input-label">Input Your Information</div>
          <div class="q-pt-sm">
            <div class="col">
              <div class="subinput-container flex items-center q-gutter-md">
                <div class="addv-input">
                  <div class="flex items-container items-center">
                    <div class="addv-subinput-label2 q-pr-md">
                      Max Passengers
                    </div>
                    <q-input
                      v-model="inputAddv"
                      borderless
                      class="addv-form-input"
                    />
                  </div>
                </div>
                <div class="addv-input">
                  <div class="flex items-container items-center">
                    <div class="addv-subinput-label2 q-pr-md">Max luggages</div>
                    <q-input
                      v-model="inputAddv"
                      borderless
                      class="addv-form-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step-container col q-pt-lg">
          <div class="input-label">Upload vehicle image</div>
          <div class="q-pt-sm">
            <div class="flex justify-center">
              <div class="subinput-container flex items-center q-gutter-md">
                <div class="addv-input">
                  <div class="upload-area flex items-center justify-center">
                    <div class="text-center">
                      <div class="text-upload-area">
                        Drop your product images here or
                        <stong class="text-bold text-dark"> Browse </stong>
                      </div>
                      <div class="text-upload-area q-pt-md">
                        JPG, PNG, SVG accepted. <br />
                        Max. file size 20MB. Max. 10 images.
                      </div>
                      <!-- <q-uploader
                        url="http://localhost:4444/upload"
                        label="Custom list"
                        multiple
                      >
                        <template v-slot:list="scope">
                          <q-list separator>
                            <q-item
                              v-for="file in scope.files"
                              :key="file.name"
                            >
                              <q-item-section side>
                                <q-item-label class="full-width ellipsis">
                                  {{ file.name }}
                                </q-item-label>

                                <q-item-label caption>
                                  Status: {{ file.__status }}
                                </q-item-label>

                                <q-item-label caption>
                                  {{ file.__sizeLabel }} /
                                  {{ file.__progressLabel }}
                                </q-item-label>
                              </q-item-section>

                              <q-item-section>
                                <q-input
                                  v-model="file.field"
                                  label="Document"
                                ></q-input>
                              </q-item-section>

                              <q-item-section
                                v-if="file.__img"
                                thumbnail
                                class="gt-xs"
                              >
                                <img :src="file.__img.src" />
                              </q-item-section>

                              <q-item-section top side>
                                <q-btn
                                  class="gt-xs"
                                  size="12px"
                                  flat
                                  dense
                                  round
                                  icon="delete"
                                  @click="scope.removeFile(file)"
                                ></q-btn>
                              </q-item-section>
                            </q-item>
                          </q-list>
                        </template>
                      </q-uploader> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="drag-area flex justify-center q-pt-lg">
            <draggable
              v-model="datas"
              group="people"
              @start="drag = true"
              @end="drag = false"
            >
              <div v-for="car in datas" :key="car.id" class="q-pa-xs">
                <q-list class="car-list" style="width: 400px; height: 80px">
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <div class="q-pt-sm">
                        <q-img
                          width="100px"
                          class="car-image"
                          :src="'images/' + car.carImage"
                        />
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <div class="card-title ellipsis">
                        {{ car.name }}
                      </div>
                    </q-item-section>
                    <q-item-section avatar side>
                      <div>
                        <q-icon
                          name="drag_indicator"
                          class="car-list-icon"
                          style="font-size: 28px"
                        />
                        <q-icon
                          name="delete"
                          class="car-list-icon"
                          style="font-size: 28px"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      inputAddv: '',
      text: '',
      editor: '',
      datas: [
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
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.car-list {
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 10px;
}
.car-list-icon {
  color: rgba(87, 87, 87, 0.5);
}
.card-title {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #575757;
}

.my-card {
  width: 350px;
  // max-width: 400px;
  box-shadow: none !important;
  background: #fcfcfc;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px 0px 10px 10px;
  .q-img__image {
    background-size: contain !important;
  }
}
.input-label {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #248271;
}
.label-addv {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #575757;
  opacity: 0.5;
}
.label-addv-selected {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #575757;
}
.addv-content-container {
  padding: 20px;
  background-color: white;
}
.addv-form-input {
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
.add-car-header-label {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #575757;
}
.addv-subinput-label {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;

  color: #575757;

  opacity: 0.8;
}
.addv-subinput-label2 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #575757;

  opacity: 0.5;
}
.subinput-btn {
  border: 1px solid #248271;
  border-radius: 5px;
  .q-btn__wrapper {
    padding: 2px 22px;
    max-height: 35px !important;
    min-height: 30px !important;
    border-radius: inherit;
    width: 80px !important;
    height: 35px !important;
  }
}
.upload-area {
  background: #f6f6f6;
  border: 2px dashed #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 30px;
  height: 200px;
  width: 400px;
}
.text-upload-area {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  color: rgba(87, 87, 87, 0.5);
}
</style>
