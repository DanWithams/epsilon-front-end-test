import BaseModel from "./base.js";
import Port from "./port.js";

export default class Device extends BaseModel {
    constructor(data) {
        super(data);
        this.ports = this.ports.map(port => port instanceof Port ? port : new Port(port));
    }
}