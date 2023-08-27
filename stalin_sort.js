function stalinSort(arr) {
    let sortedArr = [arr[0]];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= sortedArr[sortedArr.length - 1]) {
            sortedArr.push(arr[i]);
        }
    }
    
    return sortedArr;
}

const unsortedArray = [10, 20, 15, 25, 5];
const sortedArray = stalinSort(unsortedArray);

console.log(sortedArray); 
