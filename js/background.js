/* Dynamic BG stuff!! */
function randomBG() {
    // Create an array of website backgrounds stored on the server
    const backgrounds = [
        "./src/img/bg/rainbow.png", 
        "./src/img/bg/cats.png",
        "./src/img/bg/hearts.png",
        "./src/img/bg/black5_unicat.png",
        "./src/img/bg/dark-cat-rosewater.png",
        "./src/img/bg/dark-cat.png",
        "./src/img/bg/darker_unicat.png",
        "./src/img/bg/cat-sound.png",
        "./src/img/bg/rainbow2.png"
    ];

    // Pick a random background from the array
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // Set the body's background-image to the selected background
    document.getElementById("bg-image").style.backgroundImage = `url(${randomBackground})`;
}