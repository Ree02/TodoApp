<template>
	<div class="board">
		<div class="status-name" :class='`color--${ statusName.toLowerCase() }`'>
			{{ statusName }}
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
		type Task = {
			id: string,
            title: string,
            created: string,
            deadlineDate: string,
            status: number,
		}
		const store = useStore();
		const tasks = computed(() => store.getters.getTasks)
		const tasksByStatus = tasks.value.filter((task: Task) => task.status == props.status);
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
		const statusNameObj = ["TODO", "INPROGRESS", "DONE"];
		const statusName = computed(() => {
			return statusNameObj[props.status] == undefined ? "UNDEFINED" : statusNameObj[props.status];
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
.color--todo {
	background-color: #267365;
}
.color--inprogress {
	background-color: #F29F05;
}
.color--done {
	background-color: #F23030;
}
</style>