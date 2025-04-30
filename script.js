document.addEventListener('DOMContentLoaded', () => {
  fetch('http://127.0.0.1:5000/api')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Flask says:", data.message);

      // Optional: show it on the page as well
      const messageElement = document.createElement('p');
      messageElement.textContent = data.message;
      document.body.appendChild(messageElement);
    })
    .catch(error => {
      console.error("Failed to connect to Flask API:", error);

      // Optional: show error on the page
      const errorElement = document.createElement('p');
      errorElement.textContent = "Could not connect to the server.";
      errorElement.style.color = "red";
      document.body.appendChild(errorElement);
    });
});
