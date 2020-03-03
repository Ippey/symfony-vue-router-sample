<template>
    <div class="container">
        <div class="row">
            <h2>TODOリスト！</h2>
        </div>
        <div class="form-group">
            <label for="title">タスク</label>
            <input id="title" type="text" class="form-control" name="title" v-model="title">
        </div>
        <div class="form-group">
            <button @click="add">登録</button>
        </div>
        <ul class="list-group">
            <li v-for="task in tasks" class="list-group-item d-flex justify-content-between align-items-center">
                {{ task.title }}
                <button class="btn btn-danger" @click="deleteTask(task)">削除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tasks",
        data() {
            return {
                title: null
            };
        },
        computed: {
            tasks() {
                console.log(this.$store.state.task.tasks);
                return this.$store.state.task.tasks;
            }
        },
        methods: {
            async getTasks() {
                await this.$store.dispatch('fetchTasks');
            },
            async add()
            {
                await this.$store.dispatch('addTask', {title: this.title});
            },
            async deleteTask(task)
            {
                await this.$store.dispatch('deleteTask', task);
            }
        },
        mounted() {
            this.getTasks();
            console.log(this.$store.state.task.tasks);
        }
    }
</script>

<style scoped>

</style>