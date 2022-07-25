const API_URL = "https://api.adviceslip.com/advice";

// Fetch the advice object from API.
async function fetchAdvice() {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		return data.slip;
	} catch(error) {
		console.log(error);
	}
}

fetchAdvice();