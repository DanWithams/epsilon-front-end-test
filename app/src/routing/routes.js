import HomePage from "../views/pages/HomePage.vue";
import DevicesPage from "../views/pages/DevicesPage.vue";
import DevicePortsPage from "../views/pages/DevicePortsPage.vue";
import JobsPage from "../views/pages/JobsPage.vue";
import CablesPage from "../views/pages/CablesPage.vue";

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
        name: 'devices.ports',
        path: '/devices/:id/ports',
        component: DevicePortsPage,
        meta: {
            title: 'Device Ports',
            layoutProps: {}
        },
    },
    {
        name: 'cables',
        path: '/cables',
        component: CablesPage,
        meta: {
            title: 'Cables',
            layoutProps: {}
        },
    },
    {
        name: 'jobs',
        path: '/jobs',
        component: JobsPage,
        meta: {
            title: 'Jobs',
            layoutProps: {}
        },
    },
];