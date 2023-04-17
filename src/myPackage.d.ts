declare module "myPackage" {
    function head<H>(array: H[]): H | undefined;
    function hasIn<I>(object: {}, key: I): boolean;
    function isBoolean<B>(value: B): boolean;
    function toString<T>(value: T | "-0"): string | "-0";
    function split<S>(string: S, separator: S, limit: number): [];
    function hasPath<P>(object: {}, key: P): boolean;
    function filter<F>(
        array: F[],
        predicate: (value: F, index: number, array: F[]) => boolean
    ): F[];
    function every<E>(
        array: E[],
        predicate: (value: E, index: number, array: E[]) => E
    ): boolean;
    function map<M>(
        array: M[],
        iteratee: (value: M, index: number, array: M[]) => M
    ): M[];
}
