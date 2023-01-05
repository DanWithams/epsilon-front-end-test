export default {
    namespaced: true,
    state: () => ({
        notifications: [],
        pruneInterval: null,
    }),
    getters: {
        notifications(state) {
            return state.notifications.sort((notificationA, notificationB) => notificationA.timestamp > notificationB.timestamp ? -1 : 0)
        }
    },
    mutations: {
        add(state, payload) {
            state.notifications.push(payload);
        },
        remove(state, payload) {
            state.notifications = state.notifications.filter(notification => notification.timestamp !== payload.timestamp);
        },
        prune(state) {
            state.notifications = state.notifications.filter(notification => notification.timestamp > (new Date()).getTime() - (notification.duration || 5 * 1000));
        },
    },
    actions: {
        async add({ commit }, payload) {
            payload.timestamp = (new Date()).getTime();
            payload.disableClose = payload.duration === Infinity ? false : payload.disableClose;
            return commit('add', payload);
        },
        async remove({ commit }, payload) {
            commit('remove', payload);
        },
        async prune({ state, commit }) {
            commit('prune');
        },
    },
}
