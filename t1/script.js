function toggleVisibility(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "none") ? "block" : "none";
}

function showAlert() {
  alert("Thanks for contacting us! 🚀");
  return false; // prevent form submission for now
}
