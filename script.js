document.getElementById("genderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
  
    let genderGuess;
  
    // Explicit gender for "Sanath"
    if (name.toLowerCase() === "sanath" || name.toLowerCase() === "sanath yergol") {
      genderGuess = "GAY!";
    } else {
      // Simple logic for a random gender guess
      genderGuess = Math.random() > 0.5 ? "Male" : "Male";
    }
  
    // Update the result text and show the appropriate image
    const guessText = document.getElementById("guessText");
    const maleSymbol = document.getElementById("maleSymbol");
    const femaleSymbol = document.getElementById("femaleSymbol");
  
    guessText.innerText = `The gender guess for "${name}" is: ${genderGuess}`;
  
    // Show only the relevant gender symbol
    if (genderGuess === "Male") {
      maleSymbol.style.display = "inline";
      femaleSymbol.style.display = "none";
    } else {
      maleSymbol.style.display = "none";
      femaleSymbol.style.display = "inline";
    }
  });
  