<template>
    <div>
        <v-btn class="ma-2, btn">
            <v-icon left>
                mdi-plus
            </v-icon>
            タスクを追加
        </v-btn>
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
    background-color: #FFFFFF;
    border-radius: 2%;
    margin: 15px 10px;
}
.add-button {
    margin: 15px 10px;
    padding: 5px 82px;
}
</style>
