// Swap function
function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
  
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
  
    el1.style.height = transform2;
    el2.style.height = transform1;
  }
  
  // Selection Sort function
  async function selectionSort() {
    const special = document.getElementsByClassName("bar");
    const delay = 100; // Delay in milliseconds
  
    for (let i = 0; i < special.length - 1; i++) {
      let minIndex = i;
  
      // Highlight current minimum element
      special[minIndex].style.background = "red";
  
      for (let j = i + 1; j < special.length; j++) {
        // Highlight comparison
        special[j].style.background = "red";
  
        // Delay
        await new Promise(resolve => setTimeout(resolve, delay));
  
        const height1 = parseInt(special[j].style.height);
        const height2 = parseInt(special[minIndex].style.height);
  
        if (height1 < height2) {
          // Reset background color of the previous minimum element
          special[minIndex].style.background = "";
  
          minIndex = j;
        } else {
          // Reset background color of the current element
          special[j].style.background = "";
        }
      }
  
      swap(special[i], special[minIndex]);
  
      // Set the background color of the sorted element to green
      special[i].style.background = "green";
    }
  
    // Set the background color of the last element to green (already sorted)
    special[special.length - 1].style.background = "green";
  }

  // Event listener for selection sort button
const selectionSortBtn = document.getElementById("selectionSortBtn");
selectionSortBtn.addEventListener("click", selectionSort);