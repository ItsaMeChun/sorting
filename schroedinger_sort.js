function schroedingerSort(array) {
    if (Math.random() < 0.5) {
      return array; // Array is sorted... maybe
    } else {
      return array.sort(); // Array is not sorted... or is it?
    }
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Unsorted Array:", unsortedArray);


const sortedArray = schroedingerSort(unsortedArray);
console.log("Sorted Array:", sortedArray);