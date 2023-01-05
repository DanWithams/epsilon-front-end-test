import { assert, expect, test } from 'vitest'
import { getDevices, getPort } from '../src/api/mock';
import Device from '../src/models/device';
import Port from '../src/models/port';

test('Device Model', () => {
    const device = new Device(getDevices()[0]);

    expect(device).toBeInstanceOf(Device);
    expect(device).toHaveProperty('id');
    expect(device).toHaveProperty('ports');

    expect(device.ports[0]).toBeInstanceOf(Port);
});

test('Port Model', () => {
    const port = new Port(getPort(1));

    expect(port).toBeInstanceOf(Port);
    expect(port).toHaveProperty('pId');
    expect(port.device).toBeInstanceOf(Device);
});
