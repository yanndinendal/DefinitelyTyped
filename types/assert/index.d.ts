// Type definitions for commonjs-assert 1.5
// Project: https://github.com/browserify/commonjs-assert, https://github.com/defunctzombie/commonjs-assert
// Definitions by: Nico Gallinal <https://github.com/nicoabie>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** An alias of `assert.ok()`. */
declare function assert(value: any, message?: string | Error): asserts value;
declare namespace assert {
    class AssertionError extends Error {
        actual: any;
        expected: any;
        operator: string;
        generatedMessage: boolean;
        code: "ERR_ASSERTION";

        constructor(options?: {
            /** If provided, the error message is set to this value. */
            message?: string | undefined;
            /** The `actual` property on the error instance. */
            actual?: any;
            /** The `expected` property on the error instance. */
            expected?: any;
            /** The `operator` property on the error instance. */
            operator?: string | undefined;
            /** If provided, the generated stack trace omits frames before this function. */
            // tslint:disable-next-line:ban-types
            stackStartFn?: Function | undefined;
        });
    }

    type AssertPredicate = RegExp | (new() => object) | ((thrown: any) => boolean) | object | Error;

    function fail(message?: string | Error): never;
    /** @deprecated since v10.0.0 - use fail([message]) or other assert functions instead. */
    function fail(
        actual: any,
        expected: any,
        message?: string | Error,
        operator?: string,
        // tslint:disable-next-line:ban-types
        stackStartFn?: Function,
    ): never;
    function ok(value: any, message?: string | Error): asserts value;
    /** @deprecated since v9.9.0 - use strictEqual() instead. */
    function equal(actual: any, expected: any, message?: string | Error): void;
    /** @deprecated since v9.9.0 - use notStrictEqual() instead. */
    function notEqual(actual: any, expected: any, message?: string | Error): void;
    /** @deprecated since v9.9.0 - use deepStrictEqual() instead. */
    function deepEqual(actual: any, expected: any, message?: string | Error): void;
    /** @deprecated since v9.9.0 - use notDeepStrictEqual() instead. */
    function notDeepEqual(actual: any, expected: any, message?: string | Error): void;
    function strictEqual<T>(actual: any, expected: T, message?: string | Error): asserts actual is T;
    function notStrictEqual(actual: any, expected: any, message?: string | Error): void;
    function deepStrictEqual<T>(actual: any, expected: T, message?: string | Error): asserts actual is T;
    function notDeepStrictEqual(actual: any, expected: any, message?: string | Error): void;

    function throws(block: () => any, message?: string | Error): void;
    function throws(block: () => any, error: AssertPredicate, message?: string | Error): void;
    function doesNotThrow(block: () => any, message?: string | Error): void;
    function doesNotThrow(block: () => any, error: AssertPredicate, message?: string | Error): void;

    function ifError(value: any): asserts value is null | undefined;

    function rejects(block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;
    function rejects(
        block: (() => Promise<any>) | Promise<any>,
        error: AssertPredicate,
        message?: string | Error,
    ): Promise<void>;
    function doesNotReject(block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;
    function doesNotReject(
        block: (() => Promise<any>) | Promise<any>,
        error: AssertPredicate,
        message?: string | Error,
    ): Promise<void>;

    function match(value: string, regExp: RegExp, message?: string | Error): void;
    function doesNotMatch(value: string, regExp: RegExp, message?: string | Error): void;

    const strict:
        & Omit<
            typeof assert,
            | "equal"
            | "notEqual"
            | "deepEqual"
            | "notDeepEqual"
            | "ok"
            | "strictEqual"
            | "deepStrictEqual"
            | "ifError"
            | "strict"
        >
        & {
            (value: any, message?: string | Error): asserts value;
            equal: typeof strictEqual;
            notEqual: typeof notStrictEqual;
            deepEqual: typeof deepStrictEqual;
            notDeepEqual: typeof notDeepStrictEqual;

            // Mapped types and assertion functions are incompatible?
            // TS2775: Assertions require every name in the call target
            // to be declared with an explicit type annotation.
            ok: typeof ok;
            strictEqual: typeof strictEqual;
            deepStrictEqual: typeof deepStrictEqual;
            ifError: typeof ifError;
            strict: typeof strict;
        };
}

export = assert;
