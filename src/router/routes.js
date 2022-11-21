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
  {
    path: '/space', component: () => import('layouts/SpaceLayout.vue'),
    redirect: '/space/index',
    name: 'space',
    children: [
      {path: 'index', component: () => import('pages/spaceIndex.vue'), name: 'spaceIndex'},
      {path: 'file', component: () => import('pages/filePage.vue'), name: 'spaceFile'},
      {path: 'blog', component: () => import('pages/blogPage.vue'), name: 'spaceBlog'},
      {path: 'upload', component: () => import('pages/releasePage.vue'), name: 'spaceUpload'},
    ]
  },
  {path: '/login', component: () => import('pages/login.vue')},
  {path: '/blog/:id', name: 'blog', component: () => import('pages/article.vue')},
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
