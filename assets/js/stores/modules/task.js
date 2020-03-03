import axios from 'axios';

const task = {
    state: {
        tasks: []
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        setTasks(state, list) {
            state.tasks = list;
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1);
        }
    },
    actions: {
        async fetchTasks({commit}) {
            const list = await axios.get('/api/tasks', {
                data: {},
                headers: {'Accept': 'application/json'}
            }).then(res => {
                commit('setTasks', res.data);
            });
        },
        async addTask({state, commit}, task) {
            console.log(task);
            await axios.post('/api/tasks', task, {headers: {'Accept': 'application/json'}})
                .then(res => {
                    commit('addTask', res.data);
                });
        },
        async deleteTask({state, commit}, task) {
            const index = state.tasks.indexOf(task);
            await axios.delete('/api/tasks/' + task.id, {headers: {'Accept': 'application/json'}})
                .then(res => {
                    commit('deleteTask', index);
                });
        }
    }
};

export default task;