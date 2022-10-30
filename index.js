const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBoxOneEl = document.getElementById("password-box-one-el")
let passwordBoxTwoEl = document.getElementById("password-box-two-el")

function generateRandomPassword() {
    let passwordStringOne = [];
    let passwordStringTwo = [];
    for (let i = 0; i < 30; i++){
        randomIndex = (Math.floor(Math.random() * 91) + 1);
        i < 15 ? passwordStringOne.push(characters[randomIndex])
               : passwordStringTwo.push(characters[randomIndex])
    }
    passwordBoxOneEl.textContent = passwordStringOne.join('');
    passwordBoxTwoEl.textContent = passwordStringTwo.join('');
}

