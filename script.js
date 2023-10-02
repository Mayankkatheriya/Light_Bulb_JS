let bulb = document.getElementById("bulb");
let btn = document.getElementsByTagName("button");
let flag = 0;
btn[0].addEventListener('click', function(){
    if(flag == 0){
        bulb.style.backgroundColor="yellow";
        bulb.style.boxShadow = "0 0 120px 450px rgba(255, 255, 0, 0.5)"
        bulb.style.transition = "0.15s"
        btn[0].style.backgroundColor = "rgba(0, 120, 0 , 0.8)"
        btn[0].style.color = "#a696df"
        flag=1;
        }
        else{
            bulb.style.backgroundColor="rgba(255, 255, 0 ,0.2)";
            bulb.style.boxShadow = "none"
            btn[0].style.backgroundColor = "rgba(255, 0 ,0 ,0.4)"
            flag=0;
        }
});
