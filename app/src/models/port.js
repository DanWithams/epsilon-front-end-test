import BaseModel from "./base.js";

export default class Port extends BaseModel {

    setDevice(device) {
        this.device = device;
    }

    fullyQualifiedName() {
        return `${this.device.deviceHeader}-${this.portName}`;
    }
}