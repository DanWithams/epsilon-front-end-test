import {createStore} from "vuex";
import app from "./app.js";
import devices from "./devices.js";
import ports from "./ports.js";

const store = createStore({
    modules: {
        app,
        devices,
        ports
    },
});

export default store