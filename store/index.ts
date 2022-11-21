import Vuex from "vuex";

const createStore = () => {
	return new Vuex.Store({
		state: () => ({
			tasks: [
				{
					id: 1,
					title: "書類提出",
					created: "2022/8/20 15:00",
					deadlineDate: "2022/8/20 15:00",
					status: 0,
				},
				{
					id: 2,
					title: "買い物",
					created: "2022/8/20 15:00",
					deadlineDate: "2022/8/20 23:00",
					status: 1,
				},
				{
					id: 3,
					title: "お風呂掃除",
					created: "2022/8/20 15:00",
					deadlineDate: "2022/8/15 09:00",
					status: 2,
				},
			],
		}),
	});
};
export default createStore;
