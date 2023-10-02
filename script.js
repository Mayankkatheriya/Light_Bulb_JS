let bulb = document.getElementById("bulb");
let btn = document.getElementsByTagName("button");
let flag = 0;
btn[0].addEventListener('click', function(){
    if(flag == 0){
        bulb.style.backgroundColor="yellow";
        bulb.style.boxShadow = "0 0 120px 450px rgba(255, 255, 0, 0.5)"
        bulb.style.transition = "0.2s"
        btn[0].style.border = '1px solid black';
        btn[0].style.borderTop = '8px solid rgb(121, 120, 120)';
        btn[0].style.backgroundImage = "linear-gradient(rgb(90, 90, 90), rgb(116, 115, 115))";
        btn[0].style.transition = "0.15s"
        flag=1;
        }
        else{
            bulb.style.transition = "0.2s"
            bulb.style.backgroundColor="rgba(255, 255, 0 ,0.2)";
            bulb.style.boxShadow = "none";
            btn[0].style.border = '1px solid black';
            btn[0].style.borderBottom = '8px solid rgb(121, 120, 120)';
            btn[0].style.backgroundImage = "linear-gradient(rgb(116, 115, 115), rgb(90, 90, 90))";
            btn[0].style.transition = "0.15s"
            flag=0;
        }
});
