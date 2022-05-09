const randomButton = Math.ceil(Math.random() * number);

function guessButton(xButton) {
    let number = 3;
    if (randomButton == xButton) {
         alert("YOU WON!");        
    } else {
        alert("YOU LOST!");
    }
    location.reload();
}
