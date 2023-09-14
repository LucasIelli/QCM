const form = Array.from(document.querySelector("form")); // De type tableau, indices étant les inputs

function handleResponse(event) {
  const label = event.target.nextElementSibling;
  const labelContent = label.textContent;
  console.log(labelContent);
}

form.addEventListener("click", handleResponse);
