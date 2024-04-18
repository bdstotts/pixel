const container = document.querySelector('#container');
const clear = document.getElementById("clear");
const button = document.querySelector("button");
var box = ""
var rowBox=""
var dimension = "";
var hovered = ""
var boxy = ""
const colorPicker = document.getElementById("colorPicker");
const grid = document.getElementById("grid");
active = document.getElementById("active")
activeValue = active.style.backgroundColor
active.style.backgroundColor = colorPicker.value;
document.documentElement.style.setProperty('--activeColor', activeValue);
//console.log(dimension)

//...................................................................................
function setCanvas() {
  document.querySelectorAll('.rowBox').forEach(e => e.remove());
  dimension = document.getElementById("resolution").value;
  dimensionNumber = document.getElementById("resolution")
  //dimension = prompt("Enter a number 10-100 to select your etch-a-sketch resolution. Higher means better definition.");
  console.log(dimension)

  if (dimension>100){
        alert("That number is too high. Your resolution has been set to 100")
      dimensionNumber = 100;
        dimension=100}

        console.log(dimension)

    //rowBox
    rowBox = document.createElement("div");
    rowBox.classList.add("rowBox");
    //box
    box = document.createElement("div");
    box.classList.add("box");
    box.textContent = "";

    container.appendChild(rowBox);
    //create one rowBox filled with boxes
    for(i=0; i<dimension; i++){
        rowBox.appendChild(box.cloneNode(true));
        }
        // clone the rowBox * dimensions
        for(i=0;i<dimension-1; i++){
        container.appendChild(rowBox.cloneNode(true));
        }

    boxy = document.querySelectorAll("div.box");

//....................................................................


function change(el) {
  [].forEach.call(boxy, function(box) {
    activeValue = active.style.backgroundColor;
    //document.documentElement.style.setProperty('--activeColor', activeValue);
    el.style.backgroundColor = activeValue;
  });
  }
//..............................................................

// the function to add the mouseover event listener to each box
/*[].forEach.call(boxy, function(box) {
box.addEventListener("mouseover", function() {
change(this);
});
});
*/
[].forEach.call(boxy, function(box) {
box.addEventListener('mousemove', function(box) {
  if(box.buttons == 1) {
   box.preventDefault();
 change(this);
 
}})
});



//..............................................................
// Borderize on initialization

grid.addEventListener("click", borderize())

function borderize(){
  boxy =document.getElementsByClassName("box");
  [].forEach.call(boxy, function(el){
    if(grid.checked){
      el.style.borderStyle = "solid"
    }
    else{
      el.style.borderStyle = "none"
    }
  })
  }

}
//...........................................................
//borderize according to toggling checkbox

grid.addEventListener("click", touched)

function touched(){
  console.log("touched")
  boxy =document.getElementsByClassName("box");
  [].forEach.call(boxy, function(el){
    if(grid.checked){
      el.style.borderStyle = "solid"
    }
    else{
      el.style.borderStyle = "none"
    }
  })
  
}




//............................................................................



button.addEventListener("click", setCanvas);

//Resetting the canvas
clear.addEventListener("click", resetCanvas)

function resetCanvas(){
  [].forEach.call(boxy, function(box) {
    activeValue = active.style.backgroundColor;
    document.documentElement.style.setProperty('--activeColor', activeValue);
    box.style.backgroundColor = "#ffffff";
  });
  }
 




colorOne = document.getElementById("color1");
colorTwo = document.getElementById("color2");
colorThree = document.getElementById("color3");
colorFour = document.getElementById("color4");
colorFive = document.getElementById("color5");
colorSix = document.getElementById("color6");
colorSeven = document.getElementById("color7");
colorEight = document.getElementById("color8");
colorNine = document.getElementById("color9");
colorTen = document.getElementById("color10");

colors = ["#000000","","","","","","","","",""]

/*colorPicker.addEventListener("change",(e) => {
  console.log(e.target.value)
})*/

colorPicker.addEventListener("change", logColor)

function logColor(e){
active.style.backgroundColor = e.target.value;
  console.log(e.target.value);
  for(i=0;i<10;i++){
    if (colors[9]!==""){
      colors.splice(0,0,e.target.value);
      colors.pop();
      break;
    }

    else if(colors[i]===""){
      colors[i]=e.target.value;
      break;
    }
  }
colorOne.style.backgroundColor = colors[0]
colorTwo.style.backgroundColor = colors[1]
colorThree.style.backgroundColor = colors[2]
colorFour.style.backgroundColor = colors[3]
colorFive.style.backgroundColor = colors[4]
colorSix.style.backgroundColor = colors[5]
colorSeven.style.backgroundColor = colors[6]
colorEight.style.backgroundColor = colors[7]
colorNine.style.backgroundColor = colors[8]
colorTen.style.backgroundColor = colors[9]
  console.log(colors);
  console.log(active.style.backgroundColor);
}

colorOne.addEventListener("click", changeColor)
colorTwo.addEventListener("click", changeColor)
colorThree.addEventListener("click", changeColor)
colorFour.addEventListener("click", changeColor)
colorFive.addEventListener("click", changeColor)
colorSix.addEventListener("click", changeColor)
colorSeven.addEventListener("click", changeColor)
colorEight.addEventListener("click", changeColor)
colorNine.addEventListener("click", changeColor)
colorTen.addEventListener("click", changeColor)


function changeColor(){
  active.style.backgroundColor = this.style.backgroundColor;
}


 







