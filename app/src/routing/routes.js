import HomePage from "../views/pages/HomePage.vue";
import Page2Page from "../views/pages/Page2Page.vue";

export default [
    {
        name: 'home',
        path: '/',
        component: HomePage,
    },
    {
        name: 'page-2',
        path: '/page-2',
        component: Page2Page,
    },
];