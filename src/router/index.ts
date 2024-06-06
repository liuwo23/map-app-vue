import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const GreetingPage = () => import('../views/GreetingView.vue');
const AuthPage = () => import('../views/AuthView.vue');
const HomepagePage = () => import('../views/HomepageView.vue');
const LoginPage = () => import('../views/LoginView.vue');
const RegistrationPage = () => import('../views/RegistrationView.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: GreetingPage
  },
  {
    path: '/map',
    component: HomepagePage
  },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'registration',
        component: RegistrationPage
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
