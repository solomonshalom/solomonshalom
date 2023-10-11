        // JavaScript function to change the text
        function changeText() {
            // Get a random number (0 or 1)
            var randomNumber = Math.floor(Math.random() * 2);
            
            // Get the h1 element by its id
            var h1Element = document.getElementById("dynamicText");
            
            // Define the two text options
            var textOptions = [
                "It's me, Solomon 🌊",
                "It's the king, Solomon"
            ];
            
            // Set the text based on the random number
            h1Element.innerHTML = textOptions[randomNumber];
        }
