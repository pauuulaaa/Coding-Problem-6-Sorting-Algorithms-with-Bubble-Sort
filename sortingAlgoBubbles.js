@@ -6,7 +6,7 @@ while (numbers.length < 10) {
  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    alert("Please enter a valid number.");
    alert("Please enter a valid number:");
  }
}

@@ -15,7 +15,7 @@ function bubSort(arr) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
@@ -25,6 +25,6 @@ function bubSort(arr) {
  }
  return arr;
}
const sortedArray = bubbleSort(numbers);
const sortedArray = bubSort(numbers);

console.log("Sorted Array:", sortedArray);
