import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

// view imports
import HomeView from '../views/HomeView.vue';

// import EditorView from '../views/EditorView.vue';
// import UserTextListView from '../views/UserTextListView.vue';


const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },

  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  { path: '/edit', name: 'Editor', component: () => import('../views/EditorView.vue') },
  { path: '/edit/:id', name: 'EditorUpdate', component: () => import('../views/EditorView.vue') },
  { path: '/texts', name: 'TextList', component: () => import('../views/UserTextListView.vue') },
  { path: '/profile', name: 'Profile', component: () => import('../views/UserProfileView.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/LoginView.vue') },
  { path: '/register', name: 'Register', component: () => import('../views/RegisterView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
