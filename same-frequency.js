function createFrequencyCounter(num) {
    let numStr = num.toString();
    let frequencies = new Map ();
    for (let n of numStr) {
        let nCount = frequencies.get(n) || 0;
        frequencies.set(n, nCount+1);
    }
    return frequencies;
}


function sameFrequency(num1, num2) {
    if (num1.toString().length !== num2.toString().length) {
        return false;
    }
    let num1Freq = createFrequencyCounter(num1);
    let num2Freq = createFrequencyCounter(num2);
    for(let key of num1Freq.keys()){
        if (!num2Freq.has(key) || num2Freq.get(key) !== num1Freq.get(key)) {
            return false;
        }
    }
    return true;
}

module.exports = { sameFrequency }
