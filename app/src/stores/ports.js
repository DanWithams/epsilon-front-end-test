import {default as Api} from "../api/mock.js";

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
            context.commit('setPorts', await Api.ports(payload.device));
        },
        async getPort (context, { id }) {
            context.commit('setPort', await Api.port(id));
        },
        clearPort (context) {
            context.commit('setPort', null);
        },
    },
}