<template>
  <q-layout view="hHr lpr ffr">
    <div >
      <div v-if="$route.name != 'succeedPage'">
      <q-header v-if="$q.screen.xs" class="bg-primary text-white">
        <q-toolbar class="q-py-sm cb-toolbar-mobile">
          <q-toolbar-title class="q-ml-md">
            <q-btn flat round label="Brand Logo" @click="right = !right" />
          </q-toolbar-title>
          <q-space />
        </q-toolbar>
        <q-toolbar class="cb-toolbar-mobile-bottom">
          <q-btn flat class="text-capitalize" to="/"> Home </q-btn>
          <q-btn flat class="text-capitalize" to="/profile"> Profile </q-btn>
          <q-btn flat class="text-capitalize" @click="isLogin()">
            Sign in
          </q-btn>
        </q-toolbar>
      </q-header>
      <q-header v-else class="bg-primary text-white">
        <q-toolbar class="q-py-sm cb-toolbar">
          <q-toolbar-title>
            <q-btn flat round label="Brand Logo" @click="right = !right" />
          </q-toolbar-title>
          <q-space />

          <q-btn flat class="text-capitalize" to="/"> Home </q-btn>
          <q-btn flat class="text-capitalize" to="/profile"> Profile </q-btn>
          <q-btn flat class="text-capitalize" @click="isLogin()">
            Sign in
          </q-btn>
        </q-toolbar>
      </q-header>
      </div>
      <q-page-container>
        <router-view />
      </q-page-container>
      <div v-if="$route.name != 'succeedPage'">
        <q-footer class="text-white footer-bg">
        <div class="footer-container">
          <div class="footer-content">
            <div class="row">
              <div class="col">
                <div class="brand-name footer-brand">Brand Name</div>
                <div class="menu-left q-pt-md">
                  <div class="footer-menu-text">Contacts</div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="flex q-gutter-md">
                  <div class="footer-menu-text">Home</div>
                  <div class="footer-menu-text q-pl-md">Profile</div>
                </div>
                <div class="footer-menu-text q-pt-md">Sign in</div>
              </div>
            </div>
          </div>
        </div>
      </q-footer>
      </div>
      <q-dialog v-model="login">
        <q-card :class="$q.screen.xs ? 'q-px-sm q-py-md' : 'q-px-xl q-py-md'">
          <q-card-section>
            <div class="login-header-container">
              <div class="login-main-title">Log in to make a booking!</div>
              <div class="login-subtitle flex">
                <div class="login-subtitle">
                  Do not have a [brand name] account yet?
                </div>
                <div class="input-label q-pl-sm" @click="isSignUp()">
                  Sign up
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="login-input-container">
              <div class="login-input">
                <div class="input-label">User Name</div>
                <div class="login-input">
                  <q-input
                    v-model="userName"
                    borderless
                    class="sidbar-form-input"
                  />
                </div>
              </div>
              <div class="login-input">
                <div class="input-label">Email</div>
                <div class="login-input">
                  <q-input
                    v-model="userName"
                    borderless
                    class="sidbar-form-input"
                  />
                </div>
              </div>
              <div class="login-input">
                <div class="input-label">Phone</div>
                <div class="login-input">
                  <q-input
                    v-model="userName"
                    borderless
                    class="sidbar-form-input"
                  />
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="center">
            <div
              :class="
                $q.screen.xs ? 'q-pt-0 text-center' : 'q-pt-lg text-center'
              "
            >
              <q-btn
                v-close-popup
                flat
                class="bg-dark main-button text-white q-px-lg text-capitalize"
                label="Continue Your Journey"
                borderless
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="signUp">
        <q-card :class="$q.screen.xs ? 'q-px-sm q-py-md' : 'q-px-xl q-py-md'">
          <q-card-section>
            <div class="login-header-container">
              <div class="login-main-title">Sign up to enjoy our services!</div>
              <div class="login-subtitle flex">
                <div class="login-subtitle">Already a [brand name] member?</div>
                <div class="input-label q-pl-sm" @click="isLogin()">Log in</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="login-input-container">
              <div class="login-input">
                <div class="input-label">User Name</div>
                <div class="login-input">
                  <q-input
                    v-model="userName"
                    borderless
                    class="sidbar-form-input"
                  />
                </div>
              </div>
              <div class="login-input">
                <div class="input-label">Email</div>
                <div class="login-input">
                  <q-input
                    v-model="userName"
                    borderless
                    class="sidbar-form-input"
                  />
                </div>
              </div>
              <div class="login-input">
                <div class="input-label">Phone</div>
                <div class="login-input">
                  <q-input
                    v-model="userName"
                    borderless
                    class="sidbar-form-input"
                  />
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="center">
            <div
              :class="
                $q.screen.xs ? 'q-pt-0 text-center' : 'q-pt-lg text-center'
              "
            >
              <q-btn
                v-close-popup
                flat
                class="bg-dark main-button text-white q-px-lg text-capitalize"
                label="Begin Your Journey"
                borderless
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      right: false,
      userName: '',
      login: false,
      signUp: false
    }
  },
  methods: {
    isSignUp () {
      this.signUp = true
      this.login = false
    },
    isLogin () {
      this.signUp = false
      this.login = true
    }
  }
}
</script>
<style lang="scss">
.q-drawer {
  /* position: absolute; */
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 4000 !important;
}
.cb-toolbar {
  padding-left: 70px;
  padding-right: 70px;
}
.footer-content {
  padding: 4%;
}
.footer-menu-text {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #248271;
}
.footer-brand {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #248271;
}
.footer-bg {
  background: #c0d8d3;
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
.login-main-title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;

  color: #248271;
}
.login-subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  letter-spacing: -0.005em;

  color: rgba(87, 87, 87, 0.5);
}
.input-label {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  letter-spacing: -0.005em;

  color: #575757;

  opacity: 0.8;
}
.main-button {
  border-radius: 50px;
}
.login-input {
  padding-top: 8px;
}

@media only screen and (max-width: 600px) {
  .cb-toolbar-mobile-bottom {
    margin-top: -15px;
  }
  .login-subtitle {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 143% */

    letter-spacing: -0.005em;

    color: rgba(87, 87, 87, 0.5);
  }
  .login-main-title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #248271;
  }
  .input-label {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 125% */

    letter-spacing: -0.005em;

    color: #575757;

    opacity: 0.8;
  }
}
</style>
