function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch("https://formspree.io/f/xdkzqpdn", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "thankyou.html"; 
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  })
  .catch(error => {
    console.error("Form submission failed:", error);
    alert("Error sending message. Please try later.");
  });
}

document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});
