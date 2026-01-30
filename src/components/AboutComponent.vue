<template>
  <div class="container">
    <h1>Gestión de Estudiantes</h1>
    <button @click="consultarTodos">Ver Estudiantes</button>
    <button @click="consultarPorId(1)">Buscar Estudiante</button>
    <button @click="guardar(1)">Guardar Estudiante</button>
    <button @click="actualizar()">Actualizar Estudiante</button>
    <button @click="borrar()">Borrar Estudiante</button>
  </div>
</template>
 
<script>
import {
  consultarTodosFachada,
  consultarPorIdFachada,
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  borrarFachada,
} from "@/clients/MatriculaClient.js";
export default {
  name: "AboutComponent",
  data() {
    return {
      estudiantes: [],
      estudiante: null,
    };
  },
  methods: {
    async consultarTodos() {
      this.estudiantes = await consultarTodosFachada();
    },
    async consultarPorId(id) {
      this.estudiante = await consultarPorIdFachada(id);
    },
    async guardar(body) {
      return await guardarFachada(body);
    },
    async actualizar(id, body) {
      return await actualizarFachada(id, body);
    },
    async actualizarParcial(id, body) {
      return await actualizarParcialFachada(id, body);
    },
    async borrar(id) {
      return await borrarFachada(id);
    },
  },
};
</script>
 
<style>
</style>