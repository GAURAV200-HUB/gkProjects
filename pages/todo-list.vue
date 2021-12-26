<template>
  <div class="to-d0-list-page">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" md="8">
          <v-card>
            <v-card-title>My To Do List</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle
              v-for="(todo, index) in todos"
              :key="index"
              class="pa-0 ma-0"
            >
              <v-card-text>
                <v-row no-gutters align="center" justify="center">
                  <v-col cols="9">
                    <strong>{{ index + 1 }}. </strong
                    ><span v-text="todo"></span>
                  </v-col>
                  <v-col cols="3" class="space-evenly">
                    <v-btn
                      :ripple="false"
                      icon
                      @click="removeTodo(todo, index)"
                    >
                      <v-icon color="error">mdi-delete</v-icon>
                    </v-btn>
                    <v-btn :ripple="false" icon @click="editTodo(index)">
                      <v-icon color="primary">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      :ripple="false"
                      icon
                      @click="complteTodo(todo, index)"
                    >
                      <v-icon color="success">mdi-check</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12" lg="6" md="8">
          <v-card>
            <v-card-title>Completed Activity</v-card-title>
            <v-divider></v-divider>
            <div v-if="completedTodos.length === 0" class="pa-4">
              <v-alert
                type="warning"
                dense
                outlined
                border="left"
                transition="scale-transition"
                >Please Complete Your activity</v-alert
              >
            </div>
            <v-card-subtitle
              v-for="(comTodo, index) in completedTodos"
              :key="index"
              class="pa-0 ma-0"
            >
              <v-card-text class="success--text">
                {{ index + 1 }}.
                <span class="text-capitalize" v-text="comTodo"></span>
              </v-card-text>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-dialog v-model="editTodo" max-width="400px">
          <template #activator="{ on }">
            <v-btn color="primary" v-on="on">Edit Todo</v-btn>
          </template>
          <dialog-card>
            <template #content>
              <v-row no-gutters align="center" justify="center">
                <v-col cols="12">
                  <v-tabs
                    v-model="active_tab"
                    active-class="white--text font-weight-bold"
                    centered
                    fixed-tabs
                  >
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <v-tab v-for="(tabs, index) in totoTabs" :key="index">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <v-icon small v-text="tabs.icon"></v-icon>
                        <v-card-text
                          class="pa-0 ml-2"
                          v-text="tabs.title"
                        ></v-card-text>
                      </div>
                    </v-tab>
                  </v-tabs>
                  <v-divider></v-divider>
                  <v-tabs-items v-model="active_tab">
                    <v-tab-item v-for="(tabs, index) in totoTabs" :key="index">
                      <v-card flat>
                        <component :is="tabs.component"></component>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-col>
              </v-row>
            </template>
          </dialog-card>
        </v-dialog>
      </v-row>
      <v-row v-if="added">
        <v-col cols="12" lg="6" md="8"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddTodo from '@/components/ToDo-List/AddTodo.vue'
import RemovedTodo from '@/components/ToDo-List/RemovedTodo.vue'
import DialogCard from '@/components/DialogCard.vue'
export default {
  components: {
    AddTodo,
    RemovedTodo,
    DialogCard,
  },
  data() {
    return {
      active_tab: 0,
      editTodo: false,
      added: false,
      disabled: false,
      totoTabs: [
        {
          icon: 'mdi-plus-circle-outline',
          title: 'Add Todo',
          component: 'AddTodo',
        },
        {
          icon: 'mdi-delete',
          title: 'Removed Todo',
          component: 'RemovedTodo',
        },
      ],
      rules: {
        todo: [(v) => !!v || 'Todo is required'],
      },
    }
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos
    },
    completedTodos() {
      return this.$store.state.todo.completedTodos
    },
  },
  methods: {
    removeTodo(todo, index) {
      this.$store.commit('todo/removeTodos', todo, index)
    },
    complteTodo(todo, index) {
      this.$store.commit('todo/completedTodos', todo, index)
    },
  },
}
</script>

<style></style>
