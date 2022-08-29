
document.querySelector('.ham').addEventListener("click",function(){
    document.querySelector('.side').classList.toggle('sidebargo');
   
})
var flag=8
document.querySelector(".hum").addEventListener("click",function(){
if(flag==8){
    document.querySelector("#devin").style.display="none"
    flag=9
}else{
    document.querySelector("#devin").style.display="inherit"
    flag=8
}
})



