/**
 * @function objectOfNRandomNumsUpToMax
 * 
 * Returns an object of n random numbers limited to max value
 * 
 * @param max [number]      Value upper limit for number keys possible in returned object
 * @param n [number]        Total count of number key-property pairs in returned object
 * 
 * @returns [object]        Object of key property pairs with numbers as keys and true booleans as properties
 */
function objectOfNRandomNumsUpToMax(max, n) {
    const nums = {};
    let unchosenNums = new Array(max)
                            .fill()
                            .map((cv, i) => i); //! O(3n) -> an object wold be more efficient

    for (let i = 0; i < n; i += 1) {
        const randomNum = Math.floor((Math.random() * unchosenNums.length));
        const chosenNum = unchosenNums[randomNum];
        
        unchosenNums = unchosenNums
                            .slice(0, randomNum)
                            .concat(unchosenNums.slice(randomNum + 1))
        
        nums[chosenNum] = true;
    }

    return nums;
}

/**
 * @function arrayOfAdjacentCells
 * 
 * Evaluates adjacent cells for mine presence and returns an array if all are clear, or false if they're not. Recursively evaluates adjacent cells as well. NOTE: if numbers are undefined
 * 
 * @param i [number]    cell whose neighbors to evaluate
 * @param w [number]    width of grid
 * @param h [number]    height of grid (defaults to w if not present)
 * 
 * @returns [array]      adjacent cells' id's
 */
function arrayOfAdjacentCells(i, w, h = w) {
    const   topLeftNum = (i - w - 1) < 0 || (i - (w - 1)) % w === 1 ? null : (i - w - 1),
            topMidNum = (i - w) < 0 ? null : (i - w),
            topRightNum = (i - w + 1) <= 0 || (i - (w + 1)) % w === (w - 2) ? null : (i - w + 1),
            leftNum = (i - 1) % w === (w - 1) || i === 0 ? null : (i - 1),
            rightNum = (i + 1) % w === 0 ? null : (i + 1),
            bottomLeftNum = (i + w - 1) >= (w * h) || (i + (w - 1)) % w === (w - 1) ? null : (i + w - 1),
            bottomMidNum = (i + w) >= (w * h) ? null : (i + w),
            bottomRightNum = (i + w + 1) >= (w * h) || (i + (w + 1)) % w === 0 ? null : (i + w + 1);

    return ([
        topLeftNum,
        topMidNum,
        topRightNum,
        leftNum,
        rightNum,
        bottomLeftNum,
        bottomMidNum,
        bottomRightNum
    ]);
}

module.exports = {objectOfNRandomNumsUpToMax, arrayOfAdjacentCells};
