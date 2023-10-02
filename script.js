let bulb = document.getElementById("bulb");
let btn = document.getElementsByTagName("button");
let flag = 0;
let buttonBackground = btn[0].parentElement;
btn[0].addEventListener('click', function(){
    if(flag == 0){
        bulb.style.backgroundColor="yellow";
        bulb.style.boxShadow = "0 0 120px 450px rgba(255, 255, 0, 0.5)"
        bulb.style.transition = "0.2s"
        buttonBackground.style.backgroundColor = "rgb(105, 105, 105)";
        buttonBackground.style.boxShadow = "0 0 10px 3px #000"
        buttonBackground.style.transition = "0.15s"
        btn[0].style.border = '1px solid black';
        btn[0].style.borderTop = '8px solid rgb(140, 140, 140)';
        btn[0].style.backgroundImage = "linear-gradient(rgb(110,110,110), rgb(120,120,120))";
        btn[0].style.transition = "0.15s"
        flag=1;
        }
        else{
            bulb.style.transition = "0.2s"
            bulb.style.backgroundColor="rgba(255, 255, 0 ,0.2)";
            bulb.style.boxShadow = "none";
            buttonBackground.style.backgroundColor = "rgb(46, 46, 46)";
            buttonBackground.style.boxShadow = "none"
            buttonBackground.style.transition = "0.15s"
            btn[0].style.border = '1px solid black';
            btn[0].style.borderBottom = '8px solid rgb(121, 120, 120)';
            btn[0].style.backgroundImage = "linear-gradient(rgb(120, 120, 120), rgb(90, 90, 90))";
            btn[0].style.transition = "0.15s"
            flag=0;
        }
});
