let lightUpGreen = document.getElementById('LEDGREEN');
let dimRed = document.getElementById('LEDRED');

var inputLabel = document.getElementById('inputLabel');

function lightSwitch (){
    lightUpGreen.classList.toggle('on');
    dimRed.classList.toggle('off');

}

function depress(obj){
    this.style.backgroundImage= "url(button-depress.jpg)";
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }


function pushBtn(obj) {

    var pushed = obj.innerHTML;

    

    if (pushed == '=') {
        //calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);

    } else if (pushed == 'Clear') {
        //All Clear
        inputLabel.innerHTML = '0'; 

    } else {
        if (inputLabel.innerHTML =='0') {
            inputLabel.innerHTML = pushed;

        }   else {
            inputLabel.innerHTML += pushed;
        }
     
  
     if (inputLabel.innerHTML == '1234') 
        lightSwitch();
         
    }
}
    //if (this.style.background = url("button.jpg") 
        //depress();
     
     //}
    //}
    


///btn.addEventListener("click", this.style.background-image: url("button-depress.jpg"));

//this.style = background-image:url("button-depress.jpg")

     //if (inputLabel.innerHTML == '1234') switch(a){
        //case 0: lightUpGreen.classList.toggle('on'); 
       // case 1: dimRed.classList.toggle('off');
        //break;
        
        ///window.alert("unlocked!");

  




//document.getElementById('star').onclick = function fade(){
//lightUp.classList.toggle('on');
  
//}



    ///https://youtu.be/y4SQ89yanKw