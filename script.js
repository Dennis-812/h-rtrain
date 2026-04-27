const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const statusFilter = document.getElementById("statusFilter");
const providerCards = document.querySelectorAll(".provider-card");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleThemeBtn.textContent = "Light Mode";
  } else {
    toggleThemeBtn.textContent = "Dark Mode";
  }
});

statusFilter.addEventListener("change", () => {
  const selectedStatus = statusFilter.value;

  providerCards.forEach((card) => {
    const cardStatus = card.dataset.status;

    if (selectedStatus === "all" || selectedStatus === cardStatus) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});
