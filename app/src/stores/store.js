import {createStore} from "vuex";
import app from "./app.js";
import devices from "./devices.js";
import ports from "./ports.js";
import cables from "./cables.js";
import jobs from "./jobs.js";

const store = createStore({
    modules: {
        app,
        devices,
        ports,
        cables,
        jobs,
    },
});

export default store