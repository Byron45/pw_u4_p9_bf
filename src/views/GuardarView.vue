<template>
  <div><Guardar /></div>
</template>

<script>
import { getToken } from "@/clients/AutorizationClient";
import { setToken } from "@/clients/MatriculaClient";
import Guardar from "@/components/Guardar.vue";
export default {
  components: {
    Guardar,
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