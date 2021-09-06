'use strict';

import * as vscode from 'vscode';
import * as assert from 'assert';

export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function rangeEqual(range: vscode.Range, sl: number, sc: number, el: number, ec: number): void {
    assert.strictEqual(range.start.line, sl);
    assert.strictEqual(range.start.character, sc);
    assert.strictEqual(range.end.line, el);
    assert.strictEqual(range.end.character, ec);
}

export function uriEqual(actual: vscode.Uri, expected: vscode.Uri): void {
	const actualPath = actual.path.match(/testdata(.*)/)[0];
	const expectedPath = expected.path.match(/testdata(.*)/)[0];

    assert.strictEqual(actualPath, expectedPath);
}

export function isDefined<T>(value: T | undefined | null): asserts value is Exclude<T, undefined | null> {
    if (value === undefined || value === null) {
        throw new Error(`Value is null or undefined`);
    }
}

export function isInstanceOf<T>(value: T, clazz: any): asserts value is Exclude<T, undefined | null> {
    assert.ok(value instanceof clazz);
}

export function isArray<T>(value: Array<T> | undefined | null, length = 1): asserts value is Array<T> {
    assert.ok(Array.isArray(value), `value is array`);
    assert.strictEqual(value!.length, length, 'value has given length');
}
