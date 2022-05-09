const randomButton = Math.ceil(Math.random() * 3);

function guessButton(xButton) {
    if (randomButton == xButton) {
         alert("YOU WON!");        
    } else {
        alert("YOU LOST!");
    }
    location.reload();
}
