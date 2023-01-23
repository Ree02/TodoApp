import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            tasks: [
                {
                    id: "1",
                    title: "書類提出",
                    project: "生活",
                    created: new Date(2020, 8, 20, 21, 10, 5),
                    deadlineDate: new Date(2020, 8, 21, 21, 10, 5),
                    status: 0,
                },
                {
                    id: "2",
                    title: "買い物",
                    project: "生活",
                    created: new Date(2021, 8, 20, 21, 10, 5),
                    deadlineDate: new Date(2021, 8, 21, 21, 10, 5),
                    status: 1,
                },
                {
                    id: "3",
                    title: "お風呂掃除",
                    project: "生活",
                    created: new Date(2022, 8, 20, 21, 10, 5),
                    deadlineDate: new Date(2022, 8, 21, 21, 10, 5),
                    status: 2,
                },
                {
                    id: "4",
                    title: "ごみすて",
                    project: "生活",
                    created: new Date(2023, 1, 20, 21, 10, 5),
                    deadlineDate: new Date(2023, 1, 21, 21, 10, 5),
                    status: 2,
                },
            ],
        }),
        getters: {
            getTasks(state) {
                return state.tasks;
            },
        },
        mutations: {
            addTask(state, newTask) {
                const now = new Date();
                state.tasks.unshift({
                    id: getUniqueStr(),
                    title: newTask.title,
                    project: newTask.project,
                    created: now,
                    deadlineDate: newTask.deadlineDate,
                    status: newTask.status,
                });
            },
        },
    });
};
export default createStore;

const getUniqueStr = () => {
    return (
        new Date().getTime().toString() +
        Math.floor(4 * Math.random()).toString()
    );
}