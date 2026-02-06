<template>
  <div class="login">
    <h2>Login</h2>
    <input v-model="usuario" type="text" placeholder="Usuario" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="login">Entrar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      password: "",
    };
  },
  methods: {
    login() {
      /*Mandar a Obtener el Token*/
      const TOKEN =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImphaGlyNzgiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzcwMzM2NTQ3LCJleHAiOjE3NzAzNDAxNDcsImp0aSI6ImZhYzIwY2NkLWZjYmItNGU1Yy05NDAzLWEzY2RjYmZhYzExOSJ9.nzJPIfzRsgEvO2FWsIfBiHhk6m0SBCbaQyzKlxC9lvWAIDoZi5vl0KTBdQDaAd8n4TB5rkBo4U0Je2vR_EHCVfU549XxsPpNWi4BWfU-HUGIxM8hQUmjgLfJrNimZ1YtWCz5aLCo9K_pL19pNwrLchofoZugkL8GLVgM0o8sbT81lVtrosfwCcIzT579bf4efB99qwmeuATMOrfWYc59eihu2JCyDHn7O6iZrqRZJHbogHhVD5nZ893s3cyNWBXnjB140iqgkN8yEkdWHl0Ya2cdzLXahWzYvrASxaHQc450JPCnjK2PGAlKJP1qkBF5Sf_YlOLRqSkftlq_WzYxXg";
      if (TOKEN !== null) {
        localStorage.setItem("token", TOKEN);
        localStorage.setItem("Esta Autenticado", true);
      } else {
        console.log("Error de autenticación");
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 300px;
  margin: 100px;
  padding: 20px;
  border: 1px solid #14cb6f;
  border-radius: 8px;
  text-align: center;
}
input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  width: 100%;
  padding: 8px;
  cursor: pointer;
}
</style>