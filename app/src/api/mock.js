import {Random} from "../helpers/random.js";
import { v4 as uuidv4 } from 'uuid';

const devices = [
    {
        id: 1,
        deviceHeader: "A",
        ports: [
            {
                pId: 1,
                portName: "P1",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
            {
                pId: 2,
                portName: "P2",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
        ],
    },
    {
        id: 2,
        deviceHeader: "B",
        ports: [
            {
                pId: 11,
                portName: "P1",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
            {
                pId: 12,
                portName: "P2",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null, //P3?
                action: null,
                waitConnect: false
            },
        ],
    },
    {
        id: 3,
        deviceHeader: "C",
        ports: [
            {
                pId: 21,
                portName: "P1",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
            {
                pId: 22,
                portName: "P2",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
            {
                pId: 23,
                portName: "P3",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
            {
                pId: 24,
                portName: "P4",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
        ],
    }].map(device => {
        device.ports = device.ports.map(port => {
            port.device = device;
            return port;
        })
        return device;
    });


const jobs = [];
const cables = [];

const mockRequest = async (returnValue) => {
    return new Promise(
        resolve => setTimeout(
            () => resolve(returnValue),
            Random.integer(20, 80)
        )
    );
}

const getDevices = () => {
    return [].concat(devices);
};

const getDevice = (id) => {
    id = parseInt(id);
    const device = getDevices().filter((device) => device.id === id).shift();
    if (device) {
        return device;
    }
    throw new Error('Device not found')
};

const getPort = (id) => {
    const ports = [];
    getDevices()
        .forEach(
            device => device.ports.forEach(port => ports.push(port))
        );
    const port = ports.filter(port => port.pId === id).shift();
    if (port) {
        return port;
    }
    throw new Error('Port not found');
}

const getJob = (id) => {
    return jobs.filter(job => job.id === id).shift();
}

export default class Mock {
    static async devices() {
        return mockRequest(getDevices());
    }

    static async device(id) {
        return mockRequest(getDevice(id));
    }

    static async port({ id }) {
        return mockRequest(getPort(id));
    }

    static async createJob({ aPort, zPort, type }) {
        const job = {
            id: uuidv4(),
            aPort,
            zPort,
            type,
        };
        jobs.push(job);

        aPort = getPort(aPort.pId);
        zPort = getPort(zPort.pId);

        aPort.job = job;
        zPort.job = job;

        return mockRequest(job);
    }

    static async completeJob({ id }) {
        const job = getJob(id);
        job.completed = true;

        const aPort = getPort(job.aPort.pId);
        const zPort = getPort(job.zPort.pId);

        aPort.job = null;
        zPort.job = null;

        const cable = {
            aPort,
            zPort,
        };

        cables.push(cable);

        aPort.cable = cable;
        zPort.cable = cable;

        return mockRequest(job);
    }

    static async jobs() {
        return mockRequest(jobs);
    }

    static async cables() {
        return mockRequest(cables);
    }
}