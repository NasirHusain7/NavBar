const btn = document.querySelector(".btn");
let count = 0;
const options = document.querySelector(".options");
btn.addEventListener("click", function(){
    if(count == 0){
        options.style.display = "block";
        count = 1;
    }else{
        options.style.display = "none";
        count = 0;
    }
});