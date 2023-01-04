import {default as Api} from "../api/mock.js";

export default {
    namespaced: true,
    state: () => ({
        devices: [],
        device: null
    }),
    getters: {},
    mutations: {
        setDevices (state, payload) {
            state.devices = payload;
        },
        setDevice (state, payload) {
            state.device = payload;
        },
    },
    actions: {
        async getDevices (context, payload = {}) {
            context.commit('setDevices', await Api.devices());
        },
        async getDevice (context, { id }) {
            context.commit('setDevice', await Api.device(id));
        },
        clearDevice (context) {
            context.commit('setDevice', null);
        },
    },
}