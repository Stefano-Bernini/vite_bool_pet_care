import { createRouter, createWebHistory } from 'vue-router';

import AboutUs from './pages/AboutUs.vue';
import AppMain from './pages/AppMain.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppMain
        },

        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        }
    ]
});

export { router };