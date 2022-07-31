<template>
  <div class="container">
    <v-text-field label="新規タスク" :rules="rules" hide-details="auto" />
    <v-btn>追加</v-btn>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.container {
  display: flex;
  align-items: baseline;
}
</style>
