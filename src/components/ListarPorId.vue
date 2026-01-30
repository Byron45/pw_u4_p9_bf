<template>
  <div class="container">
    <h1>Consultar Por ID</h1>
    <div class="search-section">
      <input
        type="text"
        v-model="id"
        placeholder="Ingrese el ID del estudiante"
        class="input-field"
      />
      <div class="boton">
        <button @click="consultarPorId">Consultar</button>
      </div>
    </div>
    <div v-if="estudiante" class="details-card">
      <h2>Detalles del Estudiante</h2>
      <div class="detail-item">
        <span class="detail-label">ID:</span>
        <span class="detail-value">{{ estudiante.id }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Nombre:</span>
        <span class="detail-value">{{ estudiante.nombre }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Apellido:</span>
        <span class="detail-value">{{ estudiante.apellido }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Fecha de Nacimiento:</span>
        <span class="detail-value">{{ estudiante.fechaNacimiento }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Genero:</span>
        <span class="detail-value">{{ estudiante.genero }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Provincia:</span>
        <span class="detail-value">{{ estudiante.provincia }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarPorIdFachada } from "@/clients/MatriculaClient.js";
export default {
  data() {
    return {
      estudiante: null,
      id: "",
    };
  },
  methods: {
    async consultarPorId(id) {
      this.estudiante = await consultarPorIdFachada(this.id);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 30px;
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

.search-section {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
  color: #333;
}

.input-field:focus {
  border-color: #4a90e2;
}

.input-field::placeholder {
  color: #999;
}

.boton {
  margin-top: 15px;
  text-align: center;
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

.details-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.details-card h2 {
  color: #4a90e2;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #4a90e2;
  padding-bottom: 10px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  margin-bottom: 10px;
  background: #f9f9f9;
  border-radius: 4px;
  border-left: 3px solid #4a90e2;
}

.detail-item:hover {
  background: #e8f4fd;
}

.detail-label {
  font-weight: 600;
  color: #555;
  font-size: 14px;
}

.detail-value {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}
</style>