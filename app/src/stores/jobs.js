import {default as Api} from "../api/mock.js";
import Job from "../models/job.js";

export default {
    namespaced: true,
    state: () => ({
        jobs: [],
    }),
    getters: {},
    mutations: {
        setJobs (state, payload) {
            state.jobs = payload;
        },
    },
    actions: {
        async getJobs (context, payload = {}) {
            const jobs = await Api.jobs()
            context.commit('setJobs', jobs.map(job => new Job(job)));
        },
    },
}