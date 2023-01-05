import {default as Api} from "../api/mock.js";
import Cable from "../models/cable.js";

export default {
    namespaced: true,
    state: () => ({
        cables: [],
    }),
    getters: {},
    mutations: {
        setCables (state, payload) {
            console.log(payload);
            state.cables = payload;
        },
    },
    actions: {
        async getCables (context, payload = {}) {
            const cables = await Api.cables()
            context.commit('setCables', cables.map(cable => new Cable(cable)));
        },
    },
}