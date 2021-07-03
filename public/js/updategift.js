const newFormHandler = async (event) => {
  event.preventDefault();

  const giftee = document.querySelector("#giftGiftee").value.trim();
  const description = document.querySelector("#giftDescription").value.trim();
  const budget = document.querySelector("#giftBudget").value.trim();
  const notes = document.querySelector("#giftNotes").value.trim();

  if (giftee && description && budget && notes) {
    const response = await fetch(`/api/giftRoutes`, {
      method: "PUT",
      body: JSON.stringify({ giftee, description, budget, notes }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/userlanding");
    } else {
      alert("Failed to update project");
    }
  }
};

document
  .querySelector(".updateGiftForm")
  .addEventListener("submit", newFormHandler);
