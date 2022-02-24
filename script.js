let myBtn = document.getElementById("myBtn");

const myArr = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871",
    "#845EC2",
    "#0081CF",
    "#008F7A",
    "#FBEAFF",
    "#C34A36"
]

function clickToChange(){
   let randomNum = Math.floor(Math.random() * myArr.length);
   document.getElementById("main").style.backgroundColor = myArr[randomNum];;
}

myBtn.addEventListener("click", clickToChange );   

