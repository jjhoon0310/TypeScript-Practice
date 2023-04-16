type SingleArray = <T>(arr: T[]) => void;
type ItemArray = <D>(arr: D[], item: D) => void;
type TwoArray = <M>(arr1: M[], arr: M[]) => void;
type TwoItemArray = (arr: any[], startIndex: number, endIndex: number) => void;

// Returns the last element of an array
const last: SingleArray = (arr) => {
    return arr.slice(-1);
};

last([true, true, false]); // => false

// Returns an array that includes 'item'
const itemArray: ItemArray = (arr, item) => {
    arr.unshift(item);
    return arr;
};

itemArray([1, 2, "S"], "X"); // => ['x', 1, 2, 'S']

// Randomly mixes two arrays
const mixArray: TwoArray = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
};

mixArray([1, 2, 3], [4, true, 6]); // => (Random)[1, 4, true, 2, 3, 6]

// Counts how many elements in array
const countArray: SingleArray = (arr) => {
    return arr.length;
};

countArray([1, 2, 3, 4]);

// Finds where the element is in the array
const findIndex: ItemArray = (arr, item) => {
    if (arr.indexOf(item) != -1) {
        const index = `The item is at ${arr.indexOf(item) + 1} of an array`;
        return index;
    } else {
        return null;
    }
};

findIndex([1, 2, 3], 1); // => The item is at 1 of an array

// Slices an array from 'startIndex' up to 'endIndex' times
const slice: TwoItemArray = (arr, startIndex, endIndex) => {
    if (endIndex) arr.splice(endIndex + 1);
    arr.splice(0, startIndex);
    return arr;
};

slice([1, 2, 3, 4], 1, 3); // => [2, 3, 4]
