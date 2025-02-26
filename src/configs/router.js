import { createRouter, createWebHistory } from 'vue-router';

import Main from '../pages/Main.vue'
import Quiz from '../pages/Quiz.vue'
import Results from '../pages/Results.vue'

const routes = [
    { path: '/', name: 'Main', component: Main },
    { path: '/quiz', name: 'Quiz', component: Quiz },
    { path: '/results', name: 'Results', component: Results },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return{
                el: to.hash,
                behavior: 'smooth'
            }
        }
    }
});

export default router;
