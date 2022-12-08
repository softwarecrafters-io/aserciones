describe('assertions', () => {
	it('tobe', () => {
		expect(1 + 2).toBe(3);
		expect(1 + 2).not.toBe(4);
	});
	it('toEqual', () => {
		expect(1 + 2).toEqual(3);
		expect(1 + 2).not.toEqual(4);
		expect({ foo: 'foo', bar: 'bar' }).toEqual({ foo: 'foo', bar: 'bar' });
		expect({ foo: 'foo', bar: 'bar' }).not.toEqual({ foo: 'foo', bar: 'foo' });
		expect([1, 2, 3]).toEqual([1, 2, 3]);
		expect([1, 2, 3]).not.toEqual([0, 1, 2]);
	});
	it('verification', () => {
		expect(true).toBeTruthy();
		expect(false).toBeFalsy();
		expect(null).toBeNull();
		expect(undefined).toBeUndefined();
		expect({}).toBeDefined();
	});
	it('falsy values', () => {
		expect(false).toBeFalsy();
		expect(undefined).toBeFalsy();
		expect(null).toBeFalsy();
		expect(NaN).toBeFalsy();
		expect(0).toBeFalsy();
		expect(-0).toBeFalsy();
		expect(0n).toBeFalsy();
		expect('').toBeFalsy();
	});
	it('numbers', () => {
		expect(1).toBeGreaterThan(0);
		expect(1).toBeGreaterThanOrEqual(0);
		expect(0).toBeLessThan(1);
		expect(0).toBeLessThanOrEqual(1);
	});
	it('regular expression', () => {
		expect('Miguel').toMatch(/guel/);
	});
	it('to contain', () => {
		expect([0, 1, 2]).toContain(2);
		expect([
			{ foo: 'foo', bar: 'bar' },
			{ foo: 'foo', bar: 'foo' },
		]).toContainEqual({ foo: 'foo', bar: 'foo' });
	});
	it('Exceptions', () => {
		const throwError = () => {
			throw new Error('Something wrong...');
		};
		expect(throwError).toThrow();
		expect(throwError).toThrow(Error);
		expect(throwError).toThrow('wrong');
		expect(throwError).toThrow(/wrong/);
	});
});
