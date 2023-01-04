import {createStore} from "vuex";
import devices from "./devices.js";
import ports from "./ports.js";

const store = createStore({
    modules: {
        devices,
        ports
    },
});

export default store