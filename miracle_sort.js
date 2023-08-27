arr = [3,2,1]
let isSorted = false;

async function miracle_sort(arr) {
    while(!isSorted) {
        console.log(arr)
        await sleep(1000) //wait and pray for miracle
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

miracle_sort(arr)

