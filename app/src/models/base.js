class InstanceManager {

    constructor() {
        this.pool = {};
    }

    add(model) {
        if (!this.pool[model.constructor.name]) {
            this.pool[model.constructor.name] = {};
        }
        this.pool[model.constructor.name][model.getId()] = model;
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

    hydrate(data) {
        Object.keys(data)
            .forEach(key => this[key] = data[key]);
    }
}
