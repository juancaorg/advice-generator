const API_URL = "https://api.adviceslip.com/advice";
const adviceNumber = document.getElementById("advice-generator__number");
const adviceQuote = document.querySelector(".advice-generator__quote");
const fetchButton = document.querySelector(".advice-generator__button");

// Render the advice number and quote.
function renderAdvice(adviceObj) {
	adviceNumber.textContent = adviceObj.id;
	adviceQuote.textContent = adviceObj.advice;
}

// Fetch the advice object from API.
// and call renderAdvice(advice).
async function fetchAdvice() {
	try {
		const response = await fetch(API_URL, { cache: "no-cache" });
		const data = await response.json();
		// data.slip is the adviceObj needed.
		renderAdvice(data.slip);
	} catch (error) {
		console.log(error);
	}
}

// Fetch a new advice everytime the button get pressed.
fetchButton.addEventListener("click", fetchAdvice);

// On load, fetch an advice.
fetchAdvice();
