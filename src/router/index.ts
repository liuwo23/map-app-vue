import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { authService } from '../api/authService';

const GreetingPage = () => import('../views/GreetingView.vue');
const AuthPage = () => import('../views/AuthView.vue');
const HomepagePage = () => import('../views/HomepageView.vue');
const LoginPage = () => import('../views/LoginView.vue');
const RegistrationPage = () => import('../views/RegistrationView.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: GreetingPage,
    name: 'greeting'
  },
  {
    path: '/map',
    component: HomepagePage,
    name: 'homepage'
  },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        component: LoginPage,
        name: 'login'
      },
      {
        path: 'registration',
        component: RegistrationPage,
        name: 'registration'
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const authRoutes: string[] = ['login', 'registration', 'greeting'];

  if (authService.isLoggedIn() && authRoutes.includes(<string>to.name)) {
    next({ name: 'homepage' });
  } else if (!authRoutes.includes(<string>to.name) && !authService.isLoggedIn()) {
    next({ name: 'greeting' });
  } else {
    next();
  }
});
