import {default as Api} from "../api/mock.js";
import Device from "../models/device.js";

export default {
    namespaced: true,
    state: () => ({
        ports: [],
        port: null
    }),
    getters: {},
    mutations: {
        setPorts (state, payload) {
            state.ports = payload;
        },
        setPort (state, payload) {
            state.port = payload;
        },
    },
    actions: {
        async getPorts (context, payload = {}) {
            const ports = [];
            const devices = await Api.devices();
            devices.map(device => new Device(device))
                .forEach(device => device.ports.forEach(port => ports.push(port)));

            context.commit('setPorts', ports);
        },
        async getPort (context, { id }) {
            context.commit('setPort', await Api.port(id));
        },
        clearPort (context) {
            context.commit('setPort', null);
        },
    },
}