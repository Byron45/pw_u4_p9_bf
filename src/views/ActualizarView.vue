<template>
  <div>
    <Actualizar />
  </div>
</template>

<script>
import { getToken } from "@/clients/AutorizationClient";
import { setToken } from "@/clients/MatriculaClient";
import Actualizar from "@/components/Actualizar.vue";
export default {
  components: {
    Actualizar,
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