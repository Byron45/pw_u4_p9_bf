<template>
  <div class="container">
    <h1>Borrar Estudiante</h1>

    <div class="form-section">
      <div class="form-group">
        <label for="id">ID:</label>
        <input
          id="id"
          type="number"
          v-model="id"
          placeholder="Ingrese ID del estudiante a borrar"
          class="input-field"
        />
      </div>

      <div class="boton">
        <button @click="borrar(id)">Borrar Estudiante</button>
      </div>
    </div>

    <div v-if="successMessage" class="success-card">
      <div class="success-icon">Exito</div>
      <h3>¡Éxito!</h3>
      <p>{{ successMessage }}</p>
    </div>

    <div v-if="errorMessage" class="error-card">
      <div class="error-icon">Error</div>
      <h3>Error</h3>
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { borrarFachada } from "@/clients/MatriculaClient";
export default {
  data() {
    return {
      id: null,
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async borrar(id) {
      this.successMessage = "";
      this.errorMessage = "";

      if (!id || id <= 0) {
        this.errorMessage = "El ID es obligatorio y debe ser mayor a 0.";
        return;
      }

      try {
        await borrarFachada(id);
        this.successMessage = `Estudiante con ID ${id} eliminado correctamente.`;
        this.id = null;

        setTimeout(() => {
          this.successMessage = "";
        }, 5000);
      } catch (err) {
        this.errorMessage =
          "Ocurrió un error al borrar el estudiante. Por favor, intente nuevamente.";

        console.error("Error al borrar estudiante:", err);

        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      }
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

.form-section {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #555;
  font-size: 14px;
  margin-bottom: 8px;
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
  margin-top: 20px;
  text-align: center;
}

button {
  background: #e74c3c;
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
  background: #c0392b;
}

button:active {
  background: #a93226;
}

.success-card {
  background: #27ae60;
  color: white;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.success-icon {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.success-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.success-card p {
  font-size: 0.95rem;
  line-height: 1.5;
}

.error-card {
  background: #e74c3c;
  color: white;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.error-icon {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.error-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.error-card p {
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>