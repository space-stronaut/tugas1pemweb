const date = new Date;
let greeting = document.getElementById("greeting")

if (date.getHours() >= 5 && date.getHours() < 11) {
    greeting.textContent = "Pagi"
} else if (date.getHours() >= 11 && date.getHours() < 16){
    greeting.textContent = "Siang"
} else if (date.getHours() >= 15 && date.getHours() < 19){
    greeting.textContent = "Sore"
} else {
    greeting.textContent = "Malam"
}