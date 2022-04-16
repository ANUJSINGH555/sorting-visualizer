let array_size = document.querySelector(".array_size");
let animationSpeed = document.querySelector(".speed");

// create given number of bars
function createBars(size) {
  let array = [];
  let barContainer = document.querySelector(".bar-container");
  for (let i = 1; i <= size; i++) {
    let barHeight = Math.floor(Math.random() * maxBarHeight) + 5;
    array.push(barHeight);
    let bar = document.createElement("div");
    bar.classList.add("bars");
    bar.style.height = barHeight + "vh";
    barContainer.appendChild(bar);
  }
}

//remove all the bars from the bar container
function removeBars() {
  document.querySelectorAll(".bars").forEach((node) => {
    node.remove();
  });
}
//create new bars array when "randomize array" button is clicked
let randomArraybtn = document.querySelector("#randomize-array");
randomArraybtn.addEventListener("click", () => {
  removeBars();
  createBars(array_size.value);
});

//change number of bars when sliding the array-size slider
array_size.addEventListener("input", () => {
  removeBars();
  createBars(array_size.value);
});

//change the animation speed when chaning the slider value
animationSpeed.addEventListener("input", () => {
  delay = 3000 - animationSpeed.value + 100;
  document.querySelectorAll(".bars").forEach((bar) => {
    bar.style.transitionDuration = ((delay / 1000) * 0.7) + "s";
  });
});

//starts sorting using selection sort when "selection sort" button is clicked
let selectionSortBtn = document.querySelector("#selection-sort");
selectionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    selectionSort(barsArray);
});

//starts sorting using bubble sort when "bubble sort" button is clicked
let bubbleSortBtn = document.querySelector("#bubble-sort");
bubbleSortBtn.addEventListener("click",()=>{
   let barsArray = document.querySelectorAll(".bars");
   bubbleSort(barsArray);
});

//starts sorting using insertion sort when "insertion sort" button is clicked
let insertionSortBtn = document.querySelector("#insertion-sort");
insertionSortBtn.addEventListener("click",()=>{
   let barsArray = document.querySelectorAll(".bars");
   insertionSort(barsArray);
});

//create Bars when page loads
createBars(array_size.value);

