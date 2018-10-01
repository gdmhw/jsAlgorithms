var arr = [1, 4, 1, 2, 3, 4, 5, 2, 3, 1, 1, 3, 8, 9, 4, 6, 5];

console.log(arr);

function insertSort(array){
  var holePos;
  var valueToInsert;

  for (var i = 0; i < array.length; i++) {
    value = array[i];
    holePos = i;

    while (holePos > 0 && array[holePos - 1] > value) {
      //shoft element at index hole - 1 to the hole
      array[holePos] = array[holePos - 1];
      //new hole index hole - 1
      holePos--;
    }
    array[holePos] = value;

  }
}

var arr = [7, 2, 4, 1];
insertSort(arr);
console.log(arr);

//[7, 2, 4, 1]

// i = 0, value = 7, hole = 0
// dont while
//arr[0] = 7

//[7, 2, 4, 1]

// i = 1, value = 2, hole = 1
//while, 1 > 0, a[0] = 7 > 2
//arr[1] = 7
//hole = 0, exit loop
//arr[0] = 2

//[2, 7, 4, 1]

//i = 2, value = 4, hole = 2
//while, 2 > 0, a[1] = 7 > 4
//arr[2] = a[1] = 7
// hole = 1
//while, 1 > 0, a[0] = 2 < 4 - exit loop
//arr[1] = 4

//[2, 4, 7, 1]

//i = 3, value = 1, hole = 3
//while, 3 > 0, a[2] = 7 > 1
//arr[3] = arr[2] = 7
//hole = 2
//while, 2 > 0, a[1] = 4 > 1
//arr[2] = arr[1] = 4
//hole = 1
//while, 1 > 0, a[0] = 2 > 1
//arr[1] = arr[0] = 2
//hole = 0, exit loop
//arr[0] = 1

//[1, 2, 4, 7] - sorted
