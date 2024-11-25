//DEFINE OUR ROUTING RULES
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component() {
                return import('../components/HomeView.vue')
            }
        },
        {
            path: '/about',
            name: 'About',
            component() {
                return import('../components/AboutView.vue')
            }
        }
    ]
})

export default router
