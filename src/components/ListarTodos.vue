<template>
  <div class="container">
    <h2>Lista de Estudiantes</h2>
    <button @click="cargarEstudiantes">Cargar Estudiantes</button>

    <div v-if="estudiantes.length > 0" class="tabla-estudiantes">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in estudiantes" :key="estudiante.id">
            <td>{{ estudiante.id }}</td>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.apellido }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else-if="estudiantes.length === 0 && cargado">
      No hay estudiantes registrados
    </p>
    <p v-else>Presiona el botón para cargar los estudiantes</p>
  </div>
</template>

<script>
import { consultarTodosFachada } from "@/clients/MatriculaClient.js";

export default {
  name: "ListarTodos",
  data() {
    return {
      estudiantes: [],
      cargado: false,
    };
  },
  methods: {
    async cargarEstudiantes() {
      try {
        this.estudiantes = await consultarTodosFachada();
        this.cargado = true;
      } catch (error) {
        console.error("Error al cargar estudiantes:", error);
        alert("Error al cargar los estudiantes");
      }
    },
  },
  mounted() {
    this.cargarEstudiantes();
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

h2 {
  color: #42b983;
  margin-bottom: 20px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

button:hover {
  background-color: #359268;
}

.tabla-estudiantes {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: #42b983;
  color: white;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f5f5f5;
}
</style>