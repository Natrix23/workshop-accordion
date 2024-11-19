// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");

section1Element.addEventListener("click", toggle);
section2Element.addEventListener("click", toggle);
section3Element.addEventListener("click", toggle);

async function loadFAQ() {
  try {
    // Fetch data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Select the accordion section
    const accordion = document.querySelector(".accordion");

    // Iterate over the data and create title and description divs
    data.forEach((post) => {
      // Create a div for the title and set its class and content
      const titleDiv = document.createElement("div");
      titleDiv.classList.add("title");
      titleDiv.textContent = post.title;

      // Create a div for the description and set its class and content
      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description");
      descriptionDiv.textContent = post.body;

      // Add an event listener to toggle the "active" class on click
      titleDiv.addEventListener("click", () => {
        titleDiv.classList.toggle("active");
      });

      // Append the title and description divs to the accordion
      accordion.appendChild(titleDiv);
      accordion.appendChild(descriptionDiv);
    });
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
  }
}

// Call the function to load the FAQ content
loadFAQ();
