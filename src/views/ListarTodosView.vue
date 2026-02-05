<template>
  <div>
    <ListarTodos />
  </div>
</template>

<script>
import { getToken } from "@/clients/AutorizationClient";
import { setToken } from "@/clients/MatriculaClient";
import ListarTodos from "@/components/ListarTodos.vue";
export default {
  components: {
    ListarTodos,
  },
  async mounted() {
    try {
      const tokenData = await getToken("jahir78", "Elpepe72");
      console.log("Token obtenido:", tokenData);

      setToken(tokenData.accessToken);
      this.cargando = false;
    } catch (error) {
      console.error("Error al obtener el token:", error);
      this.error =
        "Error de autenticación. Por favor, verifica las credenciales.";
      this.cargando = false;
    }
  },
};
</script>

<style>
</style>