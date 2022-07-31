<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" class="toolbar-title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "TodoApp",
    };
  },
};
</script>

<style scoped>
.toolbar-title {
  font-size: 30px;
}
</style>
