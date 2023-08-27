function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function quantumBogosort(arr) {
    let termination = 0;
    while (!isSorted(arr)) {
        shuffle(arr);
        termination++;
    }
    return {
        sortedArray: arr,
        termination: termination
    };
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const result = quantumBogosort(unsortedArray);
console.log('Sorted Array:', result.sortedArray);
console.log('termination:', result.termination);