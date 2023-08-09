// Swap function
function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
  
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
  
    el1.style.height = transform2;
    el2.style.height = transform1;
  }
  
  // Bubble Sort function
  async function bubbleSort() {
    const special = document.getElementsByClassName("bar");
    const delay = 100; // Delay in milliseconds
  
    for (let i = 0; i < special.length - 1; i++) {
      for (let j = 0; j < special.length - i - 1; j++) {
        // Highlight comparison
        special[j].style.background = "red";
        special[j + 1].style.background = "red";
  
        // Delay
        await new Promise(resolve => setTimeout(resolve, delay));
  
        const height1 = parseInt(special[j].style.height);
        const height2 = parseInt(special[j + 1].style.height);
  
        if (height1 > height2) {
          swap(special[j], special[j + 1]);
        }
  
        // Reset background color after comparison
        special[j].style.background = "";
        special[j + 1].style.background = "";
      }
  
      // Set the background color of the largest element to green
      special[special.length - i - 1].style.background = "green";
    }
  
    // Set the background color of the first element to green (already sorted)
    special[0].style.background = "green";
  }
  
  // Event listener for bubble sort button
  const BubbleSortBtn = document.getElementById("BubbleSortBtn");
  BubbleSortBtn.addEventListener("click", BubbleSort);
  