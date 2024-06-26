const routes = [
  {
    path: '/',
    component: '',
    children: [
      { path: '', component: () => import('pages/StartingPage.vue') }
    ]
  },
  {
    path: '/SignUpPage',
    component: '',
    children: [
      { path: '', component: () => import('pages/SignUpPage.vue') }
    ]
  },
  {
    path: '/LoginPage',
    component: '',
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/MainPage',
    component: '',
    children: [
      { path: '', component: () => import('pages/MainPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
