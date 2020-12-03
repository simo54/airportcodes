// Declaring form and assign event listener (ln:35)
const form = document.getElementById("form");

// Function to be called on submit
const fetchData = () => {
  const code = document.getElementById("code").value;
  const codeUppercase = code.toUpperCase();

  // Async and Await for results
  async function fetching() {
    const response = await fetch(
      `https://airportcodex.herokuapp.com/${codeUppercase}`
    );
    const data = await response.json();
    try {
      const city = data[0].municipality;
      const country = data[0].iso_country;
      document.getElementById("city").value = city;
      document.getElementById("country").value = country;

      // Adding class hide if request is successfully
      const error = document.getElementById("error");
      error.classList.add("hide");
    } catch {
      // Removing class hide if request is not successfully
      const error = document.getElementById("error");
      error.classList.remove("hide");
    }
  }

  // Calling the fethcing function
  fetching();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData();
});
