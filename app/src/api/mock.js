import {Random} from "../helpers/random.js";

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
            {
                pId: 3,
                portName: "P3",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
            {
                pId: 4,
                portName: "P4",
                connectedToDevice: null,
                connectedToPort: null,
                cable: null,
                action: null,
                waitConnect: false
            },
        ],
    }];


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
    const device = getDevices.filter((device) => device.id === id).shift();
    if (device) {
        return device;
    }
    throw new Error('Device not found')
};

const getPort = (id) => {
    const ports = [];
    getDevices()
        .forEach(
            device => device.ports.forEach(ports.push)
        );
    const port = ports.filter(port => port.pId === id).shift();
    if (port) {
        return port;
    }
    throw new Error('Port not found');
}

export default class Mock {
    static async devices() {
        return mockRequest(getDevices());
    }

    static async device(id) {
        return mockRequest(getDevice(id));
    }

    static async ports({ id }) {
        return mockRequest(getDevice(id).ports);
    }

    static async port({ id }) {
        return mockRequest(getPort(id));
    }
}