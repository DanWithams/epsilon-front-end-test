import { assert, expect, test } from 'vitest'
import Mock, {getPort, getJobs, getCables} from '../src/api/mock.js';

test('Connection Job creation via API', async () => {

    expect(getJobs().length).toBe(0);

    const aPort = getPort(1);
    const zPort = getPort(21);

    await Mock.createConnectJob({
        aPort,
        zPort
    });

    expect(getJobs().length).toBe(1);
});

test('Cable creation via API', async () => {

    const job = getJobs()
        .filter(job => job.type === 'connect')
        .shift();

    expect(job).toBeTruthy();
    expect(getCables().length).toBe(0);

    await Mock.completeJob(job);

    expect(job.completed).toBeTruthy();
    expect(getCables().length).toBe(1);
});

test('Disconnection Job creation via API', async () => {

    expect(getJobs().length).toBe(1);

    const cable = getCables()[0];

    await Mock.createDisconnectJob({
        cable
    });

    expect(getJobs().length).toBe(2);
});

test('Cable creation via API', async () => {

    const job = getJobs()
        .filter(job => job.type === 'disconnect')
        .shift();

    expect(job).toBeTruthy();
    expect(getCables().length).toBe(1);

    await Mock.completeJob(job);

    expect(job.completed).toBeTruthy();
    expect(getCables().length).toBe(0);
});
