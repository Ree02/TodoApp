<template>
	<div class="task-card">
        <div class="task-id">{{ task.id }}</div>
		<div class="task-title">{{ task.title }}</div>
		<div class="task-deadlineDate">{{ task.deadlineDate }}</div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
    props: {
        task: {
            type: Object,
            required: true
        },
        statusList: {
			type: Array,
			default: ["TODO", "INPROGRESS", "DONE"]
		},
    },
    setup(props) {
		const taskStatus = (statusId: number) => {
			if (-1 < statusId && statusId < props.statusList.length) {
				return props.statusList[statusId];
			}
			return 'UNKNOWN';
		};

		return {
			taskStatus,
		};
	},
})
</script>


<style scoped>
.task-card {
	background-color: #FFFFFF;
	margin: 10px 10px 0px 10px;
	padding: 13px;
	box-shadow:  0 5.9px 2.5px rgba(0, 0, 0, 0.057);
	border-radius: 2%;
	color: #424242;
}
</style>