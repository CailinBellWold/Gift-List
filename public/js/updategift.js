const newFormHandler = async (event) => {
  event.preventDefault();
  //DANNY TO-DO: Update/clean ID here and on newGift handlebars
  const recipientName = document.querySelector("#giftGiftee").value.trim();
  const description = document.querySelector("#giftDescription").value.trim();
  //   keep these two just in case we decide to include the budget and notes
  //   const budget = document.querySelector("#giftBudget").value.trim();
  //   const notes = document.querySelector("#giftNotes").value.trim();

  if (recipientName && description) {
    const response = await fetch(`/api/giftRoutes`, {
      method: "PUT",
      body: JSON.stringify({ recipientName, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/userlanding");
    } else {
      alert("Failed to update gift");
    }
  }
};

document
  .querySelector(".updateGiftForm")
  .addEventListener("submit", newFormHandler);
