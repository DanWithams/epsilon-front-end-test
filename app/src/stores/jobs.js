import Job from "../models/job.js";

export default {
    namespaced: true,
    state: () => ({
        jobs: [],
    }),
    getters: {},
    mutations: {
        addJob (state, payload) {
            state.jobs.push(
                new Job(payload)
            );
        },
        removeJob (state, { id }) {
            state.jobs = state.jobs.filter(job => job.id !== id);
        },
    },
    actions: {
        addJob (context, payload = {}) {
            context.commit('addJob', payload);
        },
        removeJob (context, payload) {
            context.commit('removeJob', payload);
        },
    },
}