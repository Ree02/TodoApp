<template>
    <div>
        <v-btn outlined class="ma-2, btn" :class="`btn-color--${ status }`">
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
    props: {
        status: {
			type: String
		}
    },
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
    border-radius: 2%;
    margin: 15px 10px;
    padding: 0px 60px;
    min-width: 91% !important;
}
.btn-color--todo {
	border: 1px solid #267365;
    color: #267365;
}
.btn-color--inprogress {
    border: 1px solid #F29F05;
    color: #F29F05;
}
.btn-color--done {
    border: 1px solid #F23030;
    color: #F23030;
}
</style>