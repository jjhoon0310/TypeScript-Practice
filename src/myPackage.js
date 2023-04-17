// Gets the first element of `array`
function head(array) {
    return array != null && array.length ? array[0] : undefined;
}

// Checks if `path` is a direct or inherited property of `object`.
function hasIn(object, key) {
    return object != null && key in Object(object);
}

// Checks if `value` is classified as a boolean primitive or object.
function isBoolean(value) {
    return (
        value === true ||
        value === false ||
        (isObjectLike(value) && getTag(value) == "[object Boolean]")
    );
}

/*
Converts `value` to a string. An empty string is returned for `null`
and `undefined` values. The sign of `-0` is preserved.
*/
function toString(value) {
    if (value == null) {
        return "";
    }
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value === "string") {
        return value;
    }
    if (Array.isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return `${value.map((other) =>
            other == null ? other : toString(other)
        )}`;
    }
    if (isSymbol(value)) {
        return value.toString();
    }
    const result = `${value}`;
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}

// Splits `string` by `separator`.
function split(string, separator, limit) {
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) {
        return [];
    }
    if (
        string &&
        (typeof separator === "string" ||
            (separator != null && !isRegExp(separator)))
    ) {
        if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
        }
    }
    return string.split(separator, limit);
}

// Checks if `path` is a direct property of `object`.
function hasPath(object, path) {
    path = castPath(path, object);

    let index = -1;
    let { length } = path;
    let result = false;
    let key;

    while (++index < length) {
        key = toKey(path[index]);
        if (!(result = object != null && hasOwnProperty.call(object, key))) {
            break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object.length;
    return (
        !!length &&
        isLength(length) &&
        isIndex(key, length) &&
        (Array.isArray(object) || isArguments(object))
    );
}

/*
Iterates over elements of `array`, returning an array of all elements
`predicate` returns truthy for. The predicate is invoked with three
arguments: (value, index, array).
*/
function filter(array, predicate) {
    let index = -1;
    let resIndex = 0;
    const length = array == null ? 0 : array.length;
    const result = [];

    while (++index < length) {
        const value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}

/*
Checks if `predicate` returns truthy for ALL elements of `array`.
Iteration is stopped once `predicate` returns falsey. The predicate is
invoked with three arguments: (value, index, array).
*/
function every(array, predicate) {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (!predicate(array[index], index, array)) {
            return false;
        }
    }
    return true;
}

/*
Creates an array of values by running each element of `array` thru `iteratee`.
The iteratee is invoked with three arguments: (value, index, array).
*/
function map(array, iteratee) {
    let index = -1;
    const length = array == null ? 0 : array.length;
    const result = new Array(length);

    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}

module.exports = {
    head,
    hasIn,
    isBoolean,
    toString,
    split,
    hasPath,
    filter,
    every,
    map,
};
