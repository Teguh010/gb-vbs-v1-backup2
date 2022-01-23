
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: '/profile', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: '/paymentTab', name: 'paymentTab', component: () => import('components/PaymentTab.vue') },
      { path: '/succeedPage', name: 'succeedPage', component: () => import('components/SucceedPage.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/adminLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/admin/Index.vue') },
      { path: '/driverCollections', name: 'Drivers', component: () => import('src/pages/admin/DriversCollections.vue') },
      { path: '/orderRecords', name: 'Order Records', component: () => import('src/pages/admin/OrderRecords.vue') },
      { path: '/manageDriver', name: 'Manage Driver', component: () => import('src/pages/admin/ManageDriver.vue') },
      { path: '/orderReport', name: 'Order Report', component: () => import('src/pages/admin/OrderReport.vue') },
      { path: '/addCar', name: 'Add Car', component: () => import('src/components/AddCar.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
