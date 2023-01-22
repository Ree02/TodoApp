<template>
    <div>
        <v-text-field label="新規タスク" hide-details="auto" v-model="taskTitleComputed" />
        <button class="btn" @click="onClick">タスクを追加</button>
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
            context.emit("onClick", taskTitleComputed.value);
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
.btn {
    color: #424242;
    background-color: 	#FFFFFF;
    width: 90%;
    border-radius: 2%;
    margin: 0 10px;
}
</style>
