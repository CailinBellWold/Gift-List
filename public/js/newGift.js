const saveNewGiftHandler = async (event) => {
  event.preventDefault();
  // Collect values from the /newGift form
  const recipientName = document.querySelector("#newgiftGiftee").value.trim();
  const description = document
    .querySelector("#newgiftDescription")
    .value.trim();
  // TODO: The Gifts/Gift model only takes a recipientName and description,
  //   so why do we have a budget and notes on this form?

  // recipientName and description are required to create a new Gift ...
  if (recipientName && description) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/gifts", {
      method: "POST",
      body: JSON.stringify({ recipientName, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/userlanding");
    } else {
      alert(response.statusText);
    }
  }

  const response = await fetch(`/api/gifts/${id}`, {
    method: "POST",
  });

  if (response.ok) {
    document.location.replace("/userlanding");
  } else {
    alert("Failed to delete project");
  }
};

document
  .querySelector(".newGiftForm")
  .addEventListener("submit", saveNewGiftHandler);
