class InstanceManager {

    constructor() {
        this.pool = {};
    }

    add(model) {
        if (!this.pool[model.getModelName()]) {
            this.pool[model.getModelName()] = {};
        }
        this.pool[model.getModelName()][model.getId()] = model;
    }

    get(type, id) {
        return this.pool[type] && this.pool[type][id] ? this.pool[type][id] : null;
    }
}

const instanceManager = new InstanceManager();

export default class BaseModel {

    constructor(data = {}) {
        this.hydrate(data);
        this.instanceManager = instanceManager;
        this.instanceManager.add(this);
    }

    getId() {
        return this.id;
    }

    getModelName() {
        throw new Error('This methods needs overriding.');
    }

    hydrate(data) {
        Object.keys(data)
            .forEach(key => this[key] = data[key]);
    }
}
