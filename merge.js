// Merge Sort function
async function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = await mergeSort(arr.slice(0, mid));
    const right = await mergeSort(arr.slice(mid));
  
    return await merge(left, right);
  }
  
  async function merge(left, right) {
    const special = document.getElementsByClassName("bar");
    const result = [];
    let i = 0,
      j = 0;
  
    while (i < left.length && j < right.length) {
      // Highlight comparison
      special[i + j].style.background = "red";
  
      // Delay
      await new Promise(resolve => setTimeout(resolve, 100));
  
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    // Apply sorted heights to the bars
    for (let k = 0; k < result.length; k++) {
      special[k].style.height = result[k] + "px";
      // Reset background color of the sorted elements
      special[k].style.background = "";
    }
  
    return result;
  }

  // Event listener for merge sort button
const mergeSortBtn = document.getElementById("mergeSortBtn");
mergeSortBtn.addEventListener("click", async () => {
  const special = document.getElementsByClassName("bar");
  const heights = [];

  for (let i = 0; i < special.length; i++) {
    heights.push(parseInt(special[i].style.height));
  }

  await mergeSort(heights);
});