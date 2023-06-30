const screen = document.querySelector("#screen");
      // Function to add a character to the screen
      function addToScreen(value) {
        screen.innerHTML += value;
      }
      // Function to clear the screen
      function clearScreen() {
        screen.innerHTML = "";
      }
      // Function to delete the last character from the screen
      function deleteCharacter() {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
      }
      // Function to calculate the result
      function calculateResult() {
        // Evaluate the expression on the screen and display the result
        screen.innerHTML = eval(screen.innerHTML);
      }