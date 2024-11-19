let age = document.querySelector("#age");
let btn = document.querySelector("#btnAge")

btn.addEventListener("click", ()=>{
    //coersion esplicita
    let ageNumber = Number(age.value);
    console.log(typeof ageNumber);
})