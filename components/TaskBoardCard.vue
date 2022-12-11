<template>
	<div class="board">
		<div class="status-name">
			{{ statusName.value }}
			statusName()
		</div>
		<InputTaskCard @onClick="addTask" />
		<div v-for="task in tasksByStatus" :key="task.id">
			<TaskCard :task="task" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";
import useStore from '../store';
import moment from 'moment';
import InputTaskCard from "~/components/InputTaskCard.vue";

export default defineComponent({
	components: {
		InputTaskCard
	},
	props: {
		status: {
			type: Number,
			default: 0
		}
	},
	setup(props) {
		const store = useStore();
		const tasks = computed(() => store.getters.getTasks)
		const tasksByStatus = tasks.value.filter(task => task.status == props.status);
		const addTask = (taskTitle: string) => {
			const now = moment().format();
			const newTask = {
				title: taskTitle,
				deadlineDate: now,
				status: props.status
			};
			console.log(newTask);
			if (taskTitle != null) {
				store.commit('addTask', newTask)
			}
		}
		const statusNameObj = [
			{
				value: "TODO",
				color: "status-name--green"
			},
			{
				value: "INPROGRESS",
				color: "status-name--yellow"
			},
			{
				value: "DONE",
				color: "status-name--red"
			}
		];
		const statusName = computed(() => {
			if (statusNameObj[props.status] == undefined) {
				statusName.value = "undefined"
				statusName.color = "status-name--undefined"
			}
			else {
				statusName.color = statusNameObj[props.status].color
				statusName.value = statusNameObj[props.status].value
			}
		});
		return {
			tasks,
			tasksByStatus,
			addTask,
			statusNameObj,
			statusName
		}
	}
});
</script>

<style scoped>
.board {
	width: 40%;
	margin: 0 5px 0 5px;
	padding-bottom: 20px;
	border-radius: 3px;
	background-color: #F2F1EF;
}
.status-name {
	border-radius: 3px 3px 0 0;
}
.status-name--green {
	background-color: #267365;
}
.status-name--yellow {
	background-color: #F29F05;
}
.status-name--red {
	background-color: #F23030;
}
</style>