import Vuex from "vuex";
import moment from 'moment';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            tasks: [
                {
                    id: "1",
                    title: "書類提出",
                    created: "2022-11-29T22:20:03+09:00",
                    deadlineDate: "2022-11-29T22:20:03+09:00",
                    status: 0,
                },
                {
                    id: "2",
                    title: "買い物",
                    created:"2022-11-29T22:20:03+09:00",
                    deadlineDate: "2022-11-29T22:20:03+09:00",
                    status: 1,
                },
                {
                    id: "3",
                    title: "お風呂掃除",
                    created: "2022-11-29T22:20:03+09:00",
                    deadlineDate: "2022-11-29T22:20:03+09:00",
                    status: 9,
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
                const now = moment().format();
                state.tasks.unshift({
                    id: getUniqueStr(),
                    title: newTask.title,
                    created: now,
                    deadlineDate: newTask.deadlineDate,
                    status: 0,
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