<template>
    <div class="container">
        <TaskBoardCard />
        <TaskBoardCard />
        <TaskBoardCard />
    </div>
</template>

<script lang="ts">
import TaskBoardCard from "~/components/TaskBoardCard.vue";
export default { components: { TaskBoardCard } };
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}
</style>