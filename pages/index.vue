<template>
    <div class="container">
        <TaskBoardCard :status="1"/>
        <TaskBoardCard :status="2"/>
        <TaskBoardCard :status="3"/>
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