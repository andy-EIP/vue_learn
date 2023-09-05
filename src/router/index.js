import * as VueRouter from 'vue-router';
import TableWidget from '@/widgets/TableWidget.vue';
import Home from '@/widgets/Home.vue';

const routes = [{
    path: '/',
    redirect: '/home',
    children: [
        {
            path: 'home',
            component: Home
        },
        {
            path: 'table-widget',
            component: TableWidget
        }
    ]
}];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;



