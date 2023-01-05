import {createStore} from "vuex";
import app from "./app.js";
import notifications from "./notifications.js";
import devices from "./devices.js";
import ports from "./ports.js";
import cables from "./cables.js";
import jobs from "./jobs.js";

const store = createStore({
    modules: {
        app,
        notifications,
        devices,
        ports,
        cables,
        jobs,
    },
});

export default store