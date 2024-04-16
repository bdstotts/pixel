const container = document.querySelector('#container');
const clear = document.getElementById("clear");
const button = document.querySelector("button");
var box = ""
var rowBox=""
var dimension = "";
var hovered = ""
var boxy = ""
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

    // what happens when each box is moused over
    function change(el) {
        [].forEach.call(boxy, function(box) {
          if (box.className === "box") {
            el.classList.add("hovered");
          }
        });
        }
// the function to add the mouseover event listener to each box
[].forEach.call(boxy, function(box) {
box.addEventListener("mouseover", function() {
  change(this, "hovered");
  //console.log(document.getElementsByClassName("hovered").length)
});
});
}
//.....................................................................................
button.addEventListener("click", setCanvas);

//Resetting the canvas
clear.addEventListener("click", resetCanvas)
hovered = document.getElementsByClassName("hovered")

//function to reset canvas
function resetCanvas(){
  for (i=0;i=hovered.length; i++){
    hovered[0].classList.remove("hovered")
  }
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
active = document.getElementById("active")

colors = ["","","","","","","","","",""]

const colorPicker = document.getElementById("colorPicker");

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









