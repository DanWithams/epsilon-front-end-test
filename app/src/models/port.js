import BaseModel from "./base.js";
import Job from "./job.js";
import Device from "./device.js";
import Cable from "./cable.js";

export default class Port extends BaseModel {

    constructor(data = {}) {
        super(data);
        if (this.job && !(this.job instanceof Job)) {
            this.job = this.instanceManager.get('Job', this.job.id) || new Job(this.job);

        }
        if (this.cable && !(this.cable instanceof Cable)) {
            this.cable = this.instanceManager.get('Cable', this.cable.id) || new Cable(this.cable);
        }
        if (!(this.device instanceof Device)) {
            this.device =  this.instanceManager.get('Device', this.device.id) || new Device(this.device);
            this.generateFullyQualifiedName();
        }
    }

    getId() {
        return this.pId;
    }

    generateFullyQualifiedName() {
        this.fullyQualifiedName = `${this.device.deviceHeader}-${this.portName}`;
    }
}