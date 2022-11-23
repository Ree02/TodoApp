<template>
  <div class="container">
    <v-text-field label="新規タスク" :rules="rules" hide-details="auto" v-model="taskTitleComputed"/>
    <v-btn @click="add">追加</v-btn>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "@nuxtjs/composition-api";
import useStore from "../store"

export default defineComponent({
  setup() {
    const store = useStore()
    const taskTitle = ref("")
    const taskTitleComputed = computed({
      get: () => taskTitle.value,
      set: (value) => (taskTitle.value = value),
    })

    const add = () => {
      if (taskTitle != null) {
        store.commit('addTask', taskTitle.value)
      }
    }

    const tasks = computed(() => store.state.tasks)

    return {
      taskTitle,
      taskTitleComputed,
      add,
      tasks,
    }
  }

})
</script>

<style scoped>
.container {
  display: flex;
  align-items: baseline;
}
</style>
