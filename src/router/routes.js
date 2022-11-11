
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {path:'papers',component:()=>import('pages/PaperPage.vue')},
    ]
  },
  {
    path: '/space',component: () => import('layouts/SpaceLayout.vue'),
    children: [
      {path:'',component: () => import('pages/filePage.vue')},
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
