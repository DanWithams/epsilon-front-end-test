import { assert, expect, test } from 'vitest'
import Random from '../src/helpers/random';

test('Random Integer', () => {
    const randomOneToTen = Random.integer(0, 10);
    expect(randomOneToTen).toBeGreaterThanOrEqual(0);
    expect(randomOneToTen).toBeLessThanOrEqual(10);
});
