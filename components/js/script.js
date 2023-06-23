    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const menuButtons = document.querySelector(".menu-btn");
    const logo = document.querySelector(".logo");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const timesIcon = document.querySelector(".times-icon");
    const revealedTexts = Array.from(document.getElementsByClassName("revealedText"));
    let isMenuOpen = false;

    mobileMenuButton.addEventListener("click", () => {
        if (isMenuOpen) {
            // Close the menu
            menuButtons.classList.add("hidden");
            logo.classList.remove("hidden");
            hamburgerIcon.classList.remove("hidden");
            timesIcon.classList.add("hidden");
            isMenuOpen = false;
        } else {
            // Open the menu
            menuButtons.classList.remove("hidden");
            logo.classList.add("hidden");
            hamburgerIcon.classList.add("hidden");
            timesIcon.classList.remove("hidden");
            revealedTexts.forEach((revealedText, index) => {
            revealedText.style.visibility = "hidden"; // Hide the revealed text
            });

            setTimeout(() => {
                revealedTexts.forEach((revealedText, index) => {
                    revealedText.style.visibility = "visible"; // Show the hidden text
                    let text = revealedText.innerText;
                    let letters = text.split("");
                    let revealedLetters = "";
                    let currentLetterIndex = 0;

                    function revealNextLetter() {
                        if (currentLetterIndex < letters.length) {
                            revealedLetters += letters[currentLetterIndex];
                            revealedText.innerText = revealedLetters;
                            currentLetterIndex++;
                            setTimeout(revealNextLetter, 150); // Adjust the delay between letters here (in milliseconds)
                        }
                    }

                    revealNextLetter();
                });
            }, 200);
            isMenuOpen = true;
        }
    });


    const typed = new Typed(".web-dev", {
        strings: [" W E B   D E V E L O P E R"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: true,
        loop: true
    });