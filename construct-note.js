
function createFrequencyCounter(string) {
    let frequencies = new Map ();
    for (let char of string) {
        let charCount = frequencies.get(char) || 0;
        frequencies.set(char, charCount+1);
    }
    return frequencies;
}

function constructNote(msgStr, letStr) {
    if (msgStr === '') {
        return true;
    }

    let msgFreq = createFrequencyCounter(msgStr);
    let letterFreq = createFrequencyCounter(letStr);

    for (let [key, count] of msgFreq.entries()) {
        if (!letterFreq.has(key) || letterFreq.get(key) < count) {
            return false;
        }
    }

    return true;
}

module.exports = { constructNote };