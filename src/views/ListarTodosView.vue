<template>
  <div class="listar-todos-view">
    <ListarTodos />
  </div>
</template>

<script>
import ListarTodos from "@/components/ListarTodos.vue";

export default {
  name: "ListarTodosView",
  components: {
    ListarTodos,
  },
};
</script>

<style scoped>
.listar-todos-view {
  padding: 20px;
}
</style>