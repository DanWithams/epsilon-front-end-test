import BaseModel from "./base.js";
import Port from "./port.js";

export default class Cable extends BaseModel {

    constructor(data = {}) {
        super(data);
        if (this.aPort) {
            this.aPort = this.instanceManager.get('Port', this.aPort.pId) || new Port(this.aPort);
        }
        if (this.zPort) {
            this.zPort = this.instanceManager.get('Port', this.zPort.pId) || new Port(this.zPort);
        }
        this.generateName();
    }

    generateName() {
        this.name = `${this.aPort.fullyQualifiedName}-${this.zPort.fullyQualifiedName}`;
    }

    otherPort(port) {
        return this.aPort.pId === port.pId ? this.zPort : this.aPort;
    }
}