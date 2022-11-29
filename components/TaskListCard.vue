<template>
	<div>
		<InputTaskCard @onClick="addTask" />
		<ShowTaskListCard :tasks="tasks" :statusList="statusList" />
	</div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "@nuxtjs/composition-api";
import useStore from '../store';
import moment from 'moment';
import InputTaskCard from "~/components/InputTaskCard.vue";
import ShowTaskListCard from "~/components/ShowTaskListCard.vue";

export default defineComponent({
	components: {
		InputTaskCard,
		ShowTaskListCard
	},
	setup() {
		const store = useStore();
		const tasks = computed(() => store.getters.getTasks)
		const statusList = ["TODO", "INPROGRESS", "DONE" ]
		const addTask = (taskTitle: string) => {
			const now = moment().format();
			const newTask = {
				title: taskTitle,
				deadlineDate: now,
				status: 0
			};
			if (taskTitle != null) {
				store.commit('addTask', newTask)
			}
		}

		return {
			tasks,
			statusList,
			addTask
		}
	}
});
</script>
