const countNum = document.getElementById("countNum");
const Btns = document.querySelectorAll(".btn");
let count = 0;

Btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
       let targetBtn = e.target.classList;
       if(targetBtn.contains("decrease")){
           count--;
       }
       else if(targetBtn.contains("increase")){
           count++;
       }
       else{
           count = 0;
       }
       if(count < 0){
           countNum.style.color = "red";
        }
        else if(count > 0){
            countNum.style.color = "green";
        }
        else if(count === 0){
            countNum.style.color = "#000000";
        }
       countNum.innerText = count;
    });
});