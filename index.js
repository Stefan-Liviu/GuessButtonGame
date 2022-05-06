function guessButton(xButton) {
    let number = 3;
    let randomButton = Math.ceil(Math.random() * number);
    if (randomButton == xButton) {
         alert("YOU WON!");        
    } else {
        alert("YOU LOST! The win button:" + randomButton);
    }
    location.reload();
}