<template>
	<div class="task-card">
        <div class="task-id">#{{ task.id }}</div>
		<div class="task-title">{{ task.title }}</div>
		<div class="container">
			<div class="task-deadlineDate">{{ FormatDeadlineDate(task.deadlineDate) }}</div>
			<v-chip class="ma-2">{{ task.project }}</v-chip>
		</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

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
    setup() {
		const FormatDeadlineDate = (date: Date) => {
			let format = "YYYY/MM/DD hh:mm";
			format = format.replace("YYYY", date.getFullYear().toString())
			format = format.replace("MM" , date.getMonth().toString());
			format = format.replace("DD", date.getDate().toString());
			format = format.replace("hh", date.getHours().toString());
			format = format.replace("mm", date.getMinutes().toString());
			return format;
		}
		return {
			FormatDeadlineDate
		};
	},
})
</script>


<style scoped>
.task-card {
	background-color: #FFFFFF;
	margin: 10px 10px 0px 10px;
	padding: 5px 0px 0px 13px;
	box-shadow:  0 5.9px 2.5px rgba(0, 0, 0, 0.057);
	border-radius: 2%;
	color: #424242;
}
.task-id {
	font-size: 13px;
	color: #bebebe;
}
.task-title {

}
.task-deadlineDate {
	padding-top: 15px;
}
.task-projec {

}
.container {
	display: flex;
    justify-content: space-between;
	padding: 0 !important;
}
</style>