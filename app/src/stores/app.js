import {default as Api} from "../api/mock.js";

export default {
    namespaced: true,
    state: () => ({
        darkMode: false,
    }),
    getters: {},
    mutations: {
        setDarkMode (state, payload) {
            state.darkMode = payload;
        },
        toggleDarkMode (state) {
            state.darkMode = !state.darkMode
        },
    },
    actions: {
        setDarkMode (context, payload = {}) {
            context.commit('setDarkMode', payload);
        },
        toggleDarkMode (context, payload = {}) {
            context.commit('toggleDarkMode');
        },
    },
}