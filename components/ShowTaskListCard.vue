<template>
  <div>
    <v-list class="margin-top">
      <v-list-item v-for="(task, index) in tasks" :key="task.id">
        <p class="list-index">{{ index + 1 }}</p>

        <v-list-item-content>
          <v-list-item-title v-text="task.title"></v-list-item-title>
          <v-list-item-subtitle v-text="task.date"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const tasks = [
      {
        id: 1,
        color: "blue",
        icon: "mdi-clipboard-text",
        date: "Jan 20, 2014",
        title: "Vacation itinerary",
      },
      {
        id: 2,
        color: "amber",
        icon: "mdi-gesture-tap-button",
        date: "Jan 10, 2014",
        title: "Kitchen remodel",
      },
    ];
    return {
      tasks,
    };
  },
});
</script>

<style scoped>
.margin-top {
  margin-top: 40px;
}
.list-index {
  padding-right: 25px;
  padding-top: 15px;
}
</style>
