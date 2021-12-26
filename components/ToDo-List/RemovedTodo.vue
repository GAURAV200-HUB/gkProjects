<template>
  <div class="removed-todo component">
    <v-container>
      <div v-if="deletedTodos.length === 0">
        <v-alert type="warning" outlined border="left" dense
          >You did't complete any Activity Today</v-alert
        >
      </div>
      <v-card-subtitle v-for="(delTodo, index) in deletedTodos" :key="index" class="pa-0 ma-0">
        <v-card-text class="error--text">
          {{ index + 1 }}. <span>{{ delTodo }}</span>
        </v-card-text>
      </v-card-subtitle>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    deletedTodos() {
      return this.$store.state.todo.deletedTodos
    },
  },
}
</script>

<style></style>
