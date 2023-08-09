// Quick Sort function
async function quickSort(arr, low, high) {
    if (low < high) {
      const pi = await partition(arr, low, high);
  
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  }
  
  async function partition(arr, low, high) {
    const special = document.getElementsByClassName("bar");
    const pivot = parseInt(special[high].style.height);
    let i = low - 1;
  
    // Highlight pivot element
    special[high].style.background = "red";
  
    for (let j = low; j < high; j++) {
      // Highlight comparison
      special[j].style.background = "red";
  
      // Delay
      await new Promise(resolve => setTimeout(resolve, 100));
  
      if (parseInt(special[j].style.height) < pivot) {
        i++;
  
        swap(special[i], special[j]);
  
        // Reset background color of the swapped elements
        special[i].style.background = "";
        special[j].style.background = "";
      } else {
        // Reset background color of the current element
        special[j].style.background = "";
      }
    }
  
    swap(special[i + 1], special[high]);
  
    // Reset background color of the pivot element
    special[high].style.background = "";
  
    return i + 1;
  }

  // Event listener for quick sort button
const quickSortBtn = document.getElementById("quickSortBtn");
quickSortBtn.addEventListener("click", () => {
  const special = document.getElementsByClassName("bar");
  const heights = [];

  for (let i = 0; i < special.length; i++) {
    heights.push(parseInt(special[i].style.height));
  }

  quickSort(heights, 0, special.length - 1);
});