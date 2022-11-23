<template>
  <div>
    <v-container>
      <v-simple-table fixed-header height="400px">
        <template>
          <thead>
            <tr>
              <th class="text-left">タスク名</th>
              <th class="text-left">期限</th>
              <th class="text-left">状態</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in tasks" :key="task.id">
              <td>{{ task.title }}</td>
              <td>{{ task.deadlineDate }}</td>
              <td>
                <v-btn outlined>{{ taskStatus(task.status) }}</v-btn>
              </td>
              <td><v-btn outlined color="error">編集</v-btn></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";
import useStore from '../store'

export default defineComponent({
  setup() {
    const store = useStore()
    const tasks = computed(() => store.state.tasks)
    const statusList = ["未完了", "完了", "期限切れ"];
    const taskStatus = (statusId: number) => {
      return statusList[statusId];
    };

    return {
      tasks,
      statusList,
      taskStatus,
    };
  },
});
</script>

<style scoped></style>
