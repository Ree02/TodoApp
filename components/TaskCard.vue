<template>
	<div class="task-card">
        <div class="task-id">{{ task.id }}</div>
		<div class="task-title">{{ task.title }}</div>
		<div class="task-deadlineDate">{{ task.deadlineDate }}</div>
		<button class="btn btn--red" type="button">{{ taskStatus(task.status) }}</button>
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
	background-color: #3B3936;
	margin: 10px 10px 0px 10px;
	padding: 13px;
}
.btn {
	border: solid 1px;
    padding: 5px 15px;
    border-radius: 5px;
}
.btn--red {
	color: #486966;
	border-color: #486966;
}
.btn--red:hover {
	background-color: #4869662d;
}
</style>