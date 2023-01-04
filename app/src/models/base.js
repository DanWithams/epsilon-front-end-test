export default class BaseModel {

    constructor(data = {}) {
        this.hydrate(data);
    }

    hydrate(data) {
        Object.keys(data)
            .forEach(key => this[key] = data[key]);
    }
}
