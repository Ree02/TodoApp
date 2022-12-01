<template>
	<div>
		<div v-for="task in tasks" :key="task.id">
			<TaskCard :task="task" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";
import TaskCard from '~/components/TaskCard.vue'

export default defineComponent({
	props: {
		statusList: {
			type: Array,
			default: ["TODO", "INPROGRESS", "DONE"]
		},
		tasks: {
			type: Object
		}
	},
});
</script>