<template>
    <div class="container">
        <v-text-field label="新規タスク" hide-details="auto" v-model="taskTitleComputed" />
        <v-btn @click="onClick">追加</v-btn>
    </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
    setup(_, context) {
        const taskTitle = ref("")
        const taskTitleComputed = computed({
            get: () => taskTitle.value,
            set: (value) => (taskTitle.value = value),
        })
        const onClick = () => {
            context.emit("onClick", taskTitleComputed);
        }

        return {
            taskTitle,
            taskTitleComputed,
            onClick,
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
