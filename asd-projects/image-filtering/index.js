// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(increaseGreenByBlue);
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter (filterFunction) {
for (var i = 0; i < image.length; i ++){
  var row = image[i];
  for (var j = 0; j < row.length; j++){
  var pixel = image[i][j];
  var pixelArray = rgbStringToArray(pixel);
  //This is where i'll modify the color values later//
  filterFunction(pixelArray);
  var updatedPixel = rgbArrayToString(pixelArray);
  image[i][j] = updatedPixel;

    
  }
}
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
 
    for (var i = 0; i < image.length; i ++){
  var row = image[i];
  for (var j = 0; j < row.length; j++){
     if (image[i][j] !== backgroundColor){
  var pixel = image[i][j];
  var pixelArray = rgbStringToArray(pixel);
  //This is where i'll modify the color values later//
  filterFunction(pixelArray);
  var updatedPixel = rgbArrayToString(pixelArray);
  image[i][j] = updatedPixel;
 }
}
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(number){
if (number < 0){
  return 0;
}
if (number > 225){
  return 225;
}
else {
  return number;
}
}


// TODO 4: Create reddify filter function
function reddify(array) {
  array[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(array) {
  array[BLUE] -= 50;
  keepInBounds(array[BLUE]);
}



function increaseGreenByBlue(array){
  array[GREEN] += array[BLUE]
  keepInBounds(array[GREEN]);
}

// CHALLENGE code goes below here
