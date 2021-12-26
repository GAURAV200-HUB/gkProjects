<template>
  <div class="add-todo-component">
    <v-container>
      <div class="mt-5">
        <v-alert
          v-model="added"
          type="success"
          outlined
          border="left"
          dense
          dismissible
          transition="scale-transition"
          >Your Todo List has been updated.</v-alert
        >
      </div>
      <v-form ref="todoForm" @submit.prevent="addTodo()">
        <v-text-field
          v-model="newTodo"
          outlined
          label="Todo"
          placeholder="Add Todo Here!"
          dense
          single-line
          :rules="rules.todo"
        ></v-text-field>
        <div>
          <v-btn color="primary" type="submit">Add</v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      added: false,
      rules: {
        todo: [(v) => !!v || 'To Do is Required'],
      },
    }
  },
  methods: {
    addTodo() {
      this.$refs.todoForm.validate()
      if (!this.$refs.todoForm.validate()) {
        return
      }
      try {
        this.$store.commit('todo/addTodos', this.newTodo)
        this.$refs.todoForm.reset()
        this.added = !this.added
      } catch (error) {}
    },
  },
}
</script>

<style></style>
