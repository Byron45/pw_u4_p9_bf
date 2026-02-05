<template>
  <div>
    <ActualizarParcial />
  </div>
</template>

<script>
import { getToken } from "@/clients/AutorizationClient";
import { setToken } from "@/clients/MatriculaClient";
import ActualizarParcial from "@/components/ActualizarParcial.vue";
export default {
  components: {
    ActualizarParcial,
  },
  async mounted() {
    try {
      const tokenData = await getToken("jahir78", "Elpepe72");
      console.log("Token obtenido:", tokenData);
      setToken(tokenData.accessToken);
    } catch (error) {
      console.error("Error al obtener el token:", error);
    }
  },
};
</script>

<style>
</style>