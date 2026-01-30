<template>
  <div class="container">
    <h1>Actualizar Estudiante</h1>

    <div class="form-section">
      <div class="form-group">
        <label for="id">ID:</label>
        <input
          type="number"
          id="id"
          v-model="estudiante.id"
          placeholder="Ingrese el ID del estudiante"
          class="input-field"
          :class="{ 'input-error': errors.id }"
        />
        <span v-if="errors.id" class="error-text">{{ errors.id }}</span>
      </div>

      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          v-model="estudiante.nombre"
          placeholder="Ingrese el nombre"
          class="input-field"
          :class="{ 'input-error': errors.nombre }"
        />
        <span v-if="errors.nombre" class="error-text">{{ errors.nombre }}</span>
      </div>

      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          v-model="estudiante.apellido"
          placeholder="Ingrese el apellido"
          class="input-field"
          :class="{ 'input-error': errors.apellido }"
        />
        <span v-if="errors.apellido" class="error-text">{{
          errors.apellido
        }}</span>
      </div>

      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="fechaNacimiento"
          v-model="estudiante.fechaNacimiento"
          class="input-field"
          :class="{ 'input-error': errors.fechaNacimiento }"
        />
        <span v-if="errors.fechaNacimiento" class="error-text">{{
          errors.fechaNacimiento
        }}</span>
      </div>

      <div class="form-group">
        <label for="genero">Genero:</label>
        <input
          type="text"
          id="genero"
          v-model="estudiante.genero"
          placeholder="Ingrese el genero"
          class="input-field"
          :class="{ 'input-error': errors.genero }"
        />
        <span v-if="errors.genero" class="error-text">{{ errors.genero }}</span>
      </div>

      <div class="form-group">
        <label for="provincia">Provincia:</label>
        <input
          type="text"
          id="provincia"
          v-model="estudiante.provincia"
          placeholder="Ingrese la provincia"
          class="input-field"
          :class="{ 'input-error': errors.provincia }"
        />
        <span v-if="errors.provincia" class="error-text">{{
          errors.provincia
        }}</span>
      </div>

      <div class="boton">
        <button @click="actualizar">Actualizar</button>
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
import { actualizarFachada } from "@/clients/MatriculaClient.js";
export default {
  data() {
    return {
      estudiante: {
        id: null,
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        genero: "",
        provincia: "",
      },
      errors: {
        id: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        genero: "",
        provincia: "",
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    validateForm() {
      this.errors = {
        id: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        genero: "",
        provincia: "",
      };

      let isValid = true;

      if (!this.estudiante.id || this.estudiante.id <= 0) {
        this.errors.id = "El ID es obligatorio y debe ser mayor a 0";
        isValid = false;
      }

      if (!this.estudiante.nombre || this.estudiante.nombre.trim() === "") {
        this.errors.nombre = "El nombre es obligatorio";
        isValid = false;
      }

      if (!this.estudiante.apellido || this.estudiante.apellido.trim() === "") {
        this.errors.apellido = "El apellido es obligatorio";
        isValid = false;
      }

      if (
        !this.estudiante.fechaNacimiento ||
        this.estudiante.fechaNacimiento.trim() === ""
      ) {
        this.errors.fechaNacimiento = "La fecha de nacimiento es obligatoria";
        isValid = false;
      }

      if (!this.estudiante.genero || this.estudiante.genero.trim() === "") {
        this.errors.genero = "El genero es obligatorio";
        isValid = false;
      }

      if (
        !this.estudiante.provincia ||
        this.estudiante.provincia.trim() === ""
      ) {
        this.errors.provincia = "La provincia es obligatoria";
        isValid = false;
      }

      return isValid;
    },

    async actualizar() {
      this.successMessage = "";
      this.errorMessage = "";

      if (!this.validateForm()) {
        this.errorMessage =
          "Por favor, complete todos los campos obligatorios.";
        return;
      }

      try {
        const id = this.estudiante.id;

        const estudianteActualizado = {
          nombre: this.estudiante.nombre,
          apellido: this.estudiante.apellido,
          fechaNacimiento: `${this.estudiante.fechaNacimiento}T00:00:00`,
          genero: this.estudiante.genero,
          provincia: this.estudiante.provincia,
        };

        console.log("ID a actualizar:", id);
        console.log("Datos a enviar:", estudianteActualizado);

        const resultado = await actualizarFachada(id, estudianteActualizado);
        console.log("Resultado de actualización:", resultado);

        this.successMessage = `Estudiante ${this.estudiante.nombre} ${this.estudiante.apellido} actualizado correctamente.`;

        setTimeout(() => {
          this.estudiante = {
            id: null,
            nombre: "",
            apellido: "",
            fechaNacimiento: "",
            genero: "",
            provincia: "",
          };
        }, 2000);

        setTimeout(() => {
          this.successMessage = "";
        }, 5000);
      } catch (err) {
        this.errorMessage =
          "Ocurrió un error al actualizar el estudiante. Por favor, intente nuevamente.";

        console.error("Error al actualizar estudiante:", err);

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

.input-error {
  border-color: #e74c3c !important;
}

.error-text {
  display: block;
  color: #e74c3c;
  font-size: 13px;
  margin-top: 5px;
}

.boton {
  margin-top: 20px;
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
