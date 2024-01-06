// add whatever parameters you deem necessary
function countPairs(arr, targetSum) {
    let count = 0;
    let seen = new Set();

    for(let num of arr) {
        const complement = targetSum - num;
        if(seen.has(complement)){
            count ++;
        }
        seen.add(num);
    }
    return count;
}

module.exports = { countPairs }
