const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'index',
    children: [
      {path: 'index', component: () => import('pages/IndexPage.vue')},
      {path: 'papers', component: () => import('pages/PaperPage.vue')},
      {
        path: 'member', component: () => import('pages/MemberPage.vue')
      },
      {path: 'recruit', component: () => import('pages/recruit.vue')},
      {path: 'project', component: () => import('pages/project.vue')},
      {
        path: '/paper/:id',
        component: () => import('pages/PageDetail.vue')
      }
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
