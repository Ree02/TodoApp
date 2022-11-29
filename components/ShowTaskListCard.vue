<template>
	<div>
		<v-container>
			<v-simple-table fixed-header height="400px">
				<template>
					<thead>
						<tr>
							<th class="text-left">タスク名</th>
							<th class="text-left">期限</th>
							<th class="text-left">状態</th>
                            <th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="task in tasks" :key="task.id">
							<td>{{ task.title }}</td>
							<td>{{ task.deadlineDate }}</td>
							<td>
								<v-btn outlined>{{ taskStatus(task.status) }}</v-btn>
							</td>
							<td>
								<v-btn outlined color="error">EDIT</v-btn>
							</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</v-container>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";

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
});
</script>