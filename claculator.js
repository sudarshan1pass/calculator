const section = document.getElementById("section")
const section1 = document.getElementById("section1")
const button =document.querySelectorAll("button")
const AC =document.getElementById("AC")

for(let a=0;a<button.length;a++){
  button[a].addEventListener("click",function(){
    if(button[a].innerHTML !== "="){
       section.innerHTML+=button[a].innerHTML
    } else{
       section1.innerHTML =eval(section.innerHTML) 
    }
  })
}
AC.addEventListener("click",function(){
  section.innerHTML=""
  section1.innerHTML=""
})