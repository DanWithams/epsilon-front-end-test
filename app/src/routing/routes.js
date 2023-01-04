import HomePage from "../views/pages/HomePage.vue";
import Page2Page from "../views/pages/Page2Page.vue";
import DevicesPage from "../views/pages/DevicesPage.vue";

export default [
    {
        name: 'home',
        path: '/',
        component: HomePage,
        meta: {
            title: 'Dashboard',
            layoutProps: {}
        },
    },
    {
        name: 'devices',
        path: '/devices',
        component: DevicesPage,
        meta: {
            title: 'Devices',
            layoutProps: {}
        },
    },
    {
        name: 'page-2',
        path: '/page-2',
        component: Page2Page,
        meta: {
            layoutProps: {}
        },
    },
];