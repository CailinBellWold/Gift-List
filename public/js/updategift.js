const newFormHandler = async (event) => {
  event.preventDefault();
  const url = window.location.href;
  // https://stackoverflow.com/questions/3730359/get-id-from-url-with-jquery
  const id = url.substring(url.lastIndexOf('/') + 1);
  const recipientName = document.getElementById("giftGiftee").value.trim();
  const description = document.getElementById("giftDescription").value.trim();
  //   keep these two just in case we decide to include the budget and notes
  //   const budget = document.querySelector("#giftBudget").value.trim();
  //   const notes = document.querySelector("#giftNotes").value.trim();

  if (recipientName && description) {
    const response = await fetch(`/api/gifts/${id}`, {
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
