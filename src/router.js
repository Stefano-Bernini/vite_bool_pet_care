import { createRouter, createWebHistory } from 'vue-router';

import AboutUs from './pages/AboutUs.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/aboutus',
            name: 'aboutus',
            component: AboutUs
        }
    ]
});

export { router };