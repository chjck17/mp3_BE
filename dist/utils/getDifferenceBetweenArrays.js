"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDifferenceBetweenArrays(firstArray, secondArray) {
    return firstArray.filter((arrayElement) => {
        return !secondArray.includes(arrayElement);
    });
}
exports.default = getDifferenceBetweenArrays;
//# sourceMappingURL=getDifferenceBetweenArrays.js.map