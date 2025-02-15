document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");
    const funnyText = document.getElementById("funny-text");
  
    // Array of messages for the "Nahi, maaf nahi kru gi!" button
    const noMessages = [
      "Maaf kar do pls!",
      "Bhabhi yr, maaf kar do pls! 😭",
      "Thoda to maaf kar do!",
      "Bhabhi, maaf kar do, meri sweet bhabhi!"
    ];
  
    let noIndex = 0;
    let noMovementActivated = false;
  
    // "Nahi, maaf nahi kru gi!" button click handler
    noButton.addEventListener("click", function() {
      if (noIndex < noMessages.length) {
        funnyText.textContent = noMessages[noIndex];
        noIndex++;
        // Once all messages are shown, notify that button will start dodging
        if (noIndex === noMessages.length) {
          funnyText.textContent += " (ab kuch hona wala 😂)";
        }
      } else {
        // After messages are exhausted, activate movement on further interaction
        activateNoMovement();
        moveNoButton();
      }
    });
  
    // "Haan, maaf kar dia!" button click handler
    yesButton.addEventListener("click", function() {
      funnyText.innerHTML = "<strong>😌 Mujhe pata tha, app maaf kar dogi, aap bohot achi ho! ❤️</strong>";
      // Hide the "Nahi" button if Yes is clicked
      noButton.style.display = "none";
    });
  
    // Activate movement for the "Nahi" button (only once)
    function activateNoMovement() {
      if (!noMovementActivated) {
        noMovementActivated = true;
        // Switch the button from relative to fixed so it can move freely
        noButton.style.position = "fixed";
        // Add event listeners for hover (desktop) and touch (mobile)
        noButton.addEventListener("mouseover", moveNoButton);
        noButton.addEventListener("touchstart", moveNoButton);
      }
    }
  
    // Function to move the "Nahi" button to a random position quickly
    function moveNoButton() {
      // Calculate a random position within the viewport
      const maxX = window.innerWidth - noButton.offsetWidth;
      const maxY = window.innerHeight - noButton.offsetHeight;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    }
  });
  