<template>
  <div class="login">
    <h2>Login</h2>
    <div v-if="mensajeError" class="error-msg">{{ mensajeError }}</div>
    <input v-model="usuario" type="text" placeholder="Usuario" />
    <input
      v-model="password"
      type="password"
      placeholder="Contraseña"
      @keyup.enter="login"
    />
    <button @click="login" :disabled="cargando">
      {{ cargando ? "Cargando..." : "Entrar" }}
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: "",
      password: "",
      cargando: false,
      mensajeError: "",
      URL_AUTH: "http://localhost:8082/auth/token",
    };
  },
  methods: {
    async login() {
      if (!this.usuario || !this.password) {
        this.mensajeError = "Por favor ingresa usuario y contraseña";
        return;
      }

      this.cargando = true;
      this.mensajeError = "";

      try {
        const response = await axios.get(this.URL_AUTH, {
          params: {
            user: this.usuario,
            password: this.password,
          },
        });

        console.log("Token generado:", response.data);

        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("Esta Autenticado", "true");

        console.log("Login exitoso");

        this.$router.push({ name: "home" });
      } catch (error) {
        console.error("Error en login:", error);
        this.mensajeError =
          "Error de autenticación. Verifica tus credenciales.";
      } finally {
        this.cargando = false;
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #14cb6f;
  border-radius: 8px;
  text-align: center;
}
input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 8px;
  cursor: pointer;
  background-color: #14cb6f;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
}
button:hover:not(:disabled) {
  background-color: #12b562;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.error-msg {
  color: #ff0000;
  background-color: #ffe6e6;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 14px;
}
</style>