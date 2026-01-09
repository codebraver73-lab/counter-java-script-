var number=0;

function increase(){
  number++;
  document.getElementById("number-container").textContent=number;
};

function decrease(){
    if (number>0){
    number--;
    document.getElementById("number-container").textContent=number;
    };
};

function reset1(){
    number=0;
    document.getElementById("number-container").textContent="0";
};
