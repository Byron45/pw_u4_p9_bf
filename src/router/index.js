import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarTodosView from '@/views/ListarTodosView.vue'
import ListarPorIdView from '@/views/ListarPorIdView.vue'
import GuardarView from '@/views/GuardarView.vue'
import ActualizarView from '@/views/ActualizarView.vue'
import ActualizarParcialView from '@/views/ActualizarParcialView.vue'
import BorrarView from '@/views/BorrarView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/listar',
    name: 'ListarTodos',
    component: ListarTodosView
  },
  {
    path: '/listarporid',
    name: 'ListarPorId',
    component: ListarPorIdView
  },
  {
    path: '/guardar',
    name: 'Guardar',
    component: GuardarView
  },
  {
    path: '/actualizar',
    name: 'Actualizar',
    component: ActualizarView
  },
  {
    path: '/actualizarparcial',
    name: 'ActualizarParcial',
    component: ActualizarParcialView
  },
  {
    path: '/borrar',
    name: 'Borrar',
    component: BorrarView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
