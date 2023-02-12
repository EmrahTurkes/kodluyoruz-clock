let user = prompt("İsminizi Giriniz :");
let textUser = document.querySelector("#myName");
textUser.innerHTML = user;

function showTime() {
    let textClock = document.querySelector("#myClock");
    let date = new Date();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    let gun = date.getDay();
    switch (gun) {
        case 0: gun = "Pazar";break;
        case 1: gun = "Pazartesi";break;
        case 2: gun = "Salı";break;
        case 3: gun = "Çarşamba";break;
        case 4: gun = "Perşembe";break;
        case 5: gun = "Cuma";break;
        case 6: gun = "Cumartesi";break;
    }
    textClock.innerHTML = `${saat}:${dakika}:${saniye} ${gun}`;
}
showTime();
setInterval(showTime, 1000);