import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarTodosView from '@/views/ListarTodosView.vue'
import ListarPorIdView from '@/views/ListarPorIdView.vue'
import GuardarView from '@/views/GuardarView.vue'
import ActualizarView from '@/views/ActualizarView.vue'
import ActualizarParcialView from '@/views/ActualizarParcialView.vue'
import BorrarView from '@/views/BorrarView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/listar',
    name: 'ListarTodos',
    component: ListarTodosView,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
  {
    path: '/listarporid',
    name: 'ListarPorId',
    component: ListarPorIdView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/guardar',
    name: 'Guardar',
    component: GuardarView,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
  {
    path: '/actualizar',
    name: 'Actualizar',
    component: ActualizarView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/actualizarparcial',
    name: 'ActualizarParcial',
    component: ActualizarParcialView,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
  {
    path: '/borrar',
    name: 'Borrar',
    component: BorrarView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*Configuracion del Guardian*/
router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutorizacion) {
    /*Le envio a una pagina de Login*/
    const estaAutenticado = localStorage.getItem("Esta Autenticado");
    const token = localStorage.getItem("token");
    if (!estaAutenticado) {
      console.log('Redirigiendo a Login...');
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    /*Le dejo pasar sin validaciones*/
    console.log('Pase Libre');
    next();
  }
})

export default router
