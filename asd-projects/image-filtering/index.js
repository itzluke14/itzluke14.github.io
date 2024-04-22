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
  // applyFilter(reddify)
  // applyFilter(decreaseBlue)
  // applyFilter(increaseGreenByBlue)

  applyFilterNoBackground(change1)
  applyFilterNoBackground(change2)
  applyFilterNoBackground(change3)

  // do not change the below line of code
  render($("#display"), image);
}


/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////


// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let row = 0; row < image.length; row++) {
    for (let column = 0; column < image[row].length; column++) {
      var rgbString = image[row][column]
      var rgbNumbers = rgbStringToArray(rgbString)

      filterFunction(rgbNumbers)

      rgbString = rgbArrayToString(rgbNumbers);
      image[row][column] = rgbString;


    }
  }
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var bgColor = image[0][0]
  for (let row = 0; row < image.length; row++) {
    for (let column = 0; column < image[row].length; column++) {
      var rgbString = image[row][column]
      var rgbNumbers = rgbStringToArray(rgbString)

      if (rgbString !== bgColor) {
        filterFunction(rgbNumbers)

        rgbString = rgbArrayToString(rgbNumbers);
        image[row][column] = rgbString;
      }
    }
  }
}



// TODO 5: Create the keepInBounds function
function keepInBounds(boundNumber) {
  return Math.min(255, Math.max(0, boundNumber))
}

// TODO 3: Create reddify function
function change1(rgbArray) {
  rgbArray[GREEN] = keepInBounds(rgbArray[GREEN] + 100)
}

// TODO 6: Create more filter functions
function change2(rgbArray) {
  rgbArray[BLUE] = keepInBounds(rgbArray[GREEN] / 2)
}

function change3(rgbArray) {
  rgbArray[RED] = keepInBounds(rgbArray[BLUE] + keepInBounds(rgbArray[RED] / 2))
}

// CHALLENGE code goes below here

//Change the names of the 3 FNs to general names
//Like change1, change2, change3
//Most colors should be called by keepInBounds(rgbArray[COLOR])
//Except for setting a color, like rgbArray[RED] = 5

