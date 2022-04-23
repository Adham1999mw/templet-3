let num=document.querySelectorAll(".st .num");
function change(){
    num.forEach(function(ele){
        if (Number(ele.textContent)<ele.getAttribute("data-num")){
            console.log(Number(ele.textContent))
            Number(ele.textContent++)
        }

        
    })
}
num.forEach(function(ele){
window.addEventListener("scroll",function(){

    if(this.scrollY>=6850){
    setInterval(change,20)
    }
})
})