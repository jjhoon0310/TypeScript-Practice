import {
    head,
    hasIn,
    isBoolean,
    toString,
    split,
    hasPath,
    filter,
    every,
    map,
} from "myPackage";

// Gets the first element of `[1, 2, 3]` => 1
head([1, 2, 3]);

// Checks if `b` is a direct or inherited property of `{ a: 2, b: 4 }` => true
hasIn({ a: 2, b: 4 }, "b");

// Checks if `Hello` is classified as a boolean primitive or object => false
isBoolean("Hello");

// Converts `[1, 2, 3]` to a string => "1, 2, 3"
toString([1, 2, 3]);

// Splits `a-b-c` by `-` up to `2` letters. => ["a", "b"]
split("a-b-c", "-", 2);

// Checks if `{ a: 2, c: 3 }` is a direct property of `b`. => false
hasPath({ a: 2, c: 3 }, "b");

/*
Checks if array `user` has a `true` object, 
then adds to return array => [ { user: 'barney', active: true } ]
*/
const users = [
    { user: "barney", active: true },
    { user: "fred", active: false },
];

filter(users, function (obj) {
    return obj.active;
});

// Checks if every value is a number or not => false
every([1, "wow", 2, 3], Number);

// Squares every value in string => [ 16, 64 ]
map([4, 8], function (n) {
    return n * n; // This return can be changed to other mathematical calculation
});
