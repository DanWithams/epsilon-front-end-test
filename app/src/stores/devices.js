import {default as Api} from "../api/mock.js";
import Device from "../models/device.js";

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
            console.log(payload);
            state.device = payload;
        },
    },
    actions: {
        async getDevices (context, payload = {}) {
            const devices = await Api.devices()
            context.commit('setDevices', devices.map(device => new Device(device)));
        },
        async getDevice (context, { id }) {
            context.commit('setDevice', new Device(await Api.device(id)));
        },
        clearDevice (context) {
            context.commit('setDevice', null);
        },
    },
}