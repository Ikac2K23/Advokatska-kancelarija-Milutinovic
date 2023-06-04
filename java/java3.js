let button = document.getElementById("button");
let ime = document.getElementById("ime");
let email = document.getElementById("email");
let feedback = document.getElementById("feedback");

button.addEventListener("click", ()=>{

    if( ime.value=="" || email.value=="" || feedback.value==""){
        alert("Popunite sva polja");
    }
else{
    alert("Hvala na prijavi, ubrzo cemo Vam odgovoriti");
    button.value="";
}
})