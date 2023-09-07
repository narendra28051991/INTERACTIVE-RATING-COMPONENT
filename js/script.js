// rating-container
const ratingContainer = document.querySelector(".rating-container");
const rating = document.querySelector(".rating");
const selectedRating = document.getElementById("selected-rating");
const submitButton = document.getElementById("submit");
// active-state
const activeMessage = document.querySelector(".active-message");
const activeState = document.querySelector(".active-state");

// form an array of 5 rating points
const stars = [];
const numberOfStars = 5;
let index = 1;

while (index <= numberOfStars) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.innerText = index;
    star.setAttribute("data-rating", index);
    stars.push(star);
    index++;
}

// attach rating point to DOM
stars.forEach(star => rating.appendChild(star));

// add click event to rating point
stars.forEach((star) => {
    star.addEventListener("click", () => {
        const rating = star.getAttribute("data-rating");
        selectedRating.textContent = rating;
        stars.forEach((current) => current.classList.remove("selected"));
        star.classList.add("selected");
    });
});

// show active state after submit
submitButton.addEventListener("click", () => {
    ratingContainer.style.display = "none";
    activeState.style.display = "block";
});
