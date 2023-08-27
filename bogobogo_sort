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

function bogobogoSort(arr) {
    let attempts = 0;
    while (!isSorted(arr)) {
        shuffleArray(arr);
        attempts++;
    }
    console.log(`Sorted after ${attempts} attempts: ${arr}`);
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Original array:", unsortedArray);
bogobogoSort(unsortedArray);
