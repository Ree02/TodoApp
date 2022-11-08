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
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const statusList = ["未完了", "完了", "期限切れ"];

    const tasks = [
      {
        id: 1,
        title: "書類提出",
        created: "2022/8/20 15:00",
        deadlineDate: "2022/8/20 15:00",
        status: 0,
      },
      {
        id: 2,
        title: "買い物",
        created: "2022/8/20 15:00",
        deadlineDate: "2022/8/20 23:00",
        status: 1,
      },
      {
        id: 3,
        title: "お風呂掃除",
        created: "2022/8/20 15:00",
        deadlineDate: "2022/8/15 09:00",
        status: 2,
      },
    ];

    const taskStatus = (statusId: number) => {
      return statusList[statusId];
    };
    return {
      statusList,
      tasks,
      taskStatus,
    };
  },
});
</script>

<style scoped></style>
