export default {
    namespaced: true,
    state: () => ({
        cables: [],
    }),
    getters: {},
    mutations: {
        addCable (state, payload) {
            state.cables.push(payload);
        },
        removeCable (state, { id }) {
            state.cables = state.cables.filter(cable => cable.id !== id);
        },
    },
    actions: {
        addCable (context, payload = {}) {
            context.commit('addCable', payload);
        },
        removeCable (context, payload) {
            context.commit('removeCable', payload);
        },
    },
}