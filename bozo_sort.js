function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function bozosort(arr) {
    while (!isSorted(arr)) {
        shuffleArray(arr);
    }
    return arr;
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Unsorted array:", unsortedArray);

const sortedArray = bozosort(unsortedArray);
console.log("Sorted array:", sortedArray);
