import Vue from 'vue';
import VueRouter from "vue-router";

import Home from "./components/Home";
import Tasks from "./components/Tasks";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/tasks', name: 'tasks', component: Tasks}
    ]
});

export default router;