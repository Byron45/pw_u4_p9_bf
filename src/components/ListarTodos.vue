<template>
  <div class="container">
    <h1>Listar Todos</h1>
    <div class="boton">
      <button @click="consultarTodos">Consultar Todos</button>
    </div>

    <div class="tabla">
      <table
        v-if="estudiantes.length > 0"
        border="1"
        cellpadding="5"
        cellspacing="0"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Genero</th>
            <th>Provincia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in estudiantes" :key="estudiante.id">
            <td>{{ estudiante.id }}</td>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.apellido }}</td>
            <td>{{ estudiante.fechaNacimiento }}</td>
            <td>{{ estudiante.genero }}</td>
            <td>{{ estudiante.provincia }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>No hay estudiantes para mostrar.</p>
    </div>
  </div>
</template>

<script>
import { consultarTodosFachada } from "@/clients/MatriculaClient.js";
export default {
  data() {
    return {
      estudiantes: [],
    };
  },
  methods: {
    async consultarTodos() {
      this.estudiantes = await consultarTodosFachada();
      this.estudiante = null;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background: #f5f5f5;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 600;
}

.boton {
  text-align: center;
  margin-bottom: 20px;
}

button {
  background: #4a90e2;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #357abd;
}

button:active {
  background: #2868a8;
}

.tabla {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.tabla th {
  background: #4a90e2;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px solid #357abd;
}

.tabla td {
  padding: 12px;
  text-align: left;
  color: #333;
  font-size: 14px;
  border-bottom: 1px solid #e0e0e0;
}

.tabla tbody tr {
  transition: background-color 0.2s;
}

.tabla tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.tabla tbody tr:hover {
  background-color: #e8f4fd;
}

.tabla tbody tr:last-child td {
  border-bottom: none;
}

.tabla p {
  text-align: center;
  color: #666;
  font-size: 16px;
  padding: 30px 20px;
}
</style>