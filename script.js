// Select the necessary elements
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

// URLs for the GIFs
const firstGifUrl = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/temaaciii.gif";
const replyGifUrl = "https://www.pinterest.com/pin/mochi-cat-kiss-gifs--668010557240261682/.gif";
const finalGifUrl = "https://tenor.com/view/ice-age-sid-call-me-give-me-your-number-give-me-a-call-gif-16699821.gif"; // New GIF URL

// Track the button click state
let nextClicked = false;
let replyClicked = false;

// Add event listener for the button click
nextBtn.addEventListener("click", () => {
    if (!nextClicked) {
        // First click: Update question text, change GIF, and update button text
        question.innerHTML = "Thank you for loving me, with all my shortcomings.";
        gif.src = firstGifUrl;
        nextBtn.innerHTML = "reply";
        nextClicked = true;
 
    } else {
        // Third click: Show the final GIF
        gif.src = finalGifUrl;
        nextBtn.innerHTML = "Thank you!";
        // Optionally, you can disable the button or hide it
        nextBtn.disabled = true; // Disable the button
    }
});