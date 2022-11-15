
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect:'index',
    children: [
      { path: 'index', component: () => import('pages/IndexPage.vue') },
      {path:'papers',component:()=>import('pages/PaperPage.vue')},
      {
        path:'member',component:()=>import('pages/MemberPage.vue')
      }
    ]
  },
  {
    path: '/space',component: () => import('layouts/SpaceLayout.vue'),
    name:'space',
    children: [
      {path:'file',component: () => import('pages/filePage.vue')},
      {path:'blog',component: () => import('pages/blogPage.vue')}
    ]
  },
  {path:'/login',component:()=>import('pages/login.vue')},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
