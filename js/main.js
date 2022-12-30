let btn1=document.getElementById("btn");
btn1.addEventListener("click", myFunction);
function myFunction(){
    let weights=parseInt(document.getElementById("weight").value);
    let heights=parseInt(document.getElementById("height").value)/100;
    let bmi=weights/(heights*heights);
    let total=document.getElementById("result");
    total.style.textAlign="center";

    if(bmi < 18){
        total.style.color="red";
        document.getElementById("result").innerText="UNDER WEIGHT";
        console.log("your bmi is "+bmi +"kg/m2");
    }
    else if(bmi >18 && bmi < 25){
        total.style.color="green";
        document.getElementById("result").innerText="NORMAL WEIGHT";
        console.log("your bmi is "+bmi +"kg/m2");
    }
    else{
        total.style.color="yellow";
        document.getElementById("result").innerText="OVER WEIGHT";
        console.log("your bmi is "+bmi +"kg/m2");
    }
}