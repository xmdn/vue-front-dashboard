import { createRouter, createWebHistory } from 'vue-router';
import { authState } from './js/auth';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('./modals/Model.vue')
  },
  {
    path: '/strategies',
    name: 'account',
    component: () => import('./views/Strategies.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./views/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./auth/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./auth/register.vue')
  },
  {
    path: '/model',
    name: 'model',
    component: () => import('./modals/Model.vue')
  },
  {
    path: '/strategy',
    name: 'strategy',
    component: () => import('./modals/Strategy.vue')
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('./modals/DashS.vue')
  },
  {
    path: '/view/:symbol',
    name: 'infoview',
    component: () => import('./views/InfoView.vue'),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (authState.isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    next('/model');
  } else if (!authState.isAuthenticated && to.path !== '/login' && to.path !== '/register') {
    next('/login');
  } else {
    next();
  }
});

export default router;
