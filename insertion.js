// Insertion Sort function
async function insertionSort() {
  const special = document.getElementsByClassName("bar");
  const delay = 100; // Delay in milliseconds

  for (let i = 1; i < special.length; i++) {
    const key = parseInt(special[i].style.height);

    let j = i - 1;

    // Highlight current element being compared
    special[i].style.background = "red";

    // Delay
    await new Promise(resolve => setTimeout(resolve, delay));

    while (j >= 0 && parseInt(special[j].style.height) > key) {
      // Highlight comparison
      special[j].style.background = "red";

      // Delay
      await new Promise(resolve => setTimeout(resolve, delay));

      swap(special[j], special[j + 1]);

      // Reset background color of the swapped elements
      special[j].style.background = "";
      special[j + 1].style.background = "";

      j--;
    }

    special[j + 1].style.height = key + "px";

    // Set the background color of the sorted element to green
    special[i].style.background = "green";
  }

  // Set the background color of the first element to green (already sorted)
  special[0].style.background = "green";
}

// Event listener for insertion sort button
const insertionSortBtn = document.getElementById("insertionSortBtn");
insertionSortBtn.addEventListener("click", insertionSort);