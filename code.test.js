let code = require("./code.js");
let assert = require("assert");

function checkGraphSearch(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

let test1 = code.depthFirstSearch([], 4, 1);
let test1sol = [];
let test2 = code.depthFirstSearch([[3, 4], [0, 1], [2, 1]], 2, 3);
let test2sol = [0, 2];
let test3 = code.depthFirstSearch([[3], [1, 2], [5, 7], [5, 2], [9]], 8, 8);
let test3sol = [0, 1, 2, 3, 4];
let test4 = code.depthFirstSearch([[6, 2], [2, 9], [7, 4]], 1, 5);
let test4sol = [];

assert(checker(test1, test1sol));
assert(checker(test2, test2sol));
assert(checker(test3, test3sol));
assert(checker(test4, test4sol));
