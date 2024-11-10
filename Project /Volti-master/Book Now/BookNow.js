// Add event listener for form submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    alert("Thank you! Your charging slot has been booked.");
  });