let loading=document.getElementById("loading-content"),
    btn=document.getElementById("btn");

window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        loading.style.display="none";
    },1500);
})
window.addEventListener("scroll",()=>{
    y=scrollY;
    if(y>=600){
        btn.style.opacity=1;
        btn.removeAttribute("disabled");
    }
    else{
        btn.style.opacity=0;
        btn.setAttribute("disabled","");
    }

});
btn.addEventListener("click",()=>{
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
})