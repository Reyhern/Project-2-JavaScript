// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Counter functionality
let count = 0;
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const toggleCounterBtn = document.getElementById("toggleCounter");
const counterSection = document.querySelector(".counter");
incrementBtn.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});
decrementBtn.addEventListener("click", function() {
  if (count > 0) count--;
  countDisplay.textContent = count;
});
toggleCounterBtn.addEventListener("click", function() {
  if (counterSection.style.display === "none") {
    counterSection.style.display = "block";
    toggleCounterBtn.textContent = "Hide Counter";
  } else {
    counterSection.style.display = "none";
    toggleCounterBtn.textContent = "Show Counter";
  }
});
const youtubeVideo = document.getElementById("youtubeVideo");
const changeVideoBtn = document.getElementById("changeVideo");

const videoIds = [
  "ROVObkWvYfM", 
  "KC4mkZMvHWE", 
  "aNc7Gd1yJs4"
];

let currentVideo = 0;

function loadVideo() {
  youtubeVideo.src = "https://www.youtube.com/embed/" + videoIds[currentVideo];
}

loadVideo();

changeVideoBtn.addEventListener("click", function () {
  currentVideo = (currentVideo + 1) % videoIds.length;
  loadVideo();
});
// Car showcase - DOM manipulation
const carShowcase = document.getElementById("carShowcase");
const cars = [
  {
    name: "Honda Civic SiR",
    description: "A 1.6-liter DOHC VTEC B16A2 engine producing 160 horsepower",
    image: "images/sir.jpg"
  },
  {
    name: "Toyota AE86",
    description:
      "A 1.6L DOHC 16-valve 4A-GE engine, delivering around 128 horsepower",
    image: "images/toyota.jpg"
  },
  {
    name: "Mitsubishi Lancer Evolution III",
    description:
      "A 2.0-liter turbocharged inline-4 engine (4G63T) delivering 270 hp",
    image: "images/mitsubishi.jpg"
  }
];
cars.forEach(function(car) {
  const carElement = document.createElement("div");
  carElement.className = "service-card";
  carElement.innerHTML = `
                <h3>${car.name}</h3>
                <img src="${car.image}" alt="${car.name}" style="width:100%; height:auto; margin:1rem 0; border-radius:5px;">
                <p>${car.description}</p>
            `;
  carShowcase.appendChild(carElement);
});
// Form validation with RegEx
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  // Name validation: letters and spaces only, 2-30 chars
  const nameRegex = /^[A-Za-z\s]{2,30}$/;
  // Email validation: standard email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!nameRegex.test(name)) {
    formMessage.textContent =
      "Please enter a valid name (letters only, 2-30 characters)";
    formMessage.className = "form-message error";
    return;
  }
  if (!emailRegex.test(email)) {
    formMessage.textContent = "Please enter a valid email address";
    formMessage.className = "form-message error";
    return;
  }
  // If validation passes
  formMessage.textContent =
    "Thank you for your message! We will contact you soon.";
  formMessage.className = "form-message success";
  contactForm.reset();
  // Clear message after 5 seconds
  setTimeout(function() {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }, 5000);
});
