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
	background-color: #F2E8DF;
	margin: 10px 10px 0px 10px;
	padding: 13px;
	box-shadow:  0 5.9px 2.5px rgba(0, 0, 0, 0.057);
	border-radius: 2%;
	color: #000000;
}
.btn {
	border: solid 1px;
    padding: 5px 15px;
    border-radius: 5px;
}
.btn--red {
	background-color: #A52502;
	color: #F2E8DF;
}
.btn--red:hover {
	background-color: #801d02;
}
</style>